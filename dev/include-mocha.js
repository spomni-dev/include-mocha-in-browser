(function(){
  /** @constructor */
  function IncludeMocha() {

    var self = function(){
      
      /** The alias for {@link IncludeMocha._is}
       * @member {Object} IncludeMocha~is
       * @private
       */
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
            self._complete( new Error('The option "option" should be a string, a string array, an object or "undefined".') );
            return;
          };

        //-- "option.specRoot"
          if ( !is.string( option.specRoot )
            && !is.undefined( option.specRoot )
            ){
            self._complete( new Error('The option "option.specRoot" should be a string or "undefined".') );
            return;
          };

        //-- "option.specPath"
          if ( !is.string(option.specPath)
            && !is.stringArray(option.specPath)
            && !is.undefined(option.specPath)
            ){
            self._complete( new Error('The option "option.specPath" should be a string, a string array or "undefined".') );
            return;
          };
          if ( is.string(option.specPath) ){
            option.specPath =  [option.specPath];
          }
        //-- "option.scriptPath"
          if ( !is.string(option.scriptPath)
            && !is.stringArray(option.scriptPath)
            && !is.undefined(option.scriptPath)
            ){
            self._complete( new Error('The option "option.scriptPath" should be a string, a string array or "undefined".') );
            return;
          };
          if ( is.string(option.scriptPath) ){
            option.scriptPath =  [option.scriptPath];
          }
        //-- "option.libRoot"
          if ( !is.string( option.libRoot )
            && !is.undefined( option.libRoot )
            ){
            self._complete( new Error('The option "option.libRoot" should be a string or "undefined".') );
            return;
          };

        //-- "option.mochaPath"
          if ( !is.string( option.mochaPath )
            && !is.undefined( option.mochaPath )
            ){
            self._complete( new Error('The option "option.mochaPath" should be a string or "undefined".') );
            return;
          };

        //-- "option.chaiPath"
          if ( !is.string( option.chaiPath )
            && !is.undefined( option.chaiPath )
            ){
            self._complete( new Error('The option "option.chaiPath" should be a string or "undefined".') );
            return;
          };

        //-- "option.selfPath"
          if ( !is.string( option.selfPath )
            && !is.undefined( option.selfPath )
            ){
            self._complete( new Error('The option "option.selfPath" should be a string or "undefined".') );
            return;
          };

        //-- "option.cssRoot"
          if ( !is.string( option.cssRoot )
            && !is.undefined( option.cssRoot )
            ){
            self._complete( new Error('The option "option.cssRoot" should be a string or "undefined".') );
            return;
          };

        //-- "option.cssPath"
          if ( !is.string(option.cssPath)
            && !is.stringArray(option.cssPath)
            && !is.undefined(option.cssPath)
            ){
            self._complete( new Error('The option "option.cssPath" should be a string, a string array or "undefined".') );
            return;
          };
          if ( is.string(option.cssPath) ){
            option.cssPath =  [option.cssPath];
          }
      //
      /** Contains initiated options
       * @member {IncludeMocha#_option} IncludeMocha#_option
       * @private
       */
        /** @typedef {Object} IncludeMocha#_option
         * @desc Список опций, используемых экземпляром класса "IncludeMocha".
         * @property {string} specRoot="spec/" - Путь к директории файлов спецификаций. Относительно данного пути подключаются файлы спецификаций тестов.
         * @property {string[]} specPath=[]] - Массив путей к файлам спецификаций.
         * @property {string[]} scriptPath=[]] - Массив путей к файлам тестируемых js-скриптов.
         * @property {string} libRoot="lib" - Путь к директории файлов модулей. Относительно этого пути подключаются все файлы модулей, определенные свойствами "mochaPath", "chaiPath" и "selfPath".
         * @property {string} mochaPath="mocha.js" - Путь к файлу модуля "mocha.js".
         * @property {string} chaiPath="chai.js" - Путь к файлу модуля "chai.js".
         * @property {string} selfPath="include-mocha.js" - Путь к файлу данного скрипта. Необходим для работы внутренней реализации.
         * @property {string} cssRoot="css/" - Путь к директории css-стилей. Относительно данного пути подключаются файлы css-стилей.
         * @property {string[]} cssPath="mocha.css"] - Путь или массив путей к файлам css-стилей.
         * @property {string|Object} mochaSetup="bdd" - Параметры для настройки модуля "mocha.js".
        */
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
      
      /** The object for resources register.
       * @member {object} IncludeMocha#_resources
       *
       * @property {array[]} firstStage - The first stage resource list.
       * @property {string[]} firstStage[]] - The resource data item.
       * @property {'link'|'script'} firstStage[][0]] - The resource type.
       * @property {string} firstStage.[][1]] - The resource path.
       *
       * @property {array[]} secondStage - The second stage resource list.
       * @property {string[]} secondStage[]] - The resource data item.
       * @property {'link'|'script'} secondStage[][0]] - The resource type.
       * @property {string} secondStage.[][1]] - The resource path.
       *
       * @property {function} add - Add resource to the stage.
       */
      self._resources = {
        /** @member {IncludeMocha#_stageResourceList} IncludeMocha#_Resources#firstStage
         */
        firstStage: [],
        secondStage: [],
        /** @method IncludeMocha#_resources.add
         *
         */
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
      
      return;
    }; //-- self
    
    self.runner = null;
    
    /** The error flag getter. */
    self.hasError = null;
    Object.defineProperty( self, "hasError", {
      get : function(){
        return self._hasError;
      }
    });
    
    /** The error flag. */
    self._hasError = null;
    
    self.__proto__ = IncludeMocha.prototype;
    return self;
  };

  IncludeMocha.prototype = Object.create(Function.prototype);
  
  IncludeMocha.prototype.onComplete = function( callback ){
    this._completeCallback = callback;
  };
  
  IncludeMocha.prototype._complete = function( error ){
    if ( !error ){
      this._completeCallback( {hasError: false} );
      return;
    } else if ( !self._hasError ){
      this._hasError = true;
      this._completeCallback({
        hasError: true,
        error: error
      });
    } else {
      return;
    }
  }

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
        if ( node[i].tagName === 'script' ){
          var source = node[i].getAttribute('src')
        } else {
          var source = node[i].getAttribute('href')
        }
        self._complete( new Error('Не удалось загрузить ресурс из источника "' +source +'".') );
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