var is = require('./index');

var CONTAINS_ONLY_WHITESPACES = /^\s*$/;
var tests = {
    f1: function(value) {
        return is.string(value) && (value === '' || CONTAINS_ONLY_WHITESPACES.test(value));
    },
    f2: function(value) {
        return is.string(value) && String.prototype.trim.call(value) === '';
    }
};

var values = {
    long: 'asdfasdfasdfasdfasdjf asdifjnasdofjansdfijasndfiasjdnfiasjdfnisdjfnasidjfnasidjfnasidjfnaisdjfnaisdfjansdfijansdfijasndfiajsdnfiasjdfnasidjfnasidfjnasdifjnasdifjasdnifjasdnfiasjdfniasjdf',
    short: 'asdf',
    empty: '',
    whitespaces: '                                                                                                                     '
};

Object.keys(tests).forEach(function(testName) {
    var test = tests[testName];
    Object.keys(values).forEach(function(valueName) {
        var value = values[valueName];
        console.time(testName + ' - ' + valueName);
        for (var i = 0; i < 100000; i++) {
            test(value);
        }
        console.timeEnd(testName + ' - ' + valueName);
    });
});