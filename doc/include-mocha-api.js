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
/** @var {IncludeMochaInstance} includeMocha - Загрузить и настроить тестовое окружение. Запустить выполнение тестов.
*/