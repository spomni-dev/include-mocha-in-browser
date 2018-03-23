/** @function includeMocha()
 *
 * @description - Include mocha.js, chai.js (option), spec files and css styles in document. Setup and run mocha. Define global variables: mocha, chai (option), assert (option).
 *
 * @param {string|array|object} option
 * @param {string|array} option - use like option.spec
 *
 * @param {string|null} [option.specRoot = "spec/"] - Path to the folder that contains test specification files.
 * @param {string|array} option.specPath - Path or paths to the test specification file or files.
 *
 * @param {string|null} [option.cssRoot = "css/"] - Path to the folder thhttps://github.com/spomni-dev/include-mocha.gitat contains css files.
 * @param {string|array|null} [option.cssPath = "mocha.css"] - Path|patches to the css file.
 *
 * @param {bool} [option.useChai = true] - If true, then include chai.js.
 * @param {bool} [option.defineAssert = true] - If true, then define the variable "assert" as chai.assert.
 *
 * @param {string|null} [option.libRoot = "lib/"] - Path to the folder that contains lib files.
 * @param {string} [option.mochaPath = "mocha.js"] - Path to the mocha.js file.
 * @param {string} [option.chaiPath = "chai.js"] - Path to the chai.js file.
 *
 * @param {string|object} [option.mochaSetup = "bdd"] - Options to use in mocha.setup().
 *
 * @returns {undefined|Error}
 *
 * @member {object} option
 * @member {Runner} runner - Runner of mocha.js
 *
 * @method {HTMLScriptElement|Error} includeScript - Include in document a script file.
 * @method {HTMLLinkElement|Error} includeStylesheet - Include in document a stylesheet file.
 *
 */
//
/** @method includeScript() - Include in document a script file.
 * @memberOf includeMocha()
 *
 * @description Insert a DOM-node "script" into the DOM-node "head".
 *
 * @param {string} src
 * @param {boolean} [async = false]
 *
 * @returns {HTMLScriptElement|Error}
 *
 */
//
/** @method includeStylesheet() - Include in document a css file.
 * @memberOf includeMocha()
 *
 * @description Insert a DOM-node "link" into the DOM-node "head".
 *
 * @param {string} href
 *
 * @returns {HTMLLinkElement|Error}
 *
 *
//
//
/* include-mocha.js */
  //
  /* include-mocha.js loaded */
    //
    /* includeMocha */
      //-- Should contain a function of the class "IncludeMocha".
    //
    /* includeMocha.option */
      //-- Should contain null.
    //
    /* includeMocha.runner */
      //-- Should contain null.
    //
    /* includeMocha.includeScript( src, async ) */
      //
      //-- Should return an object of class "Error" if the param "src" is not string.
      //-- Should return an object of class "Error" if the param "async" is not boolean or undefined.
      //
      //-- Should insert a script node into the node "head" as last child.
      //-- The attribute "src" of the inserted node should be equal to the param "src".
      //-- The attribute "async" of the inserted node should be equal to the param "async" if param "async" is defined.
      //-- The attribute "async" of the inserted node should be false if the param "async" is undefined.
      //
      //-- Should return an object of the HTMLScriptElement inserted in document.
    //
    /* includeMocha.includeStylesheet( href ) */
      //
      //-- Should return an object of the class "Error" if the param "href" is not string.
      //
      //-- Should insert a node "link" into the node "head" as last child.
      //-- The attribute "href" of the inserted node should be equal to the param "href".
      //
      //-- Should return an object of the class "HTMLLinkElement" inserted in document.
    //
  //
  /* includeMocha( option ) */
    //
    /* Check input params */
      //
      /* Check type of the param "option" */
        //-- Should return an object of the class "Error" if the param "option" is not string or array or object of the class "Object".
      //
      /* If the param "option" is array */
        //-- Should return an object of the class "Error" if any element of the array "option" is not string.
      //
      /* If the param "option" is object */
        //
        //-- Should return an object of the class "Error" if the param "option.specPath" is not string or array.
        //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its element is not string.
        //-- Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.cssPath" is not string or array or null or undefined.
        //-- Should return an object of the class "Error" if the param "option.cssPath" is array and any its alement is not string.
        //-- Should return an object of the class "Error" if the param "option.cssRoot" is not string or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.useChai" is not boolean or null or undefined.
        //-- Should return an object of the class "Error" if the param "option.defineAssert" is not boolean or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.mochaPath" is not string or undefined.
        //-- Should return an object of the class "Error" if the param "option.useChai" is true and the param "option.chaiPath" is not string or undefined.
        //-- Should return an object of the class "Error" if the param "option.libRoot" is not string or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.mochaSetup" is not string or undefined or an object of the class "Object".
      //
    //
    /* Check global vars before init */
      //
      //-- Should return an object of the class "Error" if the global variable "mocha" is defined.
      //-- Should return an object of the class "Error" if the global variable "chai" is defined and the param "useChai" is true or undefined.
      //-- Should return an object of the class "Error" if the global variable  "assert" is defined and the params "useChai" and "defineAssert" are true or undefined.
    //
    /* Check init of the member "includeMocha.option" */
      //
      /* includeMocha.option.specPath */
        //
        //-- Should be array.
        //-- Should contain one element equal to the param "option" if it is string.
        //-- Should contain all elements of the param "option" if it is array.
        //-- Should contain one element equal to the param "option.specPath" if it is string.
        //-- Should contain all elements of the param "option.specPath" if it is array.
      //
      /* includeMocha.option.specRoot */
        //
        //-- Should be string or null.
        //-- Should be equal to "spec/" if the param "option.specRoot" is undefined.
        //-- Should be equal to the param "option.specRoot" if it is defined.
      //
      /* includeMocha.option.cssPath */
        //
        //-- Should be array or null
        //-- Should contain one element "mocha.css" if the param "option.cssPath" is undefined.
        //-- Should be equal to the param "option.cssPath" if it is null.
        //-- Should contain one element equal to the param "option.specPath" if it is string.
        //-- Should contain all elements of the param "option.cssPath" if it is array.
      //
      /* includeMocha.option.cssRoot */
        //
        //-- Should be string or null
        //-- Should be equal to "css/" if the param "option.cssRoot" is undefined.
        //-- Should be equal to the param "option.cssRoot" if ot is defined.
      //
      /* includeMocha.option.useChai */
        //
        //-- Should be boolean
        //-- Should be equal to true if the param "option.useChai" is undefined.
        //-- Should be equal to the param "option.useChai" if it is defined.
      //
      /* includeMocha.option.defineAssert */
        //
        //-- Should be boolean
        //-- Should be equal to true if the param "option.defineAssert" is undefined.
        //-- Should be equal to the param "option.defineAssert" if it is defined.
      //
      /* includeMocha.option.mochaPath */
        //
        //-- Should be string
        //-- Should be equal to "mocha.js" if the param "option.mochaPath" is undefined.
        //-- Should be equal to the param "option.mochaPath" if it is defined.
      //
      /* includeMocha.option.chaiPath */
        //
        //-- Should be string
        //-- Should be equal to "chai.js" if the param "option.chaiPath" is undefined.
        //-- Should be equal to the param "option.chaiPath" if it is defined.
      //
      /* includeMocha.option.libRoot */
        //-- Should be string or null
        //-- Should be equal to "lib/" if the param "option.libRoot" is undefined.
        //-- Should be equal to the param "option.libRoot" if it is defined.
      //
      /* includeMocha.option.mochaSetup */
        //
        //-- Should be string or object of the class "Object".
        //-- Should be equal to "bdd" if the param "option.mochaSetup" is undefined.
        //-- Should be equal to the param "option.mochaSetup" if it is defined.
      //
    //
    /* Check the inclusion of css and lib files */
      //
      /* Check the inclusion stylesheets */
        //
        //-- The DON-node "head" should contain the DOM-node "link" for each element of the array "includeMocha.option.cssPath" for it is not null.
        //-- The attribute "href" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.cssPath[i]) if includeMocha.option.cssPath is not null.
      //
      /* Check the inclusion of lib files */
        //
        //-- The DON-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.mochaPath).
        //-- The DON-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.chaiPath) if the includeMocha.option.useChai is true.
      //
    //
    /* Check mocha.setup() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.setup()" threw error.
    //
    /* Check the inclusion of spec files */
      //
      //-- The DON-node "head" should contain the DOM-node "script" for each element of the array "includeMocha.option.cssPath".
      //-- The attribute "src" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.specPath[i]).
    //
    /* Check mocha.run() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.run()" threw error.
    //
    /* Check global vars after includeMocha */
      //
      //-- The global var "mocha" should be function.
      //-- The member "name" of the variable "mocha" should be equal to "Mocha".
      //
      //-- The global var "chai" should contain an object of the class "Object" if "includeMocha.option.useChai" is true.
      //-- The global var "chai" should has the defined members "Assertion" and "AssertionError" if "includeMocha.option.useChai" is true.
      //
      //-- The global var "assert" should be function if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
      //-- The global var "aseert" should has the defined members "Throw" and "changes" if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
    //
  //
//

/*
var testArr = [
  "string",
  1,
  true,
  false,
  null,
  undefined,
  [],
  {}
];
*/

describe( "include-mocha.js", function(){

  var assert = testChai.assert;
  var defaultOption = {};
  
  function wrIt( callback ){
    return function(){
      clearEnvironment();
    
      callback();
    
      clearEnvironment();
    };
  }

  function clearEnvironment(){
    if ( window.includeMocha ){
      window.includeMocha.option = null;
      window.includeMocha.runner = null;
    }
    window.mocha = undefined;
    window.chai = undefined;
    window.assert = undefined;
    
    var linkNodeList = document.querySelectorAll('head link');
    [].forEach.call( linkNodeList, function(linkNode, i, linkNodeList){
      if ( linkNode.includeMocha ){
        document.head.removeChild( linkNode );
      }
    });
    
    var scriptNodeList = document.querySelectorAll('head script');
    [].forEach.call( scriptNodeList, function(scriptNode, i, scriptNodeList){
      if ( scriptNode.includeMocha ){
        document.head.removeChild( scriptNode );
      }
    });
  }

  function areEqualArrays( array1, array2 ){
    if (array1.length != array2.length) return false;

    for (var i=0; i<array1.length; i++){
      if ( array1[i] instanceof Array ){
        if ( !areEqualArrays( array1[i], array2[i] ) ) return false;
      } else {
        if ( array1[i] != array2[i] ) return false;
      }
    }

    return true;
  }

  function isSimpleObject( object ){
    if ( object.__proto__.constructor == Object ) return true;
    return false;
  }

  describe( "include-mocha.js loaded", function(){

    describe( "includeMocha", function(){
      it( 'Should contain a function of the class "IncludeMocha".', function(){
        assert.instanceOf( includeMocha, Function);
        assert.instanceOf( includeMocha, IncludeMocha);
      });
    });

    describe( "includeMocha.option", function(){
      it( 'Should contain null.', function(){
        assert.isNull( includeMocha.option );
      });
    });

    describe( 'includeMocha.runner', function(){
      it( 'Should contain null.', function(){
        assert.isNull( includeMocha.runner );
      });
    });

    describe( 'includeMocha.includeScript( src, async )', function(){

      it( 'Should return an object of class "Error" if the param "src" is not string.', function(){
        var testArr = [
          undefined,
          null,
          true,
          1,
          1.2,
          [],
          {}
        ]
        for (var i=0; i<testArr.length; i++){
          assert.instanceOf( includeMocha.includeScript( testArr[i] ), Error );
        }
      });

      it( 'Should return an object of class "Error" if the param "async" is not boolean or undefined.', function(){
        var testArr = [
          null,
          "true,",
          1,
          1.2,
          [],
          {}
        ]
        for (var i=0; i<testArr.length; i++){
          assert.instanceOf( includeMocha.includeScript( "", testArr[i] ), Error );
        }
      });

      it( 'Should insert a script node into the node "head" as last child.', function(){
        var oldLastChild = document.head.lastChild;
        includeMocha.includeScript( "test-unclude-script" );
        var newLastChild = document.head.lastChild;

        assert( oldLastChild !== newLastChild );

        document.head.removeChild( newLastChild );

      });

      it( 'The attribute "src" of the inserted node should be equal to the param "src"', function(){

        var src = 'test-unclude-script';
        includeMocha.includeScript( src );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.getAttribute( "src" ) === src );

        document.head.removeChild( newLastChild );
      });

      it( 'The attribute "async" of the inserted node should be equal to the param "async" if param "async" is defined.', function(){

        var async = true;
        includeMocha.includeScript( 'test-unclude-script', async );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.async === async );

        document.head.removeChild( newLastChild );
      });

      it( 'The attribute "async" of the inserted node should be false if the param "async" is undefined.', function(){

        includeMocha.includeScript( 'test-unclude-script' );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.async === false );

        document.head.removeChild( newLastChild );
      });

      it( 'Should return an object of the HTMLScriptElement inserted in document.', function(){

        var result = includeMocha.includeScript( 'test-unclude-script' );
        var newLastChild = document.head.lastChild;

        assert( newLastChild === result );

        document.head.removeChild( newLastChild );
      });
    });

    describe( 'includeMocha.includeStylesheet( href )', function(){

      it( 'Should return an object of the class "Error" if the param "href" is not string.', function(){

        var testArr = [
          undefined,
          null,
          true,
          1,
          [],
          {}
        ]

        for (var i=0; i<testArr.length; i++){
          assert.instanceOf( includeMocha.includeStylesheet(), Error );
        }
      });

      it( 'Should insert a node "link" into the node "head" as last child.', function(){

        var oldLastChild = document.head.lastChild;
        includeMocha.includeStylesheet( "test-unclude-style" );
        var newLastChild = document.head.lastChild;

        assert( oldLastChild !== newLastChild );

        document.head.removeChild( newLastChild );

      });

      it( 'The attribute "href" of the inserted node should be equal to the param "href".', function(){

        var href = 'test-unclude-link';
        includeMocha.includeStylesheet( href );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.getAttribute( "href" ) === href );

        document.head.removeChild( newLastChild );
      });

      it( 'Should return an object of the class "HTMLLinkElement" inserted in document.', function(){

        var result = includeMocha.includeStylesheet( 'test-unclude-link' );
        var newLastChild = document.head.lastChild;

        assert( newLastChild === result );

        document.head.removeChild( newLastChild );
      });
    });
  });

  describe( 'includeMocha( option )', function(){

    describe( 'Check input params', function(){

      describe( 'Check type of the param "option"', function(){

        it( 'Should return an object of the class "Error" if the param "option" is not string or array or object of the class "Object".', function(){

          var testArr = [
            1,
            true,
            null,
            undefined
          ]

          for (var i=0; i<testArr.length; i++){
            assert.instanceOf( includeMocha( testArr[i] ), Error );
          }

        });
      });

      describe( 'If the param "option" is array', function(){

        it( 'Should return an object of the class "Error" if any element of the array "option" is not string.', function(){

          var option = ["", 1, ""];

          var result = includeMocha( option );
          assert.instanceOf( result, Error );

        });
      });

      describe( 'If the param "option" is object', function(){

        it( 'Should return an object of the class "Error" if the param "option.specPath" is not string or array.', function(){

          var testArr = [
            1,
            true,
            null,
            undefined,
            {}
          ]

          for (var i=0; i<testArr.length; i++){

            var option = { specPath : testArr[i] };
            var result = includeMocha( option );

            assert.instanceOf( result, Error);
          }

        });

        it( 'Should return an object of the class "Error" if the param "option.specPath" is array and any its element is not string.', function(){
            var option = { specPath : [
              "sfsdf",
              1,
              undefined,
              "asdf"
            ]}

            var result = includeMocha( option )

            assert.instanceOf( result, Error);

        });

        it( 'Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.', function(){

          var testArr = [
            1,
            true,
            false,
            [],
            {}
          ]

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              specRoot : testArr[i]
            });

            assert.instanceOf( result, Error );
          }


        });

        it( 'Should return an object of the class "Error" if the param "option.cssPath" is not string or array or null or undefined.', function(){

          var testArr = [
            1,
            true,
            false,
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              cssPath : testArr[i]
            });

            assert.instanceOf( result, Error );
          }

        });

        it( 'Should return an object of the class "Error" if the param "option.cssPath" is array and any its alement is not string.', function(){

            var option = {
              specPath : "",
              cssPath : [
                "string",
                1,
                undefined,
                "string"
              ]
            };

            var result = includeMocha( option );

            assert.instanceOf( result, Error );
        });

        it( 'Should return an object of the class "Error" if the param "option.cssRoot" is not string or null or undefined.', function(){

          var testArr = [
            1,
            true,
            false,
            [],
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              cssRoot : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });

        it( 'Should return an object of the class "Error" if the param "option.useChai" is not boolean or null or undefined.', function(){

          var testArr = [
            "string",
            1,
            [],
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              useChai : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });

        it( 'Should return an object of the class "Error" if the param "option.defineAssert" is not boolean or null or undefined.', function(){

          var testArr = [
            "string",
            1,
            [],
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              defineAssert : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });

        it( 'Should return an object of the class "Error" if the param "option.mochaPath" is not string or undefined.', function(){

          var testArr = [
            1,
            true,
            false,
            null,
            [],
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              mochaPath : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });

        it( 'Should return an object of the class "Error" if the param "option.selfPath" is not string or undefined.', function(){
          
          var testArr = [
            1,
            true,
            false,
            null,
            [],
            {}
          ];
          
          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              selfPath : testArr[i]
            });
          
            assert.instanceOf( result, Error );
          }
        });

        it( 'Should return an object of the class "Error" if the param "option.useChai" is true and the param "option.chaiPath" is not string or undefined.', function(){

          var testArr = [
            1,
            true,
            false,
            null,
            [],
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              useChai : true,
              chaiPath : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });

        it( 'Should return an object of the class "Error" if the param "option.libRoot" is not string or undefined.', function(){

          var testArr = [
            1,
            true,
            false,
            null,
            [],
            {}
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              libRoot : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });
        //-- Should return an object of the class "Error" if the param "option.mochaSetup" is not string or an object of the class "Object".

        it( 'Should return an object of the class "Error" if the param "option.mochaSetup" is not string or undefined or an object of the class "Object".', function(){

          var testArr = [
            1,
            true,
            false,
            null,
            [],
          ];

          for (var i=0; i<testArr.length; i++){
            var result = includeMocha({
              specPath : "",
              mochaSetup : testArr[i]
            });

            assert.instanceOf( result, Error );
          }
        });
      });
    });

    describe( 'Check global vars before init', function(){

      it( 'Should return an object of the class "Error" if the global variable "mocha" is defined.', function(){
        window.mocha = true;

        assert.instanceOf( includeMocha(""), Error );

        window.mocha = undefined;
      });

      it( 'Should return an object of the class "Error" if the global variable "chai" is defined and the param "useChai" is true or undefined.', function(){
        window.chai = true;

        assert.instanceOf(
          includeMocha({
            specPath : "",
            useChai : true
          }),
          Error
        );

        assert.instanceOf( includeMocha(""), Error );

        window.chai = undefined;
      });

      it( 'Should return an object of the class "Error" if the global variable  "assert" is defined and the params "useChai" and "defineAssert" are true or undefined.', function(){
        window.assert = true;

        var useChai = [true, undefined];
        var defineAssert = [true, undefined];

        for (var i=0; i<useChai.length; i++){
          for (var j=0; j<defineAssert.length; j++){
            var result = includeMocha({
              specPath : "",
              useChai : useChai[i],
              defineAssert : defineAssert[j]
            });

            assert.instanceOf( result, Error );
          }
        }

        window.assert = undefined;
      });
    });

    describe( 'Check init of the member "includeMocha.option"', function(){

      describe( 'includeMocha.option.specPath', function(){

        it( 'Should be array', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            ["specPath0", "specPath1", "specPath2"],
            { specPath : "specPath" },
            { specPath : ["specPath0", "specPath1", "specPath2"] }
          ];

          for (var i=0; i<optionArr.length; i++){
            var result = includeMocha( optionArr[i] );

            assert.isUndefined( result );
            assert.isArray( includeMocha.option.specPath );

            clearEnvironment();
          }

        });

        it( 'Should contain one element equal to the param "option" if it is string.', function(){
          clearEnvironment();
          var option = "specPath";
          var result = includeMocha( option );

          assert.isUndefined( result );
          assert.lengthOf( includeMocha.option.specPath, 1 );
          assert( includeMocha.option.specPath[0] == option );

          clearEnvironment();
        });

        it( 'Should contain all elements of the param "option" if it is array.', function(){
          clearEnvironment();
          var option = ["specPath0", "specPath1", "specPath2"];

          var result = includeMocha( option );

          assert.isUndefined( result );
          assert( areEqualArrays( includeMocha.option.specPath, option ), '"includeMocha.option.specPath" is not equal to the input array.' );

          clearEnvironment();
        });

        it( 'Should contain one element equal to the param "option.specPath" if it is string.', function(){
          clearEnvironment();
          var option = { specPath : "specPath"};
          var result = includeMocha( option );

          assert.isUndefined( result );
          assert.lengthOf( includeMocha.option.specPath, 1 );
          assert( includeMocha.option.specPath[0] == option.specPath, "'includeMocha.option.specPath' don't contain the value of 'option.specPath'" );

          clearEnvironment();
        });

        it( 'Should contain all elements of the param "option.specPath" if it is array.', function(){
          clearEnvironment();
          var option = { specPath : ["specPath0", "specPath1", "specPath2"] };

          var result = includeMocha( option );

          assert.isUndefined( result );
          assert( areEqualArrays( includeMocha.option.specPath, option.specPath ), '"includeMocha.option.specPath" is not equal to the input array.' );

          clearEnvironment();
        });
      });

      describe( 'includeMocha.option.specRoot', function(){

        it( 'Should be string or null.', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "" },
            { specPath : "", specRoot : null },
            { specPath : "", specRoot : "string" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            var specRoot = includeMocha.option.specRoot;

            assert.isUndefined( result );
            assert( (specRoot === null || typeof( specRoot ) == 'string'), "'includeMocha.option.specRoot' is not string or null." );

            clearEnvironment();
          }
        });

        it( 'Should be equal to "spec/" if the param "option.specRoot" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";
          var result = includeMocha( option );

          assert.isUndefined( result );
          assert( (includeMocha.option.specRoot === 'spec/'), "'includeMocha.option.specRoot' is not equal to the string 'spec/'." )

          clearEnvironment();

        });

        it( 'Should be equal to the param "option.specRoot" if it is defined.', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "", specRoot : null },
            { specPath : "", specRoot : "/specRoot" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );

            assert.isUndefined( result );
            assert( includeMocha.option.specRoot === optionArr[i].specRoot );

            clearEnvironment();
          }
        });
      });

      describe( 'icnludeMocha.option.cssPath', function(){

        it( 'Should be array or null', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "" },
            { specPath : "", cssPath : null },
            { specPath : "", cssPath : "string" },
            { specPath : "", cssPath : ["string", "cssPath"] }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            var cssPath = includeMocha.option.cssPath;

            assert.isUndefined( result );
            assert( (cssPath === null || ( cssPath instanceof Array ) ), "'includeMocha.option.cssPath' is not string or null." );

            clearEnvironment();
          }
        });

        it( 'Should contain one element "mocha.css" if the param "option.cssPath" is undefined.', function(){
          clearEnvironment();
          var result = window.includeMocha( 'specPath' );

          assert.isUndefined( result );
          var cssPath = window.includeMocha.option.cssPath;
          assert.lengthOf( cssPath, 1 );
          assert( (cssPath[0] === 'mocha.css'), "includeMocha.option.cssPath is not equal to 'mocha.css'" );

        });

        it( 'Should be equal to the param "option.cssPath" if it is null.', function(){
          clearEnvironment();
          var option = { specPath : "specPath", cssPath : null }

          var result = window.includeMocha( option );
          assert.isUndefined( result );

          assert.isNull( window.includeMocha.option.cssPath );

          clearEnvironment();
        });

        it( 'Should contain one element equal to the param "option.specPath" if it is string.', function(){
          clearEnvironment();
          var option = { specPath : "specPath", cssPath : "cssPath" };
          var includeMocha = window.includeMocha;

          var result = includeMocha( option );
          assert.isUndefined( result );

          var cssPath = includeMocha.option.cssPath;
          assert.lengthOf( cssPath, 1 );
          assert( cssPath[0] === option.cssPath, "'includeMocha.option.cssPath' don't equal to the input value." );

          clearEnvironment();
        });

        it( 'Should contain all elements of the param "option.cssPath" if it is array.', function(){
          clearEnvironment();
          var option = {
            specPath : "specPath",
            cssPath : [ "cssPath0", "cssPath1" ]
          };
          var includeMocha = window.includeMocha;

          var result = includeMocha( option );
          assert.isUndefined( result );

          var cssPath = includeMocha.option.cssPath;
          assert( areEqualArrays( option.cssPath, cssPath ), "'includeMocha.option.cssPath' don't equal to input array." );

          clearEnvironment();
        });
      });

      describe( 'includeMocha.option.cssRoot', function(){

        it( 'Should be string or null', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", cssRoot : null },
            { specPath : "specPath", cssRoot : "cssRoot" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var includeMocha = window.includeMocha;
            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            var cssRoot = includeMocha.option.cssRoot;
            assert( ( (cssRoot === null) || (typeof( cssRoot ) === 'string') ), "'includeMocha.option.cssRoot' is not null or string." );

            clearEnvironment();
          }
        });

        it( 'Should be equal to "css/" if the param "option.cssRoot" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";

          var result = includeMocha( option );
          assert.isUndefined( result );

          assert( (includeMocha.option.cssRoot === 'css/'), "'includeMocha.option.specRoot' is not equal to the string '/spec'." )

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.cssRoot" if it is defined.', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "", cssRoot : null },
            { specPath : "", cssRoot : "cssRoot/" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert( includeMocha.option.cssRoot === optionArr[i].cssRoot );

            clearEnvironment();
          }
        });
      });

      describe( 'includeMocha.option.useChai', function(){

        it( 'Should be boolean', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", useChai : true },
            { specPath : "specPath", useChai : false }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert.isBoolean( includeMocha.option.useChai );

            clearEnvironment();
          }
        });

        it( 'Should be equal to true if the param "option.useChai" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";

          var result = includeMocha( option );
          assert.isUndefined( result );

          assert.isTrue( includeMocha.option.useChai );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.useChai" if it is defined.', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "specPath", useChai : true },
            { specPath : "specPath", useChai : false }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert( includeMocha.option.useChai === optionArr[i].useChai );

            clearEnvironment();
          }
        });
      });

      describe( 'includeMocha.option.defineAssert', function(){

        it( 'Should be boolean', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", defineAssert : true },
            { specPath : "specPath", defineAssert : false }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert.isBoolean( includeMocha.option.defineAssert );

            clearEnvironment();
          }
        });

        it( 'Should be equal to true if the param "option.defineAssert" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";

          var result = includeMocha( option );
          assert.isUndefined( result );

          assert.isTrue( includeMocha.option.defineAssert );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.defineAssert" if it is defined.', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "specPath", defineAssert : true },
            { specPath : "specPath", defineAssert : false }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert( includeMocha.option.defineAssert === optionArr[i].defineAssert );

            clearEnvironment();
          }
        });
      });

      describe( 'includeMocha.option.mochaPath', function(){
        it( 'Should be string', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", mochaPath : "mochaPath" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert.isString( includeMocha.option.mochaPath );

            clearEnvironment();
          }
        });

        it( 'Should be equal to "mocha.js" if the param "option.mochaPath" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";

          var result = includeMocha( option );
          assert.isUndefined( result );

          var mochaPath = includeMocha.option.mochaPath;
          assert( mochaPath === 'mocha.js', "'includeMocha.option.mochaPath' don't equal to the string 'mocha.js'." );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.mochaPath" if it is defined.', function(){
          clearEnvironment();
          var option = { specPath : "spwcPath", mochaPath : "mochaPath" };

          var result = includeMocha( option );
          assert.isUndefined( result );

          assert( includeMocha.option.mochaPath === option.mochaPath, "'includeMocha.option.mochaPath' don't equal to the input value." )

          clearEnvironment();
        });
      });

      describe( 'includeMocha.option.chaiPath', function(){

        it( 'Should be string', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", chaiPath : "chaiPath" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert.isString( includeMocha.option.chaiPath );

            clearEnvironment();
          }
        });

        it( 'Should be equal to "chai.js" if the param "option.chaiPath" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";

          var result = includeMocha( option );
          assert.isUndefined( result );

          var chaiPath = includeMocha.option.chaiPath;
          assert( chaiPath === 'chai.js', "'includeMocha.option.chaiPath' don't equal to the string 'chai.js'." );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.chaiPath" if it is defined.', function(){
          clearEnvironment();
          var option = { specPath : "specPath", chaiPath : "chaiPath" };

          var result = includeMocha( option );
          assert.isUndefined( result );

          assert( includeMocha.option.chaiPath === option.chaiPath, "'includeMocha.option.chaiPath' don't equal to the input value." )

          clearEnvironment();
        });
      });

      describe( 'includeMocha.option.selfPath', function(){

        it( 'Should be string', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", selfPath : "selfPath" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert.isString( includeMocha.option.selfPath );

            clearEnvironment();
          }
        });

        it( 'Should be equal to "includeMocha.js" if the param "option.selfPath" is undefined.', function(){
          clearEnvironment();
          var option = "specPath";

          var result = includeMocha( option );
          assert.isUndefined( result );

          var selfPath = includeMocha.option.selfPath;
          assert( selfPath === 'include-mocha.js', "'includeMocha.option.selfPath' don't equal to the string 'include-mocha.js'." );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.selfPath" if it is defined.', function(){
          clearEnvironment();
          var option = { specPath : "specPath", selfPath : "selfPath" };

          var result = includeMocha( option );
          assert.isUndefined( result );

          assert( includeMocha.option.selfPath === option.selfPath, "'includeMocha.option.selfPath' don't equal to the input value." )

          clearEnvironment();
        });
      });

      describe( 'includeMocha.option.libRoot', function(){

        it( 'Should be string or null', function(){
          clearEnvironment();
          var optionArr = [
            "specPath",
            { specPath : "specPath", csslibRootRoot : null },
            { specPath : "specPath", libRoot : "libRoot" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var includeMocha = window.includeMocha;
            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            var libRoot = includeMocha.option.libRoot;
            assert( ( (libRoot === null) || (typeof( libRoot ) === 'string') ), "'includeMocha.option.libRoot' is not null or string." );

            clearEnvironment();
          }
        });

        it( 'Should be equal to "lib/" if the param "option.libRoot" is undefined.', function(){
          clearEnvironment();
          var result = includeMocha( "specPath" );
          assert.isUndefined( result );

          var libRoot = includeMocha.option.libRoot;
          assert( libRoot === 'lib/', "'includeMocha.option.libRoot' don't equal to the string 'lib/'." );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.libRoot" if it is defined.', function(){
          clearEnvironment();
          var optionArr = [
            { specPath : "", libRoot : "libRoot/" }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            assert( includeMocha.option.libRoot === optionArr[i].libRoot );

            clearEnvironment();
          }
        });
      });

      describe( 'includeMocha.option.mochaSetup', function(){
        clearEnvironment();
        it( 'Should be string or object of the class "Object".', function(){

          var optionArr = [
            { specPath : "specPath", mochaSetup : "mochaSetup" },
            { specPath : "specPath", mochaSetup : { ui : "bdd"} }
          ];

          for (var i=0; i<optionArr.length; i++){

            var result = includeMocha( optionArr[i] );
            assert.isUndefined( result );

            var mochaSetup = includeMocha.option.mochaSetup;
            assert( ( typeof(mochaSetup) == 'string' ) || isSimpleObject( mochaSetup ), "'includeMocha.option.mochaSetup' is not string or an object of class 'Object'."  )

            clearEnvironment();
          }
        });

        it( 'Should be equal to "bdd" if the param "option.mochaSetup" is undefined.', function(){
          clearEnvironment();
          var result = includeMocha( "specPath" );
          assert.isUndefined( result );

          var mochaSetup = includeMocha.option.mochaSetup;
          assert( mochaSetup === 'bdd', "'includeMocha.option.mochaSetup' don't equal to the string 'bdd'" );

          clearEnvironment();
        });

        it( 'Should be equal to the param "option.mochaSetup" if it is defined.', function(){
          clearEnvironment();
          var option = {
            specPath : "specPath",
            mochaSetup : { ui : "bdd", ignoreLeaks : true }
          }

          var result = includeMocha( option );
          assert.isUndefined( result );

          var mochaSetup = includeMocha.option.mochaSetup;
          assert.deepEqual( option.mochaSetup, mochaSetup );

          clearEnvironment();
        });
      });
    });

    describe('Check the inclusion of css and lib files', function(){

      describe( 'Check the inclusion stylesheets', function(){
        
        it( 'The DOM-node "head" should contain the DOM-node "link" for each element of the array "includeMocha.option.cssPath" for it is not null.', function(){
          clearEnvironment();
          
          var linkCountOnInit = document.querySelectorAll( 'head link' ).length;
          
          var result = includeMocha({
            specPath : 'specPath',
            cssPath : [
              'cssPath0',
              'cssPath1',
              'cssPath2',
              'cssPath3',
              'cssPath4'
            ]
          });
          assert.isUndefined( result );
          
          var linkCount = document.querySelectorAll( 'head link' ).length;
          var cssPathCount = includeMocha.option.cssPath.length;

          assert( (linkCount == ( linkCountOnInit + cssPathCount ) ), 'Wrong count of the tags "link".' );
          
          clearEnvironment();
        });
        
        it( 'The attribute "href" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.cssPath[i]).', function(){
          clearEnvironment();
          var result = includeMocha({
            specPath : 'specPath',
            cssPath : [
              'cssPath0',
              'cssPath1',
              'cssPath2',
              'cssPath3',
              'cssPath4'
            ]
          });
          assert.isUndefined( result );
          
          var hrefArray = [];
          includeMocha.option.cssPath.forEach(function(cssPath, i, cssPathArray){
            hrefArray.push( includeMocha.option.cssRoot + cssPath );
          });
          
          var linkNodeList = document.querySelectorAll('head link');
          [].forEach.call( linkNodeList, function(linkNode, i, linkNodeList){
            if ( linkNode.includeMocha ){
              assert.include( hrefArray, linkNode.getAttribute('href') );
            }
          });
          
          clearEnvironment();
        });
        
      });
      
      
      describe( 'Check the inclusion of lib files', function(){

        it( 'The DOM-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.mochaPath).', function(){
          clearEnvironment();
          var option = {
            specPath : 'specPath',
            mochaPath : "mochaPath",
            libRoot : 'libRoot/'
          };
          
          var result = includeMocha( option );
          assert.isUndefined( result );
          
          var src = option.libRoot + option.mochaPath;
          var scriptIsIncluded = false;
          var scriptNodeList = document.querySelectorAll('head script');
          [].forEach.call( scriptNodeList, function(scriptNode, i, scriptNodeList){
            if ( scriptNode.getAttribute('src') == src ){
              scriptIsIncluded = true;
            }
          });
          
          assert( scriptIsIncluded, 'Inserted tag "script" not found.');
          
          clearEnvironment();
        });
        
        it( 'The DOM-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.chaiPath) if the includeMocha.option.useChai is true.', function(){
          clearEnvironment();
          var option = {
            specPath : 'specPath',
            chaiPath : 'chaiPath',
            libRoot : 'libRoot'
          } 
          
          var result = includeMocha( option );
          assert.isUndefined( result );
          
          var src = option.libRoot + option.chaiPath;
          var scriptNodeList = document.querySelectorAll('head script');
          var scriptIsIncluded = false;
          [].forEach.call( scriptNodeList, function(scriptNode, i, scriptNodeList){
            if ( scriptNode.getAttribute('src') == src ){
              scriptIsIncluded = true;
            }
          });
          
          assert(scriptIsIncluded, 'Inserted tag "script" not found.');
          
          clearEnvironment();
        });
        
      });
      
    });

    describe( 'Check the inclusion of spec files', function(){
      
      it( 'The DOM-node "head" should contain the DOM-node "script" for each element of the array "includeMocha.option.specPath".', wrIt(function(){
        var result = includeMocha({
          specPath : [
            'specPath0',
            'specPath1',
            'specPath2',
            'specPath3',
            'specPath4'
          ]
        });
        assert.isUndefined( result );
        
        var srcArray = [];
        includeMocha.option.specPath.forEach(function(specPath, i, specPathArray){
          srcArray.push( includeMocha.option.libRoot + specPath );
        });
        
        var scriptNodeList = document.querySelectorAll('head script');
        [].forEach.call( scriptNodeList, function(scriptNode, i, scriptNodeList){
          if ( scriptNode.includeMocha ){
            assert.include( srcArray, scriptNode.getAttribute('src') );
          }
        });
      }));
      //-- The attribute "src" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.specPath[i]).
    });
    //
    /* Check mocha.run() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.run()" threw error.
    //
    /* Check global vars after includeMocha */
      //
      //-- The global var "mocha" should be function.
      //-- The member "name" of the variable "mocha" should be equal to "Mocha".
      //
      //-- The global var "chai" should contain an object of the class "Object" if "includeMocha.option.useChai" is true.
      //-- The global var "chai" should has the defined members "Assertion" and "AssertionError" if "includeMocha.option.useChai" is true.
      //
      //-- The global var "assert" should be function if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
      //-- The global var "aseert" should has the defined members "Throw" and "changes" if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
    //
  });
});