describe('include-mocha.js', function(){

  //-- Support vars and functions
    var assert = testAssert;

    var cleaner = {
      saveState : function(){
        this.clean();
        this._saveScriptNodes();
        this._saveResources();
      },
      clean : function(){
        this._removeScripts();
        this._cleanGlobalVars()
      },
      _scriptNodeList : null,
      _saveScriptNodes : function(){
        this._scriptNodeList = document.querySelectorAll('script')
      },
      _removeScripts : function(){
        var scriptNodes = document.querySelectorAll('script');
        for (var i=0; i<scriptNodes; i++){
          if ( !isInclude(this._scriptNodeList, scriptNodes[i]) ){
            scriptNodes[i].parent.removeChild(scriptNodes[i]);
            i--;
          }
        };
      },
      _cleanGlobalVars : function(){
        delete window.mocha;
      },
      _saveResources : function(){
        this.savedResources = getNewResources([]);
      }
    };
    
    function clean(callback){
      cleaner.saveState();
      callback();
      cleaner.clean();
    };

    function cleanIt( message, callback ){
      cleaner.saveState();
      it( message, callback );
      cleaner.clean();
    };

    function forEachType( callback ){

      var typeArr = [
        1,
        "string",
        null,
        undefined,
        ["", 1, null],
        ['string', 'string'],
        {}
      ];

      var res = function(){
        typeArr.forEach(function(type, i, typeArr){
          callback( type );
        });
      };

      return res;
    };

    function isString( rabbit ){
      if ( typeof( rabbit ) !== "string" ) return false;
      return true;
    };

    function isArray( rabbit ){
      if ( rabbit instanceof Array ) return true;
      return false;
    };

    function isSimpleObject( rabbit ){
      if ( typeof( rabbit ) === "object"
        && rabbit !== null
        && rabbit.__proto__ == Object.prototype
        ){
        return true;
      };
      return false;
    };

    function isUndefined( rabbit ){
      if ( rabbit === undefined ) return true;
      return false;
    };

    function isStringArray( rabbit ) {
      if ( !isArray( rabbit ) ) return false;

      for (var i=0; i<rabbit.length; i++){
        if ( !isString( rabbit[i] ) ){
          return false;
        }
      }

      return true;
    }

    function isInclude( haystack, needle ){
      if ( !haystack.length ) return false;
      for (var i=0; i<haystack.length; i++){
        if ( haystack[i] === needle ) return true;
      }
      return false;
    }

    function getNewScriptNodes( oldScriptNodes ) {
      var afterScriptNodes = document.querySelectorAll('script');

      var newScriptNodes = [];
      for (var i=0; i<afterScriptNodes.length; i++){
        if ( !isInclude( oldScriptNodes, afterScriptNodes[i] ) ){
          newScriptNodes.push( afterScriptNodes[i] );
        }
      }

      return newScriptNodes;
    }

    function getNewSRCArray( oldScriptNodes ){
      var newScriptNodes = document.querySelectorAll('script');

      var newSRCArray = [];
      for (var i=0; i<newScriptNodes.length; i++){
        if ( !isInclude( oldScriptNodes, newScriptNodes[i] ) ){
          newSRCArray.push( newScriptNodes[i].getAttribute('src') );
        }
      }

      return newSRCArray;
    }
    
    function onScriptsLoaded( newScriptNodes, callback ){
    
      var loadedScriptCounter = {
        _scriptCount : newScriptNodes.length,
        _loadedScriptCount : 0,
        addScriptCount : function(){
          this._loadedScriptCount++;
          if (this._loadedScriptCount == this._scriptCount){
            callback();
          }
        }
      }
      
      for (var i=0; i<newScriptNodes.length; i++){
        newScriptNodes[i].addEventListener('load', function(){
          loadedScriptCounter.addScriptCount();
        });
        newScriptNodes[i].addEventListener('error', function(){
          loadedScriptCounter.addScriptCount();
        });
      }
    };
    
    function getNewResources( oldResources ){
      var allScripts = document.querySelectorAll('script');
      var allLinks = document.querySelectorAll("link");
      
      var newResorces = []
      
      for (var i=0; i<allScripts.length; i++){
        if ( !isInclude( oldResources, allScripts[i] ) ){
          newResorces.push( allScripts[i] );
        }
      };
      
      for (var i=0; i<allLinks.length; i++){
        if ( !isInclude( oldResources, allLinks[i] ) ){
          newResorces.push( allLinks[i] );
        }
      };
      
      return newResorces;
      
    } //-- getNewResources()
    
    function onResourcesLoaded(callback){
      var resources = getNewResources( cleaner.savedResources );
      
      var loadedResource = returnLoadedResources();
      
      var counter = {
        resorcesCount : resources.length,
        loadedResourcesCount : loadedResources.length,
        resourceLoaded : function(){
          loadedResourcesCount++;
          if ( this.loadedResourcesCount == this.recourcesCount){
            callback;
          }
        }
      };
      
      for (var i=0; i<resources.length; i++){
        if ( !isInclude( loadedResource, resorces[i] ) ){
          resources[i].addEventListener( 'load', counter.resourceLoaded );
          resources[i].addEventListener( 'error', counter.resourceLoaded );
        };
      };
    }; //-- onResourcesLoaded()

    function shouldIncludeScript( includeMochaOption, expectedSrc ) {
      var beforeScriptNodes = document.querySelectorAll('script');

      var result = includeMocha( includeMochaOption );
      assert.isUndefined(result);

      var newSRCArray = getNewSRCArray(beforeScriptNodes);
      var validSrcCount = 0;

      newSRCArray.forEach(function(src, i, newSRCArray){
        if ( src === expectedSrc ){
          validSrcCount++;
        }
      });

      assert.strictEqual( validSrcCount, 1, "The expected count of the new valid script nodes is 1.");
    }

  //--

  cleanIt( 'Should define the global var "includeMocha".', function(){
    assert.isDefined(includeMocha);
  });

  describe( 'includeMocha( option )', function(){

    describe( 'Should return an "Error" object if pass an invalid option. Valid conditions:', function(){

      describe( 'option', function(){
        cleanIt( 'Should be a string, a string array, an object or "undefined".', forEachType(function( type ){

          if ( !isString(type)
            && !isStringArray(type)
            && !isSimpleObject(type)
            && !isUndefined(type)
            ){
            var result = includeMocha(type);
            assert.instanceOf( result, Error );
          };
        }));
      });

      describe( 'option.specRoot', function(){
        cleanIt( 'Should be a string or "undefined".', forEachType(function(type){
          if ( !isString(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'specRoot': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.specPath', function(){

        cleanIt( 'Should be a string, a string array or "undefined".', forEachType(function(type){

          if ( !isString(type)
            && !isStringArray(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'specPath': type
            });
            assert.instanceOf( result, Error );

          };

        }));
      });

      describe( 'option.scriptPath', function(){

        cleanIt( 'Should be a string, a string array or "undefined".', forEachType(function(type){

          if ( !isString(type)
            && !isStringArray(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'scriptPath': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.libRoot', function(){
        cleanIt( 'Should be a string or "undefined".', forEachType(function(type){
          if ( !isString(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'libRoot': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.mochaPath', function(){
        cleanIt( 'Should be a string or "undefined".', forEachType(function(type){
          if ( !isString(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'mochaPath': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.chaiPath', function(){
        cleanIt( 'Should be a string or "undefined".', forEachType(function(type){
          if ( !isString(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'chaiPath': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.selfPath', function(){
        cleanIt( 'Should be a string or "undefined".', forEachType(function(type){
          if ( !isString(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'selfPath': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.cssRoot', function(){
        cleanIt( 'Should be a string or "undefined".', forEachType(function(type){
          if ( !isString(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'cssRoot': type
            });
            assert.instanceOf( result, Error );

          };
        }));
      });

      describe( 'option.cssPath', function(){

        cleanIt( 'Should be a string, a string array or "undefined".', forEachType(function(type){

          if ( !isString(type)
            && !isStringArray(type)
            && !isUndefined(type)
            ){

            var result = includeMocha({
              'cssPath': type
            });
            assert.instanceOf( result, Error );

          };

        }));
      });
    });

    describe( 'Should include a module "mocha.js".', function(){

      cleanIt( 'Should include a script from the source "lib/mocha.js" if the options "option.libRoot" and "option.mochaPath" are undefined.', function(){

        shouldIncludeScript(
          undefined,
          'lib/mocha.js'
        );
      });

      cleanIt( 'Should include a script from the source "\'lib/\' + option.mochaPath" if the option "option.libRoot" is uneefined and "option.mochaPath" is string.', function(){

        shouldIncludeScript(
          { mochaPath: 'mocha-path.js' },
          'lib/mocha-path.js'
        );
      });

      cleanIt( 'Should include a script from the source "option.libRoot + \'mocha.js\'" if the option "option.libRoot" is string and "option.mochaPath" is undefined.', function(){

        shouldIncludeScript(
          { libRoot: 'lib-root/' },
          'lib-root/mocha.js'
        );
      });

      cleanIt( 'Should include a script from the source "option.libRoot + option.mochaPath" if the options "option.libRoot" and "option.mochaPath" are defined.', function(){

        shouldIncludeScript(
          { libRoot: 'lib-root/', mochaPath: 'mocha-path.js' },
          'lib-root/mocha-path.js'
        );
      });

      it( 'Should define the global var "mocha" as an instanse of the module "mocha.js".', function(done){
        cleaner.saveState();

        var beforeScriptNodes = document.querySelectorAll('script');

        var result = includeMocha();
        assert.isUndefined(result);

        var newScriptNodes = getNewScriptNodes( beforeScriptNodes );
        assert( newScriptNodes.length > 0, "The ecpected new scripts count more than 0." );

        onScriptsLoaded( newScriptNodes, function(){
          assert.isDefined(window.mocha);
          assert.strictEqual(window.mocha.name, 'Mocha');

          cleaner.clean();
          done();
        });
      });
    });
    
    describe( 'Should setup the module "mocha.js".', function(){
    
      it( 'Should call the function "window.mocha.setup(\'bdd\')" if the option "option.mochaSetup" is undefined.' );
      
      it( 'Should call the function "window.mocha.setup( option.mochaSetup )" if the option "option.mochaSetup" is defined.' );
    });
    
    describe( 'Should run the module "mocha.js".', function(){
    
      it( 'Should call the function "window.mocha.run()".' );
    
      it( 'Should put the value returned from "window.mocha.run()" in the property "runner" of the function object "includeMocha".', function(done){
        clean(function(){
        
          var result = includeMocha();
          assert.isUndefined(result);
          
          includeMocha.onComplete(function(){
            assert
          });
          
          onResourcesLoaded(function(){
            setTimeout(
              function(){
                assert.isDefined( window.includeMocha.runner );
                console.log( includeMocha.runner instanceof Runner )
              },
              20
            );
          });
        });
      });
    });

    
    
    
    
  });

});