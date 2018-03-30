(function(){

  /** @constructor IncludeMocha
   *
   */
  function IncludeMocha() {

    var self = function(){

      var is = self._is;

      //-- preinit input param
        if ( is.string(option) ){
          option = { "specPath": [option] };
        } else if ( is.array(option) ){
          option = { 'specPath': option };
        } else if ( is.undefined(option) ){
          option = {};
        }

      //-- validate input param
        //-- "option"
          if ( !is.simpleObject(option) ){
            return new Error('The option "option" should be a string, a string array, an object or "undefined".')
          };

        //-- "option.specRoot"
          if ( !is.string( option.specRoot )
            && !is.undefined( option.specRoot )
            ){
            return new Error('The option "option.specRoot" should be a string or "undefined".')
          };

        //-- "option.specPath"
          if ( !is.string(option.specPath)
            && !is.stringArray(option.specPath)
            && !is.undefined(option.specPath)
            ){
            return new Error('The option "option.specPath" should be a string, a string array or "undefined".')
          };
          if ( is.string(option.specPath) ){
            option.specPath =  [option.specPath];
          }
        //-- "option.scriptPath"
          if ( !is.string(option.scriptPath)
            && !is.stringArray(option.scriptPath)
            && !is.undefined(option.scriptPath)
            ){
            return new Error('The option "option.scriptPath" should be a string, a string array or "undefined".')
          };
          if ( is.string(option.scriptPath) ){
            option.scriptPath =  [option.scriptPath];
          }
        //-- "option.libRoot"
          if ( !is.string( option.libRoot )
            && !is.undefined( option.libRoot )
            ){
            return new Error('The option "option.libRoot" should be a string or "undefined".')
          };

        //-- "option.mochaPath"
          if ( !is.string( option.mochaPath )
            && !is.undefined( option.mochaPath )
            ){
            return new Error('The option "option.mochaPath" should be a string or "undefined".')
          };

        //-- "option.chaiPath"
          if ( !is.string( option.chaiPath )
            && !is.undefined( option.chaiPath )
            ){
            return new Error('The option "option.chaiPath" should be a string or "undefined".')
          };

        //-- "option.selfPath"
          if ( !is.string( option.selfPath )
            && !is.undefined( option.selfPath )
            ){
            return new Error('The option "option.selfPath" should be a string or "undefined".')
          };

        //-- "option.cssRoot"
          if ( !is.string( option.cssRoot )
            && !is.undefined( option.cssRoot )
            ){
            return new Error('The option "option.cssRoot" should be a string or "undefined".')
          };

        //-- "option.cssPath"
          if ( !is.string(option.cssPath)
            && !is.stringArray(option.cssPath)
            && !is.undefined(option.cssPath)
            ){
            return new Error('The option "option.cssPath" should be a string, a string array or "undefined".')
          };
          if ( is.string(option.cssPath) ){
            option.cssPath =  [option.cssPath];
          }
      //
      self._option = {
        'specRoot':   option.specRoot   || 'spec/',
        'specPath':   option.specPath   || [],
        'scriptPath': option.scriptPath || [],
        'libRoot':    option.libRoot    || 'lib/',
        'mochaPath':  option.mochaPath  || 'mocha.js',
        'chaiPath':   option.chaiPath   || 'chai.js',
        'selfPath':   option.selfPath   || 'include-mocha.js',
        'cssRoot':    option.cssRoot    || 'css/',
        'cssPath':    option.cssPath    || [],
        'mochaSetup': option.mochaSetup || 'bdd'
      };

      self._resources = {
        firstStage: [],
        secondStage: [],
        add: function( stage, type, source ){
          this[stage] = [ type, source ];
        }
      };

      (function(){ //-- add resources
        //-- define local symlinks
          var specRoot   = self._option.specRoot;
          var specPath   = self._option.specPath;
          var scriptPath = self._option.scriptPath;
          var libRoot    = self._option.libRoot;
          var mochaPath  = self._option.mochaPath;
          var chaiPath   = self._option.chaiPath;
          var cssRoot    = self._option.cssRoot;
          var cssPath    = self._option.cssPath;
        //

        for (var i=0; i<cssPath.length; i++){
          self._resources.add( 'firstStage', 'link', cssRoot + cssPath[i] );
        }
        self._resources.add( 'firstStage', 'script', libRoot + mochaPath );
        self._resources.add( 'firstStage', 'script', libRoot + chaiPath );

        for (var i=0; i<scriptPath.length; i++){
          self._resources.add( 'secondStage', 'script', scriptPath[i] );
        }
        for (var i=0; i<specPath.length; i++){
          self._resources.add( 'secondStage', 'script', specRoot + specPath[i] );
        }
      })();

      self._onResourcesLoaded( 'firstStage', function(){
        mocha.setup( self._option.mochaSetup );
        self._loadResources( 'secondStage' );
      });

      self._onResourcesLoaded( 'secondStage', function(){
        self._createMochaViewport();
        self.runner = mocha.run();
      });

      self._loadResources( 'firstStage' );
    };
    self.__proto__ = IncludeMocha.prototype;
    return self;
  };

  IncludeMocha.prototype = Object.create(Function.prototype);

  IncludeMocha.prototype._loadResources = function( stage ){

    var resNodes = [];

    this._resources[stage].forEach(function(res, i, resorces){
      if ( res[0] == 'link' ){
        resNodes.push( self._includeStylesheet( res[1] ) );
      } else if ( res[0] == 'script' ){
        resNodes.push( self._includeScript( res[1] ) );
      }
    });

    self._onNodesLoaded( resNodes, self._stagesCallbacks[stage] );

  };

  IncludeMocha.prototype._onResourcesLoaded = function( stage, callback ){
      self._stagesCallbacks[stage] = callback;
  };

  IncludeMocha.prototype._onNodesLoaded = function( nodes, callback ){

    var counter = {
      nodesCount : nodes.length,
      loadedNodesCount : 0,
      nodeLoaded : function(){
        this.loadedNodesCount++;
        if ( nodesCount === loadedNodesCount ){
          if ( !this._hasError ){
            callback();
          }
        }
      }
    };

    for (var i=0; i<nodes.length; i++){
      nodes[i].addEventListener('load', function(){
        counter.nodeLoaded();
      });
    }

    for (var i=0; i<nodes.length; i++){
      nodes[i].addEventListener('error', function(){
        self._foundResourceLoadError( nodes[i] );
      });
    }
  };

  IncludeMocha.prototype._is = {

    array : function( rabbit ){
      if ( rabbit instanceof Array ) return true;
      return false;
    },

    simpleObject : function( rabbit ){
      if ( typeof( rabbit ) === "object"
        && rabbit !== null
        && rabbit.__proto__ == Object.prototype
        ){
        return true;
      };
      return false;
    },

    string : function( rabbit ){
      if ( typeof( rabbit ) !== "string" ) return false;
      return true;
    },

    stringArray : function( rabbit ) {
      if ( !this._is.array( rabbit ) ) return false;

      for (var i=0; i<rabbit.length; i++){
        if ( !this._is.string( rabbit[i] ) ){
          return false;
        }
      }

      return true;
    },

    undefined : function( rabbit ){
      if ( rabbit === undefined ) return true;
      return false;
    }
  };

  window.includeMocha = new IncludeMocha();

})();