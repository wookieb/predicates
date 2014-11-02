'use strict';

var lib = require('../'),
    fs = require('fs');

var testFunction = function(funcName, func) {
    return function() {
        var isFunctionExists = Object.keys(lib)
            .some(function(key) {
                return func === lib[key];
            });
        assert.ok(isFunctionExists, 'Function "'+funcName+'" is not included');
    }
};

describe('Tests whether all functions are included', function() {
    fs.readdirSync('./src')
        .filter(function(file) {
            var stat = fs.statSync('./src/'+file);
            return stat.isFile();
        })
        .map(function(file) {
            var functionName = file.replace(/\.js$/, '');
            return {
                name: functionName,
                function: requireSrc(functionName)
            };
        })
        .forEach(function(functionDescriptor) {
            it('- function '+functionDescriptor.name, testFunction(functionDescriptor.name, functionDescriptor.function))
        });
});
