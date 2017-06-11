# Predicates
[![Build Status](https://travis-ci.org/wookieb/predicates.svg)](https://travis-ci.org/wookieb/predicates)
[![NPM version](https://badge.fury.io/js/predicates.png)](http://badge.fury.io/js/predicates)
[![Bower version](https://badge.fury.io/bo/predicates.js.png)](http://badge.fury.io/bo/predicates.js)

Set of various predicates for type checking, assertions, filtering etc.

## Install
### NPM
```
npm install predicates
```

## Documentation
For list of all available functions see [API reference](docs/api.md)

If you wonder why _predicates_ is different, read [API design principles](docs/design.md)

## Example

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
	age: is.number
});

isPerson({name: 'Tom', age: 10}); // true
isPerson({surname: 'Welling', age: 100}); // false, lack of name property
```

## Assertions
[Assert-generator](https://github.com/wookieb/assert-generator) helps create assertions directly from predicates which is very useful for arguments assertions

```js
var assertName = createAssert(is.string, 'Name must be a string'),
    assertSurname = createAssert(is.all(
        is.string, is.not(is.empty)
    ), 'Surname must be a string and cannot be empty'),
    assertAge = createAssert(is.undefinedOr(is.positive),
        'Age must be a number and greater than 0');


var Person = function(name, surname, age) {
    assertName(name);
    assertSurname(surname);
    assertAge(age);
}

new Person('Tom', 'Welling', 33); // OK!
new Person('Tom', 'Welling'); // OK!
new Person('Tom', '', 33); // Error: Surname must be a string and cannot be emptye
```

## Changelog

### 2.0.0-rc1
* Removes support for bower, use webpack or any other module bundler
* Rewritten in typescript for much better code completion and function signature detection
* Added _asyncFunction_, _generator_, _map_, _set_, _symbol_, _thenable_, _weakMap_, _weakSet_, _emptyArray_, _notEmptyArray_ (#22) predicates
* Fixed #23

### 1.0.1
* Fixed #21

### 1.0.0-rc.2
* Added bower support #16

### 1.0.0-rc.1
* Provided names for all the functions to make debugging easier #13
* Added _primitive_ predicate #12
* Added _plainObject_ predicate #4
* Added _divisible_ and _divisibleWithRemainder_ predicates
* Added _property_ predicate #14
* Added _notBlank_ predicate
* Improved performance

### 0.3
* Fixed path to finite polyfill
* Better support for is.NaN #11
* Added _notEmpty_ predicate #9
* Improved is.false and is.true to accept new Boolean(true/false) as well
* Fixed behavior of is.object to accept Object.create(null) #10

### 0.2.1
* Fix: instanceof renamed to instanceOf

### 0.2
* Added information how to use _predicates_ for arguments assertions
* Added documentation with examples and design rules
* Added "startsWith" and "endsWith" functions
* Added type checking for property names for hasOwnProperty and hasProperty predicate
* Fixed error type declaration for @throws