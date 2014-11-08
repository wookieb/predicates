#Predicates
[![Build Status](https://travis-ci.org/wookieb/predicates.svg)](https://travis-ci.org/wookieb/predicates)

Set of various predicates for type checking, assertions, filtering etc.

##Install
```
npm install predicates
```

##Documentation
For list of all available functions see [API reference](docs/api.md)

If you wonder why _predicates_ is different, read [API design principles](docs/design.md)

##Example

```js
var is = require('predicates');

is.string(1); // false
is.string('test'); // true

is.undefinedOr(is.string, undefined); // true
is.undefinedOr(is.string, 'timmy'); // true
is.undefinedOr(is.string)(undefined); // true
is.undefinedOr(is.string)('timmy'); // true

var isPerson = is.structure({
	name: is.string,
	surname: is.undefinedOr(is.string),
	age: is.number,
	
});
```
Read [API reference](docs/api.md) for list of all available functions

##Assertions
[Assert-generator](https://github.com/wookieb/assert-generator) helps you to create assertions directly from predicates which is very useful for arguments assertions

```js
var is = require('predicates'),
    createAssert = require('assert-generator');
    
var assertName = createAssert(is.string, 'Name must be a string');

var Module = function(name) {
    assertName(name);
}

new Module(101); // Error: Name must be a string
```

##Changelog

###0.2
* Added information how to use _predicates_ for arguments assertions
* Added documentation with examples and design rules
* Added "startsWith" and "endsWith" functions
* Added type checking for property names for hasOwnProperty and hasProperty predicate
* Fixed error type declaration for @throws