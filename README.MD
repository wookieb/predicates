# Predicates
[![Build Status](https://travis-ci.org/wookieb/predicates.svg)](https://travis-ci.org/wookieb/predicates)
[![NPM version](https://badge.fury.io/js/predicates.svg)](http://badge.fury.io/js/predicates)
[![Coverage Status](https://coveralls.io/repos/github/wookieb/predicates/badge.svg?branch=master)](https://coveralls.io/github/wookieb/predicates?branch=master)

Set of various predicates for type checking, simple assertions, filtering etc.

## Features
* written in typescript (with [type guards](#type-guards) and function overloading)
* well defined [API design principles](#design)
* predicates description every predicate contains a proper description for easier debugging and automatic assertion generation
* supports simple type checks with unnecessary verbosity
* every predicate supports currying if possible

## Install
```
npm install predicates
```

## Example

```js
const is = require('predicates');

is.string(1); // false
is.string('test'); // true

is.undefinedOr(String, undefined); // true
is.undefinedOr(String, 'string'); // true
is.undefinedOr(is.string, undefined); // true
is.undefinedOr(is.string, 'timmy'); // true
is.undefinedOr(is.string)(undefined); // true
is.undefinedOr(is.string)('timmy'); // true

const isPerson = is.structure({
	name: is.string,
	surname: is.undefinedOr(is.string),
	age: is.number
});

isPerson({name: 'Tom', age: 10}); // true
isPerson({surname: 'Welling', age: 100}); // false, lack of name property
``` 

```js
const assertName = createAssert(is.string, 'Name must be a string'),
    assertSurname = createAssert(is.all(
        is.string, is.not(is.empty)
    ), 'Surname must be a string and cannot be empty'),
    assertAge = createAssert(is.undefinedOr(is.positive),
        'Age must be a number and greater than 0');


const Person = function(name, surname, age) {
    assertName(name);
    assertSurname(surname);
    assertAge(age);
}

new Person('Tom', 'Welling', 33); // OK!
new Person('Tom', 'Welling'); // OK!
new Person('Tom', '', 33); // Error: Surname must be a string and cannot be emptye
```

## [Full API](API.md)

## API design

### Generated predicates can be called with more than one argument

Most of type checking, utility libraries force you use predicates with only one argument but _predicates_ doesn.t
Additionally _predicates_ preserves the context of function call which allows you to create even more powerful logic.


```js
const is = require('predicates');

const isOkToModifyTags = is.all(
    is.arrayOf(is.string), 
    function(tags, previousTags) {
        // no need to save them again if they are the same as previous ones
        return tags.join(',') !== previousTags.join(',');
    }
);

Module.prototype.modifyTags = function(entityId, tags) {
    var previousTags = getTags(entityId);
    if (isOkToModifyTags(tags, previousTags)) {
        this.saveTags(entityId, tags);
    } else {
        // no need to save them again if they are the same as previous ones
    }
}
```

### Prevents stupid mistakes (fail fast)
_Predicates_ checks whether generated predicate is misconfigured and throws an error as fast as possible.

```js
is.startsWith(''); // Error: Prefix cannot be empty
// since that would be true for all strings

is.in([]); // Error: Collection cannot be empty
// always false
```

That's why it's a good practice to create predicates at the beginning of a module definition to quickly catch any mistake.

```js
// some module
const is = require('predicates');
const isImage = is.in([]); // Error: Collection cannot be empty

// You don't need to run the whole application to get the error that your predicate is wrong
export class Module {
    
}
```

### Defined and generated predicates will never throw any error
You don't need to check the arguments provided to predicates to make sure they won't cause an error - _predicates_ does it for you.

```js
const isDuck = is.hasProperty('quack');

isDuck(undefined); // false - no error
isDuck(1); // false - no error
isDuck('duck'); // false - no error

is.matches(/.*\.ts/)(100); // false - no error
```

NOTE! This rule applies only for predicates defined in the library. Any user-defined predicate MAY throw errors (however I don't advise to do so) and _predicates_ will not catch them.

```
const assertName = is.all(is.string, function(value) {
    if (value === 'admin') {
        throw new Error('Admin is a reserved user name');
    }
});

assertName('admin'); // Error: Admin is a reserved user name
```

### Type guards 
Every predicate (if possible) is a type guard
```typescript
if (is.string(value)) {
   // at this point typescript compiler knows that value is a string 
}
```

### Core types are automatically translated to proper predicate

```js
is.property('foo', is.string)({foo: 'bar'}); // true

// for less verbosity this is possible as well
is.property('foo', String)({foo: 'bar'}); // true
is.arrayOf(String)(['foo']); // true
```
