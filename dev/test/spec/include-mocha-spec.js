describe('include-mocha.js', function(){

  //-- Support vars and functions
    var assert = testAssert;

    function cleanEnvironment( when ){

    };

    function cleanIt( message, callback ){
      cleanEnvironment( 'before' );
      it( message, callback );
      cleanEnvironment( 'after' );
    };

    /** Call the callback function for each standart data type. Pass an instance of the type as the option "type".
      * @param {Function} callback( type )
      * @returns {undefined}
      */
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

    /** Return true if the "rabbit" is an array of strings.
     *
     * @param {mixed} rabbit
     *
     * @returns {boolean}
     *
     * @requires isArray()
     * @requires isString()
     */
    function isStringArray( rabbit ) {
      if ( !isArray( rabbit ) ) return false;

      for (var i=0; i<rabbit.length; i++){
        if ( !isString( rabbit[i] ) ){
          return false;
        }
      }

      return true;
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
  });

});