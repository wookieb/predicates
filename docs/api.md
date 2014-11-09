#Index

**Functions**

* [all(...predicate)](#all)
* [any(...predicate)](#any)
* [array(value)](#array)
* [arrayLike(value)](#arrayLike)
* [arrayOf(predicate, [value], [...additionalArgs])](#arrayOf)
* [blank(value)](#blank)
* [boolean(value)](#boolean)
* [date(value)](#date)
* [defined(value)](#defined)
* [empty(value)](#empty)
* [endsWith(suffix, [value])](#endsWith)
* [equal(expected, [value])](#equal)
* [false(value)](#false)
* [falsy(value)](#falsy)
* [finite(value)](#finite)
* [function(value)](#function)
* [greaterThan(expected, [value])](#greaterThan)
* [greaterThanOrEqual(expected, [value])](#greaterThanOrEqual)
* [hasOwnProperty(property, [object])](#hasOwnProperty)
* [hasProperty(property, [object])](#hasProperty)
* [in(collection, [value])](#in)
* [instanceOf(clazz, [value])](#instanceOf)
* [integer(value)](#integer)
* [lessThan(expected, [value])](#lessThan)
* [lessThanOrEqual(expected, [value])](#lessThanOrEqual)
* [matches(regexp, [value])](#matches)
* [NaN(value)](#NaN)
* [negative(value)](#negative)
* [not(predicate, [value], [...additionalArgs])](#not)
* [notEmpty(value)](#notEmpty)
* [null(value)](#null)
* [number(value)](#number)
* [object(value)](#object)
* [objectOf(predicate, [object], [...additionalArgs])](#objectOf)
* [oneOf(...allowedValue)](#oneOf)
* [positive(value)](#positive)
* [regExp(value)](#regExp)
* [startsWith(prefix, [value])](#startsWith)
* [strictEqual(expected, [value])](#strictEqual)
* [string(value)](#string)
* [structure(structure, [value])](#structure)
* [true(value)](#true)
* [truthy(value)](#truthy)
* [undefined(value)](#undefined)
* [undefinedOr(predicate, [value])](#undefinedOr)

**Typedefs**

* [type: Predicate](#Predicate)
 
<a name="all"></a>
#all(...predicate)
Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false

**Aliases** _and_

**Params**

- ...predicate <code>[Predicate](#Predicate)</code>  

**Throws**

* `TypeError`  - if not every predicate is a function

**Returns**: [Predicate](#Predicate)  
**Example**  
```js
var is = require('predicates');
var isNumberGreaterThan10 = is.all(is.number, is.greaterThan(10));

isNumberGreaterThan10(0); // false
isNumberGreaterThan10(11); // true
isNumberGreaterThan10('11'); // false
```
<a name="any"></a>
#any(...predicate)
Returns a function that calls predicates in the order until one of them will be satisfied, otherwise returns false.

**Aliases** _or_

**Params**

- ...predicate <code>[Predicate](#Predicate)</code>  

**Throws**

* `TypeError`  - if not every predicate is a function

**Returns**: [Predicate](#Predicate)  
**Example**  
```js
var is = require('predicates');

var isStringOrNumber = is.any(is.string, is.number);

isStringOrNumber(0); // true
isStringOrNumber('string'); // true
isStringOrNumber(undefined); // false
```
<a name="array"></a>
#array(value)
Checks whether a value is an array

**Aliases** _arr_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.array([]); // true
is.array({}); // false
```
<a name="arrayLike"></a>
#arrayLike(value)
Checks whether a value looks like an array
That means:
* is an object
* has 'length' property
* 'length' property is a number greater or equal 0

**Aliases** _arrLike_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.arrayLike(arguments); // true
is.arrayLike(document.querySelectorAll('div')); // true
is.arrayLike([1, 2, 3]); // true
is.arrayLike({}); // false
```
<a name="arrayOf"></a>
#arrayOf(predicate, [value], [...additionalArgs])
Checks whether every element of an array passes the predicate

**Aliases** _arrOf_

**Params**

- predicate <code>[Predicate](#Predicate)</code>  
- \[value\] `Array`  
- \[...additionalArgs\] `*` - additional arguments passed to the predicate  

**Throws**

* `TypeError`  - if predicate is not a function

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isArrayOfStrings = is.arrayOf(is.string);

isArrayOfStrings(['1', '2']); // true
// same as
is.arrayOf(is.string, ['1', '2']); // true

isArrayOfStrings([1, 2]); // false
```
<a name="blank"></a>
#blank(value)
Checks whether a value is empty string or contains only whitespaces

**Params**

- value `String`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.blank(''); // true
is.blank('    '); // true
is.blank('test'); // false
```
<a name="boolean"></a>
#boolean(value)
Checks whether a value is a boolean

**Aliases** _bool_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.boolean(true); // true
is.boolean(false);; // true
is.boolean(0); // false
```
<a name="date"></a>
#date(value)
Checks whether a value is a Date object

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.date(new Date()); true
is.date(1415402574000); // false
```
<a name="defined"></a>
#defined(value)
Checks whether a value is not undefined - in other words, is defined

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.defined(''); // true
is.defined(1); // true
is.defined(undefined); // false
```
<a name="empty"></a>
#empty(value)
Checks whether a value is empty
Value is empty when:
* is an array like object with length === 0
* is an object without enumerable properties
* is an empty string

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.empty(''); // true
is.empty([]); // true
is.empty({}); // true
is.empty([1]); // false
is.empty('test'); // false
```
<a name="endsWith"></a>
#endsWith(suffix, [value])
Checks whether a string ends with a given suffix

**Params**

- suffix `String`  
- \[value\] `String`  

**Throws**

* `TypeError`  - if suffix is not a string

* `Error`  - if suffix is empty

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isYelling = is.endsWith('!');

isYelling('shut up!'); // true
// same as
is.endsWith('!', 'shut up!'); // true
isYelling('be quiet please'); // false
```
<a name="equal"></a>
#equal(expected, [value])
Checks whether values are equal (using == operator)

**Aliases** _equalTo_, _eq_

**Params**

- expected `*`  
- \[value\] `*`  

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isTimmy = is.equal('Timmy');

isTimmy('Timmy'); // true
// same as
is.equal('Timmy', 'Timmy'); // true
is.equal(1, '1'); // true
isTimmy('Franko'); // false
```
<a name="false"></a>
#false(value)
Checks whether a value is false a boolean false

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.false(false); // true
is.false(0); // false
```
<a name="falsy"></a>
#falsy(value)
Checks whether a value is falsy

**Aliases** _falsey_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.falsy(0); // true
is.falsy(false); // true
is.falsy(1); // false
```
<a name="finite"></a>
#finite(value)
Checks whether a value is a number and it's finite

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.finite(1); // false
is.finite(Infinity); // false
```
<a name="function"></a>
#function(value)
Checks whether a value is a function

**Aliases** _func_, _fn_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.function(function() {}); // true
is.function(alert); // true
is.function('alert'); // false
```
<a name="greaterThan"></a>
#greaterThan(expected, [value])
Checks whether a value is greater than expected number

**Aliases** _greater_, _gt_

**Params**

- expected `Number`  
- \[value\] `Number`  

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isGreaterThan0 = is.greaterThan(0);

isGreaterThan0(10); // true
// same as
is.greaterThan(0, 10); // true
isGreaterThan0(-1); // false
```
<a name="greaterThanOrEqual"></a>
#greaterThanOrEqual(expected, [value])
Checks whether a value is greater or equal to expected number

**Aliases** _greaterOrEqual_, _greaterEq_, _gtEq_

**Params**

- expected `Number`  
- \[value\] `Number`  

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isAdultAge = is.greaterThanOrEqual(18);

isAdultAge(22); // true
// same as
is.greaterThanOrEqual(18, 22);

isAdultAge(16); // false
```
<a name="hasOwnProperty"></a>
#hasOwnProperty(property, [object])
Checks whether an object has own property

**Aliases** _hasOwn_

**Params**

- property `String`  
- \[object\] `Object`  

**Throws**

* `TypeError`  - if property is not a string

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isCustomized = is.hasOwnProperty('delay');

var Timer = function() {};
Timer.prototype.delay = 100;

var timer1 = new Timer();
var timer2 = new Timer();
timer1.delay = 1000;

isCustomized(timer1) // true
// same as
is.hasOwnProperty('delay', timer1); // true

isCustomized(timer2); // false
```
<a name="hasProperty"></a>
#hasProperty(property, [object])
Checks whether an object has a given property

**Aliases** _has_

**Params**

- property `String`  
- \[object\] `Object`  

**Throws**

* `TypeError`  - if property is not a string

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isDuck = is.hasProperty('quack');

isDuck({quack: ':)'}); // true
// same as
is.hasProperty('quack', {quack: ':)'}); // true

isDuck({type: 'car'}); // false
```
<a name="in"></a>
#in(collection, [value])
Checks whether a value exists in collection
Values are compared using === operator

**Params**

- collection `Array` - of allowed values  
- \[value\] `*`  

**Throws**

* `TypeError`  - if collection is not an array

* `Error`  - if collection is empty

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isImage = is.in(['image/gif', 'image/jpeg']);
// same as
// var isImage = is.oneOf('image/gif', 'image/jpeg');

isImage('image/jpeg'); // true
// same as
is.in(['image/gif', 'image/jpeg'], 'image/jpeg'); // true

isImage('text/html'); // false
```
<a name="instanceOf"></a>
#instanceOf(clazz, [value])
Checks whether a value is an instance of given "class"

**Aliases** _instance_

**Params**

- clazz <code>[function](#function)</code>  
- \[value\] `*`  

**Throws**

* `TypeError`  - if class is not a function

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var Duck = function() {};
var Car = function() {};

var isDuck = is.instanceOf(Duck);

isDuck(new Duck); // true
// same as
is.instanceOf(Duck, new Duck); // true

isDuck(new Car); // false
```
<a name="integer"></a>
#integer(value)
Checks whether a value is an integer

**Aliases** _int_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.integer(10); // true
is.integer(10.4); // false
```
<a name="lessThan"></a>
#lessThan(expected, [value])
Checks whether a value is less than expected number

**Aliases** _less_, _lt_

**Params**

- expected `Number`  
- \[value\] `Number`  

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var isChildAge = is.lessThan(18);

isChildAge(10); // true
// same as
is.lessThan(18, 10); // true
isChildAge(18); // false
isChildAge(22); // false
```
<a name="lessThanOrEqual"></a>
#lessThanOrEqual(expected, [value])
Checks whether a value is less or equal to expected number

**Aliases** _lessOrEqual_, _lessEq_, _ltEq_

**Params**

- expected `Number`  
- \[value\] `Number`  

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isChildAge = is.lessThanOrEqual(17);

isChildAge(10); // true
// same as
is.lessThanOrEqual(17, 10); // true

isChildAge(18); // false
```
<a name="matches"></a>
#matches(regexp, [value])
Checks whether a value matches a regexp

**Aliases** _match_

**Params**

- regexp `RegExp`  
- \[value\] `String`  

**Throws**

* `TypeError`  - if regexp is not a regexp

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isWindows9x = is.matches(/^Windows 9/);

isWindows9x('Windows 9'); // true - :D
// same as
is.matches(/^Windows 9/, 'Windows 9'); // also true - hue hue

isWindows9x('Windows 10); // false
```
<a name="NaN"></a>
#NaN(value)
Checks whether a value is a NaN number

**Aliases** _nan_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.NaN(NaN); // true
is.NaN(10); // false
```
<a name="negative"></a>
#negative(value)
Checks whether a value is a negative number

**Params**

- value `Number`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.negative(-1); // true
is.negative(0); // false
```
<a name="not"></a>
#not(predicate, [value], [...additionalArgs])
Negates result of a predicate

**Aliases** _negate_

**Params**

- predicate <code>[Predicate](#Predicate)</code>  
- \[value\] `*`  
- \[...additionalArgs\] `*` - additional arguments passed to the predicate  

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isNotEmpty = is.not(is.empty);
isNotEmpty([1, 2]);// true
// same as
is.not(is.empty, [1, 2]); // true
isNotEmpty(''); // false
```
<a name="notEmpty"></a>
#notEmpty(value)
Checks whether value is not empty.

See [empty](#empty) for list of conditions that determine when a value is empty

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.notEmpty([1]); // true
is.notEmpty('value'); // true
is.notEmpty([]); // false
is.notEmpty(''); // false
```
<a name="null"></a>
#null(value)
Checks whether a value is null

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.null(null); // true
is.null({}); // false
```
<a name="number"></a>
#number(value)
Checks whether a value is a number

**Aliases** _num_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.number(10); // true
is.number('10'); // false
```
<a name="object"></a>
#object(value)
Checks whether a value is an object

**Aliases** _obj_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.object({}); // true
is.object('object'); // false
```
<a name="objectOf"></a>
#objectOf(predicate, [object], [...additionalArgs])
Checks whether every enumerable property of object satisfies a predicate

**Aliases** _objOf_

**Params**

- predicate <code>[Predicate](#Predicate)</code>  
- \[object\] `Object`  
- \[...additionalArgs\] `*` - additional arguments passed to the predicate  

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isObjectOfStrings = is.objectOf(is.string);

isObjectOfStrings({key: 'value', key1: 'value'}); // true
// same as
is.objectOf(is.string, {key: 'value', key1: 'value'}); // true

isObjectOfStrings({key: 1, key1: 'value'}); // false
```
<a name="oneOf"></a>
#oneOf(...allowedValue)
Returns a function that checks whether a value is equal to one of allowed values
Function compares values using === operator

**Params**

- ...allowedValue `*`  

**Throws**

* `Error`  - if 0 or 1 allowed value provided

**Returns**: [Predicate](#Predicate)  
**Example**  
```js
var is = require('predicates');

var isAllowedToAccess = is.oneOf('ROLE_ADMIN', 'ROLE_USER');
// same as
// var isAllowedToAccess = is.in(['ROLE_ADMIN', 'ROLE_USER']);

isAllowedToAccess('ROLE_ADMIN'); // true
isAllowedToAccess('ROLE_ANONYMOUS'); // false
```
<a name="positive"></a>
#positive(value)
Checks whether a value is a positive number

**Params**

- value `Number`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.positive(10); // true
is.positive(-1); // false
```
<a name="regExp"></a>
#regExp(value)
Checks whether a value is a regexp

**Aliases** _regexp_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.regExp(/t/); // true
is.regexp('.*'); // false
```
<a name="startsWith"></a>
#startsWith(prefix, [value])
Checks whether a string starts with a given prefix

**Params**

- prefix `String`  
- \[value\] `String`  

**Throws**

* `TypeError`  - if prefix is not a string

* `Error`  - if prefix is empty

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isProfessor = is.startsWith('Prof. ');
isProfessor('Prof. Bend Ovah'); // true
// same as
is.startsWith('Prof. ', 'Prof. Bend Ovah'); // true

isProfessor('Dr. Here U\' Are'); // false
```
<a name="strictEqual"></a>
#strictEqual(expected, [value])
Checks whether a value is strictly equal to expected value (uses === operator)

**Aliases** _strictEqualTo_

**Params**

- expected `*`  
- \[value\] `*`  

**Returns**: `Boolean` | [Predicate](#Predicate) - bool if at least two arguments provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var mom = {};
var isMyMom = is.strictEqual(mom);

isMyMom(mom); // true - mom is only one. Remember about it...
// same as
is.strictEqual(mom, mom); // true
isMyMom({}); // false
```
<a name="string"></a>
#string(value)
Checks whether a value is a function

**Aliases** _str_

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.string('test'); // true
is.string({}); // false
```
<a name="structure"></a>
#structure(structure, [value])
Checks whether an object satisfies predicates defined in structure

NOTE: All predicates defined in structure must be satisfied.
If some of the properties are optional use [undefinedOr](#undefinedOr)

You shouldn't use this function to validate input from the user and expect complex report "what's wrong with this is object".
There are few reasons for that:
* it's just a predicate (that returns only true or false)
* breaks [the design rule](design.md#user-content-defined-and-generated-predicates-will-not-throw-any-errors)

See examples for inspiration how you can use _.structure

**Params**

- structure `Object`  
- \[value\] `Object`  

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if more than 1 argument provided, otherwise a predicate  
**Example**  
```js
// simple object matching
var is = require('predicates');

var schema = {
     name: is.string, // only string
     phone: is.or(is.string, is.number), // string or number
     surname: is.undefinedOr(is.string) // optional
},
    isPerson = is.structure(schema);

var person = {name: 'Tommy', phone: 80129292};
isPerson(person); // true
// same as
is.structure(schema, person); // true
isPerson({name: 'Tommy'});
```
**Example**  
```js
// filtering
var is = require('predicates');

var people = [
 {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 {name: 'Dr. Supa Kaki', age: 34, sex: 'female'},
 {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
];

var professors = people.filter(is.structure({
 name: is.startsWith('Prof.')
}));

// [
//   {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
//   {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
// ]
```
**Example**  
```js
// duck typing

var isDuck = is.structure({
 quack: is.function,
 walk: is.function
});

isDuck({
   say: function() { return 'woof! woof!';
}}); // not a duck

isDuck({
   quack: function() { return 'quack!'; },
   walk: function() { return 'tup tup tup'; }
}); // yep, it's a duck
```
<a name="true"></a>
#true(value)
Checks whether a value is a boolean true

**Params**

- value `Boolean`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.true(true); // true
is.true('true'); // false
```
<a name="truthy"></a>
#truthy(value)
Checks whether a value is truthy

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.truthy(true); // true
is.truthy(1); // true
is.truthy(0); // false
```
<a name="undefined"></a>
#undefined(value)
Checks whether a value is undefined

**Params**

- value `*`  

**Returns**: `Boolean`  
**Example**  
```js
var is = require('predicates');

is.undefined(undefined); // true
is.undefined(0); // false
```
<a name="undefinedOr"></a>
#undefinedOr(predicate, [value])
Checks whether a value is undefined or satisfies given predicate
Very useful to check optional arguments of function.

**Params**

- predicate <code>[Predicate](#Predicate)</code>  
- \[value\] `*`  

**Returns**: `Boolean` | [Predicate](#Predicate) - returns bool if more than 1 argument provided, otherwise a predicate  
**Example**  
```js
var is = require('predicates');

var isUndefinedOrString = is.undefinedOr(is.string);

isUndefinedOrString(undefined); // true
isUndefinedOrString('test'); // true
// same as
is.undefinedOr(is.string, undefined); // true
is.undefinedOr(is.string, 'test'); // true

isUndefinedOrString({}); // false
```
<a name="Predicate"></a>
#type: Predicate
A function that returns true or false based on input arguments

**Params**

- ...arg `*`  

**Returns**: `Boolean`  
