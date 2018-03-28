/** @typedef {Function} IncludeMochaInstance
 * @description Загрузить и настроить тестовое окружение. Запустить выполнение тестов. Вывести ошибку в тело документа, если невозможно загрузить любой из ресурсов.
 *
 * @param {string|string[]|Object} [option] - Путь или массив путей к файлам спецификаций или список опций.
 * @param {string} [option.specRoot="spec/"] - Путь к директории файлов спецификаций. Относительно данного пути подключаются файлы спецификаций тестов.
 * @param {string|string[]} [option.specPath=[]] - Путь либо массив путей к файлам спецификаций.
 * @param {string|string[]} [option.scriptPath=[]] - Путь либо массив путей к файлам тестируемых js-скриптов.
 * @param {string} [option.libRoot="lib"] - Путь к директории файлов модулей. Относительно этого пути подключаются все файлы модулей, определенные свойствами "mochaPath", "chaiPath" и "selfPath".
 * @param {string} [option.mochaPath="mocha.js"] - Путь к файлу модуля "mocha.js".
 * @param {string} [option.chaiPath="chai.js"] - Путь к файлу модуля "chai.js".
 * @param {string} [option.selfPath="include-mocha.js"] - Путь к файлу данного скрипта. Необходим для работы внутренней реализации.
 * @param {string} [option.cssRoot="css/"] - Путь к директории css-стилей. Относительно данного пути подключаются файлы css-стилей.
 * @param {string|string[]} [option.cssPath="mocha.css"] - Путь или массив путей к файлам css-стилей.
 * @param {string|Object} [option.mochaSetup="bdd"] - Параметры для настройки модуля "mocha.js".
 *
 * @returns {undefined|Error}
 *
 * @property {null|Runner} runner - Результат вызова "mocha.run()".
 */
//

if (window.includeMocha === undefined){ // the first load
  (function(){

    /** @class IncludeMocha
     * @desc Create a function for the easy setup of the test environment.
     * @returns {IncludeMochaInstance}
     */
    function IncludeMocha(){

      /** @var {IncludeMochaInstance} self
       * @private
       * @inner
       * @memberof IncludeMocha
       */
      self = function( option ){
        //-- Check and init input param
          //-- check "option"
            if ( !isString(option)
              && !isStringArray(option)
              && !isSimpleObject(option)
              && !isUndefined(option)
              ){
              return new Error('The option "option" should be a string, a string array, an object or "undefined".')
            };
          //-- check init "option"
            if ( isString(option) ){
              option = { "specPath": [option] };
            } else if ( isArray(option) ){
              option = { 'specPath': option };
            } else if ( isUndefined(option) ){
              option = {};
            }
          //-- check "option.specRoot"
            if ( !isString( option.specRoot )
              && !isUndefined( option.specRoot )
              ){
              return new Error('The option "option.specRoot" should be a string or "undefined".')
            };
            
          //-- check "option.specPath"
            if ( !isString(option.specPath)
              && !isStringArray(option.specPath)
              && !isUndefined(option.specPath)
              ){
              return new Error('The option "option.specPath" should be a string, a string array or "undefined".')
            };

          //-- check "option.scriptPath"
            if ( !isString(option.scriptPath)
              && !isStringArray(option.scriptPath)
              && !isUndefined(option.scriptPath)
              ){
              return new Error('The option "option.scriptPath" should be a string, a string array or "undefined".')
            };
            
          //-- check "option.libRoot"
            if ( !isString( option.libRoot )
              && !isUndefined( option.libRoot )
              ){
              return new Error('The option "option.libRoot" should be a string or "undefined".')
            };
            
          //-- check "option.mochaPath"
            if ( !isString( option.mochaPath )
              && !isUndefined( option.mochaPath )
              ){
              return new Error('The option "option.mochaPath" should be a string or "undefined".')
            };
            
          //-- check "option.chaiPath"
            if ( !isString( option.chaiPath )
              && !isUndefined( option.chaiPath )
              ){
              return new Error('The option "option.chaiPath" should be a string or "undefined".')
            };
            
          //-- check "option.selfPath"
            if ( !isString( option.selfPath )
              && !isUndefined( option.selfPath )
              ){
              return new Error('The option "option.selfPath" should be a string or "undefined".')
            };
            
          //-- check "option.cssRoot"
            if ( !isString( option.cssRoot )
              && !isUndefined( option.cssRoot )
              ){
              return new Error('The option "option.cssRoot" should be a string or "undefined".')
            };
            
          //-- check "option.cssPath"
            if ( !isString(option.cssPath)
              && !isStringArray(option.cssPath)
              && !isUndefined(option.cssPath)
              ){
              return new Error('The option "option.cssPath" should be a string, a string array or "undefined".')
            };
        //
      };

      self.__proto__ = IncludeMocha.prototype;
      return self;
    }
    IncludeMocha.prototype = Object.create(Function.prototype);

    /** @var {IncludeMochaInstance} includeMocha - Загрузить и настроить тестовое окружение. Запустить выполнение тестов. */
    window.includeMocha = new IncludeMocha();

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

  })();
} else if ( undefined ){ // the second load

} else { //the third load

}