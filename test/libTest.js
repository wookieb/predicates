'use strict';

var lib = require('../'),
    fs = require('fs'),
    assert = require('assert');

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
            return stat.isFile() && file !== 'predicate.js';
        })
        .map(function(file) {
            var functionName = file.replace(/\.js$/, '');
            return {
                name: functionName,
                function: require('../src/'+functionName)
            };
        })
        .forEach(function(functionDescriptor) {
            it('- function '+functionDescriptor.name, testFunction(functionDescriptor.name, functionDescriptor.function))
        });
});
