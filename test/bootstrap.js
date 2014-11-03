require("blanket")({
    pattern: 'src'
});

global.requireSrc = function(moduleName) {
    return require(__dirname+'/../src/'+moduleName);
};
global.assert = require('assert');
