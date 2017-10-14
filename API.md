# Table of contents

* Predicates
    * [all](#all)
    * [and](#and)
    * [any](#any)
    * [arr](#arr)
    * [array](#array)
    * [arrayLike](#arraylike)
    * [arrayOf](#arrayof)
    * [arrLike](#arrlike)
    * [arrOf](#arrof)
    * [asyncFn](#asyncfn)
    * [asyncFunction](#asyncfunction)
    * [blank](#blank)
    * [bool](#bool)
    * [boolean](#boolean)
    * [date](#date)
    * [defined](#defined)
    * [divBy](#divby)
    * [divByWithRemainder](#divbywithremainder)
    * [divisible](#divisible)
    * [divisibleBy](#divisibleby)
    * [divisibleByWithRemainder](#divisiblebywithremainder)
    * [divisibleWithRemainder](#divisiblewithremainder)
    * [empty](#empty)
    * [emptyArr](#emptyarr)
    * [emptyArray](#emptyarray)
    * [endsWith](#endswith)
    * [eq](#eq)
    * [equal](#equal)
    * [equalTo](#equalto)
    * [false](#false)
    * [falsey](#falsey)
    * [falsy](#falsy)
    * [finite](#finite)
    * [fn](#fn)
    * [func](#func)
    * [function](#function)
    * [generator](#generator)
    * [greater](#greater)
    * [greaterEq](#greatereq)
    * [greaterOrEqual](#greaterorequal)
    * [greaterThan](#greaterthan)
    * [greaterThanOrEqual](#greaterthanorequal)
    * [gt](#gt)
    * [gtEq](#gteq)
    * [has](#has)
    * [hasOwn](#hasown)
    * [hasOwnProperty](#hasownproperty)
    * [hasProperty](#hasproperty)
    * [in](#in)
    * [instance](#instance)
    * [instanceOf](#instanceof)
    * [int](#int)
    * [integer](#integer)
    * [less](#less)
    * [lessEq](#lesseq)
    * [lessOrEqual](#lessorequal)
    * [lessThan](#lessthan)
    * [lessThanOrEqual](#lessthanorequal)
    * [lt](#lt)
    * [ltEq](#lteq)
    * [map](#map)
    * [match](#match)
    * [matches](#matches)
    * [nan](#nan)
    * [NaN](#nan)
    * [negate](#negate)
    * [negative](#negative)
    * [not](#not)
    * [notANumber](#notanumber)
    * [notBlank](#notblank)
    * [notEmptyArr](#notemptyarr)
    * [notEmptyArray](#notemptyarray)
    * [null](#null)
    * [num](#num)
    * [number](#number)
    * [obj](#obj)
    * [object](#object)
    * [objectOf](#objectof)
    * [objOf](#objof)
    * [oneOf](#oneof)
    * [or](#or)
    * [plainObject](#plainobject)
    * [positive](#positive)
    * [primitive](#primitive)
    * [promiseLike](#promiselike)
    * [prop](#prop)
    * [property](#property)
    * [regexp](#regexp)
    * [regExp](#regexp)
    * [set](#set)
    * [startsWith](#startswith)
    * [str](#str)
    * [strictEqual](#strictequal)
    * [strictEqualTo](#strictequalto)
    * [string](#string)
    * [struct](#struct)
    * [structure](#structure)
    * [symbol](#symbol)
    * [thenable](#thenable)
    * [true](#true)
    * [truthy](#truthy)
    * [undefined](#undefined)
    * [undefinedOr](#undefinedor)
    * [weakMap](#weakmap)
    * [weakSet](#weakset)

* Helpers
    * [setDescription](#setdescription)
    * [getDescription](#getdescription)
    * [assert](#assert)

* Common types
    * [Predicate](#predicate)
    * [TypeGuardPredicate](#typeguardpredicate)




### all
### and

Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false
```typescript
const isBetween10And100 = is.all(is.greaterThan(10), is.lessThan(100));

isBetween10And100(0); // false
isBetween10And100(11); // true
```

Signature
```typescript
is.all(...predicates: (Predicate | Function)[]) => Predicate<any>
```

Throws:
* TypeError - if not every predicate is a function

### any
### or

Returns a function that calls predicates in the order until one of them will be satisfied, otherwise returns false.
```typescript
const isStringOrNumber = is.any(is.string, is.number);

isStringOrNumber(0); // true
isStringOrNumber('string'); // true
isStringOrNumber(undefined); // false
```

Signature
```typescript
is.any(...predicates: (Predicate | Function)[]) => Predicate<any>
```

Throws:
* TypeError - if not every predicate is a function

### array
### arr

Checks whether a value is an array
```typescript
is.array([]); // true
is.array({}); // false
is.array('string'); // false
```

Signature
```typescript
is.array<T = any>(value: any) => value is T[]
```


### asyncFunction
### asyncFn

Checks whether value is async function.
Only functions created with modifier "async" are considered async.
Regular function that returns promise or accepts callback is not an async function.

More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
```typescript
is.asyncFunction(async () => {}); // true
is.asyncFunction(function* () {}); // false
is.asyncFunction(function() {}); // false
```

Signature
```typescript
is.asyncFunction<T = any>(value: any) => boolean
```


### arrayLike
### arrLike

Checks whether a value looks like an array
That means:
* is an object
* has 'length' property
* 'length' property is a number greater or equal 0
```typescript
is.arrayLike(arguments); // true
is.arrayLike(document.querySelectorAll('div')); // true
is.arrayLike([1, 2, 3]); // true
is.arrayLike({}); // false
```

Signature
```typescript
is.arrayLike(value: any) => boolean
```


### arrayOf
### arrOf

Checks whether every element of an array passes the predicate
```typescript
const isArrayOfStrings = is.arrayOf(is.string);

isArrayOfStrings(['1', '2']); // true
// same as
is.arrayOf(is.string, ['1', '2']); // true
// same as
is.arrayOf(String, ['1', '2']); // true

isArrayOfStrings([1, 2]); // false
```

Signature
```typescript
is.arrayOf<T = any>(predicate: Predicate | Function) => TypeGuardPredicate<T[]>
is.arrayOf<T = any>(predicate: Predicate | Function, value: any[]) => boolean
is.arrayOf<T>(predicate: Predicate | Function, value?: any[], ...extraArgs: any[]) => boolean | TypeGuardPredicate<T[]>
```

Throws:
* TypeError - if predicate is not a function

### blank

Checks whether a value is empty string or contains only whitespaces
```typescript
is.blank(''); // true
is.blank('    '); // true
is.blank('test'); // false
```

Signature
```typescript
is.blank(value: any) => boolean
```


### boolean
### bool

Checks whether a value is a boolean
```typescript
is.boolean(true); // true
is.boolean(false); // true
is.boolean(0); // false
```

Signature
```typescript
is.boolean(value: any) => boolean
```


### date

Checks whether a value is a Date object
```typescript
is.date(new Date()); true
is.date(1415402574000); // false
```

Signature
```typescript
is.date(value: any) => boolean
```


### defined

Checks whether a value is not undefined - in other words, is defined
```typescript
is.defined(''); // true
is.defined(1); // true
is.defined(undefined); // false
```

Signature
```typescript
is.defined(value: any) => boolean
```


### divisible
### divisibleBy
### divBy

Checks whether a value is a number and it's divisible by a divisor
```typescript
is.divisible(7, 14); // true
is.divisible(7)(14); // true
is.divisible(7, 10); // false
```

Signature
```typescript
is.divisible(divisor: number) => TypeGuardPredicate<number>
is.divisible(divisor: number, value: number) => boolean
is.divisible(divisor: number, value?: number) => boolean | TypeGuardPredicate<number>
```


### divisibleWithRemainder
### divisibleByWithRemainder
### divByWithRemainder

Checks whether a value is a number and it's divisible by divisor with given remainder
In other words value % div === remainder
```typescript
is.divisibleWithRemainder(3, 2, 5); // true since 5%3 === 2
is.divisibleWithRemainder(3, 2)(5); // true
is.divisibleWithRemainder(3, 1, 5); // false since 5%3 !== 1

const isEven = is.divisibleWithRemainder(2, 1);

isEven(1); // true
isEven(2); // false
isEven(3); // true
```

Signature
```typescript
is.divisibleWithRemainder(divisor: number, remainder: number) => TypeGuardPredicate<number>
is.divisibleWithRemainder(divisor: number, remainder: number, value: number) => boolean
is.divisibleWithRemainder(divisor: number, remainder: number, value?: number) => boolean | TypeGuardPredicate<number>
```

Throws:
* Error - if less than 2 arguments provided
* Error - if the divisor is 0
* Error - if the remainder is greater than the divisor
* TypeError - if the divisor is not a finite number
* TypeError - if the remainder is not a finite number

### empty

Checks whether a value is empty
Value is empty when:
* is an array like object with length === 0
* is an object without enumerable properties
* is an empty string
* is undefined
```typescript
is.empty(''); // true
is.empty([]); // true
is.empty({}); // true
is.empty(undefined); // true
is.empty([1]); // false
is.empty('test'); // false
```

Signature
```typescript
is.empty(value: any) => boolean
```


### emptyArray
### emptyArr

Checks whether value is an empty array
```typescript
is.emptyArray([]); // true
is.emptyArray([1]); // false
is.emptyArray(''); // false
```

Signature
```typescript
is.emptyArray<T = any>(value: any) => boolean
```


### endsWith

Checks whether a string ends with a given suffix
```typescript
const isYelling = is.endsWith('!');

isYelling('shut up!'); // true
// same as
is.endsWith('!', 'shut up!'); // true
isYelling('quiet please'); // false
```

Signature
```typescript
is.endsWith(suffix: string) => TypeGuardPredicate<string>
is.endsWith(suffix: string, value: any) => boolean
is.endsWith(suffix: string, value?: any) => boolean | TypeGuardPredicate<string>
```

Throws:
* TypeError - if suffix is not a string
* Error - if suffix is empty

### equal
### equalTo
### eq

Checks whether values are equal (using == operator)
```typescript
const isTimmy = is.equal('Timmy');

isTimmy('Timmy'); // true
// same as
is.equal('Timmy', 'Timmy'); // true
is.equal(1, '1'); // true
isTimmy('Franko'); // false
```

Signature
```typescript
is.equal(expected: any) => Predicate<any>
is.equal(expected: any, value: any) => boolean
is.equal(expected: any, value?: any) => boolean | Predicate<any>
```


### false

Checks whether a value is false a boolean false
```typescript
is.false(false); // true
is.false(0); // false
```

Signature
```typescript
is.false(value: boolean) => boolean
```


### falsy
### falsey

Checks whether a value is falsy
```typescript
is.falsy(0); // true
is.falsy(false); // true
is.falsy(1); // false
```

Signature
```typescript
is.falsy(value: any) => boolean
```


### finite

Checks whether a value is a number and it's finite
```typescript
is.finite(1); // false
is.finite(Infinity); // false
```

Signature
```typescript
is.finite(value: any) => boolean
```


### function
### fn
### func

Checks whether a value is a function
```typescript
is.function(function() {}); // true
is.function(alert); // true
is.function('alert'); // false
```

Signature
```typescript
is.function(value: any) => boolean
```


### generator

Checks whether a value is generator
```typescript
is.generator(function* gen() {}); // true
is.generator(function(){})); // false
```

Signature
```typescript
is.generator(value: any) => boolean
```


### greaterThan
### greater
### gt

Checks whether a value is greater than expected number
```typescript
const isGreaterThan0 = is.greaterThan(0);

isGreaterThan0(10); // true
// same as
is.greaterThan(0, 10); // true
isGreaterThan0(-1); // false
```

Signature
```typescript
is.greaterThan<T = number>(expected: T) => TypeGuardPredicate<T>
is.greaterThan<T = number>(expected: T, value: any) => boolean
is.greaterThan<T = number>(expected: T, value?: any) => boolean | TypeGuardPredicate<T>
```


### greaterThanOrEqual
### greaterOrEqual
### greaterEq
### gtEq

Checks whether a value is greater or equal to expected number
```typescript
const isAdultAge = is.greaterThanOrEqual(18);

isAdultAge(22); // true
// same as
is.greaterThanOrEqual(18, 22);

isAdultAge(16); // false
```

Signature
```typescript
is.greaterThanOrEqual<T = number>(expected: T) => TypeGuardPredicate<T>
is.greaterThanOrEqual<T = number>(expected: T, value: any) => boolean
is.greaterThanOrEqual<T = number>(expected: T, value?: any) => boolean | TypeGuardPredicate<T>
```


### hasOwnProperty
### hasOwn

Checks whether an object has own property
```typescript
const isCustomized = is.hasOwnProperty('delay');

const Timer = function() {};
Timer.prototype.delay = 100;

const timer1 = new Timer();
const timer2 = new Timer();
timer1.delay = 1000;

isCustomized(timer1) // true
// same as
is.hasOwnProperty('delay', timer1); // true

isCustomized(timer2); // false
```

Signature
```typescript
is.hasOwnProperty(property: string | Symbol) => Predicate<any>
is.hasOwnProperty(property: string | Symbol, object: object) => boolean
is.hasOwnProperty(property: string | Symbol, object?: object) => boolean | Predicate<any>
```

Throws:
* TypeError - if property is not a string

### hasProperty
### has

Checks whether an object has a given property
```typescript
const isDuck = is.hasProperty('quack');

isDuck({quack: ':)'}); // true
// same as
is.hasProperty('quack', {quack: ':)'}); // true

isDuck({type: 'car'}); // false
```

Signature
```typescript
is.hasProperty(property: string | Symbol) => Predicate<any>
is.hasProperty(property: string | Symbol, object: Object) => boolean
is.hasProperty(property: string | Symbol, object?: Object) => boolean | Predicate<any>
```

Throws:
* TypeError - if property is not a string

### in

Checks whether a value exists in collection
Values are compared using === operator
```typescript
const isImage = is.in(['image/gif', 'image/jpeg']);
// same as
// const isImage = is.oneOf('image/gif', 'image/jpeg');

isImage('image/jpeg'); // true
// same as
is.in(['image/gif', 'image/jpeg'], 'image/jpeg'); // true

isImage('text/html'); // false
```

Signature
```typescript
is.in(collection: any[]) => Predicate<any>
is.in(collection: any[], value: any) => boolean
is.in(collection: any[], value?: any) => boolean | Predicate<any>
```

Throws:
* TypeError - if collection is not an array
* Error - if collection is empty

### instanceOf
### instance

Checks whether a value is an instance of given "class"
```typescript
const Duck = function() {};
const Car = function() {};

const isDuck = is.instanceOf(Duck);

isDuck(new Duck); // true
// same as
is.instanceOf(Duck, new Duck); // true

isDuck(new Car); // false
```

Signature
```typescript
is.instanceOf<T>(clazz: Function) => TypeGuardPredicate<T>
is.instanceOf<T>(clazz: Function, value: any) => boolean
is.instanceOf<T>(clazz: Function, value?: any) => boolean | TypeGuardPredicate<T>
```

Throws:
* TypeError - if class is not a function

### integer
### int

Checks whether a value is an integer
```typescript
is.integer(10); // true
is.integer(10.4); // false
```

Signature
```typescript
is.integer(value: any) => value is number
```


### lessThan
### less
### lt

Checks whether a value is less than expected number
```typescript
const isChildAge = is.lessThan(18);

isChildAge(10); // true
// same as
is.lessThan(18, 10); // true
isChildAge(18); // false
```

Signature
```typescript
is.lessThan<T = number>(expected: T) => TypeGuardPredicate<T>
is.lessThan<T = number>(expected: T, value: any) => boolean
is.lessThan<T = number>(expected: T, value?: any) => boolean | TypeGuardPredicate<T>
```


### lessThanOrEqual
### lessOrEqual
### lessEq
### ltEq

Checks whether a value is less or equal to expected number
```typescript
const isChildAge = is.lessThanOrEqual(17);

isChildAge(10); // true
// same as
is.lessThanOrEqual(17, 10); // true

isChildAge(18); // false
```

Signature
```typescript
is.lessThanOrEqual<T = number>(expected: T) => TypeGuardPredicate<T>
is.lessThanOrEqual<T = number>(expected: T, value: any) => boolean
is.lessThanOrEqual<T = number>(expected: T, value?: any) => boolean | TypeGuardPredicate<T>
```


### matches
### match

Checks whether a value is a string and matches a regexp
```typescript
const isWindows9x = is.matches(/^Windows 9/);

isWindows9x('Windows 9'); // true - :D
// same as
is.matches(/^Windows 9/, 'Windows 9'); // also true - hue hue

isWindows9x('Windows 10'); // false
```

Signature
```typescript
is.matches(regexp: RegExp) => TypeGuardPredicate<string>
is.matches(regexp: RegExp, value: string) => boolean
is.matches(regexp: RegExp, value?: string) => boolean | TypeGuardPredicate<string>
```

Throws:
* TypeError - if regexp is not a regexp

### map

Check whether value is an instance of Map

Signature
```typescript
is.map<K = any, V = any>(value: any) => boolean
```


### notANumber
### nan
### NaN

Checks whether a value is a NaN number
```typescript
is.NaN(NaN); // true
is.NaN(10); // false
```

Signature
```typescript
is.notANumber(value: any) => boolean
```


### negative

Checks whether a value is a negative number
```typescript
is.negative(-1); // true
is.negative(0); // false
```

Signature
```typescript
is.negative(value: any) => boolean
```


### negate
### not

Negates result of a predicate
```typescript
const isNotEmpty = is.not(is.empty);
isNotEmpty([1, 2]);// true
// same as
is.not(is.empty, [1, 2]); // true
isNotEmpty(''); // false
```

Signature
```typescript
is.negate(predicate: Predicate) => Predicate<any>
```


### notBlank

Checks whether a value is a string and contains at least one non-whitespace character
```typescript
is.notBlank(''); // false
is.notBlank('    '); // false
is.notBlank('test'); // true
is.notBlank({toString: function() { return 'test'; }}); // false - since values are not converted to strings
```

Signature
```typescript
is.notBlank(value: any) => boolean
```


### notEmptyArray
### notEmptyArr

Checks whether value is an array and is not empty
```typescript
is.notEmptyArray([1]); // true
is.notEmptyArray([]); // false
is.notEmptyArray('string'); // false
```

Signature
```typescript
is.notEmptyArray<T = any>(value: any) => boolean
```


### null

Checks whether a value is null
```typescript
is.null(null); // true
is.null({}); // false
```

Signature
```typescript
is.null(value: any) => boolean
```


### number
### num

Checks whether a value is a number
```typescript
is.number(10); // true
is.number('10'); // false
```

Signature
```typescript
is.number(value: any) => boolean
```


### object
### obj

Checks whether a value is an object and ignores null
```typescript
is.object({}); // true
is.object('object'); // false
```

Signature
```typescript
is.object(value: any) => boolean
```


### objectOf
### objOf

Checks whether every enumerable property of object satisfies a predicate
```typescript
const isObjectOfStrings = is.objectOf(is.string);

isObjectOfStrings({key: 'value', key1: 'value'}); // true
// same as
is.objectOf(is.string, {key: 'value', key1: 'value'}); // true

isObjectOfStrings({key: 1, key1: 'value'}); // false
```

Signature
```typescript
is.objectOf(predicate: Predicate | Function) => Predicate<any>
is.objectOf(predicate: Predicate | Function, value: Object) => boolean
is.objectOf(predicate: Predicate | Function, value?: Object, ...extraArgs: any[]) => boolean | Predicate<any>
```


### oneOf

Returns a function that checks whether a value is equal to one of allowed values
Function compares values using === operator
```typescript
const isAllowedToAccess = is.oneOf('ROLE_ADMIN', 'ROLE_USER');
// same as
// const isAllowedToAccess = is.in(['ROLE_ADMIN', 'ROLE_USER']);

isAllowedToAccess('ROLE_ADMIN'); // true
isAllowedToAccess('ROLE_ANONYMOUS'); // false
```

Signature
```typescript
is.oneOf(...allowedValues: any[]) => Predicate<any>
```

Throws:
* Error - if 0 or 1 allowed value provided

### plainObject

Checks whether a value is a plain object.
Plain object is an object of which prototype is Object.prototype or null
```typescript
is.plainObject({property: 'value'}); // true
is.plainObject(new Object); // true
is.plainObject(Object.create(null)); // true
is.plainObject(new String('test')); // false

const Foo = function() {};
is.plainObject(new Foo); // false
```

Signature
```typescript
is.plainObject(value: any) => boolean
```


### positive

Checks whether a value is a positive number
```typescript
is.positive(10); // true
is.positive(-1); // false
```

Signature
```typescript
is.positive(value: number) => boolean
```


### primitive

Checks whether a value is a primitive.

Helpful links:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
* http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/

NOTE! A primitive value wrapped by a corresponding object is not a primitive anymore
```typescript
is.primitive('test'); // true
is.primitive(undefined); // true
is.primitive(10); // true
is.primitive(null); // true
is.primitive(false); // true

is.primitive(new Number(10)); // false
is.primitive(new String('test')); // false
is.primitive(new Boolean(true)); // false
is.primitive({}); // false
```

Signature
```typescript
is.primitive<T = string | number | boolean | null | undefined>(value: T) => boolean
```


### property
### prop

Checks whether a value of given property of an object satisfies a predicate

If you need to check more properties at a time use {@link structure}.
```typescript
is.property('name', is.string, {name: 'Tommy'}); // true
is.property('name', is.string)({name: 'Tommy'}); // true
is.property('name', is.string, {name: 2}); // false - since 2 is not a string
is.property('name', is.string, {}); // false - since undefined is not a string
```

Signature
```typescript
is.property(propertyName: string | Symbol, predicate: Predicate | Function) => Predicate<any>
is.property(propertyName: string | Symbol, predicate: Predicate | Function, object: Object, ...extraParams: any[]) => boolean
is.property(propertyName: string | Symbol, predicate: Predicate | Function, object?: Object) => boolean | Predicate<any>
```

Throws:
* TypeError - if predicate is not a function
* Error - if too few arguments provided

### regexp
### regExp



Signature
```typescript
is.regexp(value: any) => boolean
```


### startsWith

Checks whether a string starts with a given prefix
```typescript
const isProfessor = is.startsWith('Prof. ');
isProfessor('Prof. Bend Ovah'); // true
// same as
is.startsWith('Prof. ', 'Prof. Bend Ovah'); // true

isProfessor('Dr. Here U\' Are'); // false
```

Signature
```typescript
is.startsWith(prefix: string) => TypeGuardPredicate<string>
is.startsWith(prefix: string, value: any) => boolean
is.startsWith(prefix: string, value?: any) => boolean | TypeGuardPredicate<string>
```

Throws:
* TypeError - if prefix is not a string
* Error - if prefix is empty

### set

Checks whether value is Set

Signature
```typescript
is.set<T = any>(value: any) => boolean
```


### strictEqual
### strictEqualTo

Checks whether a value is strictly equal to expected value (uses === operator)
```typescript
const mom = {};
const isMyMom = is.strictEqual(mom);

isMyMom(mom); // true - mom is only one. Remember about it...
// same as
is.strictEqual(mom, mom); // true
isMyMom({}); // false
```

Signature
```typescript
is.strictEqual<T = any>(expected: T) => TypeGuardPredicate<T>
is.strictEqual<T = any>(expected: T, value: any) => boolean
is.strictEqual<T = any>(expected: T, value?: any) => boolean | TypeGuardPredicate<T>
```


### string
### str

Checks whether a value is a string
```typescript
is.string('test'); // true
is.string({}); // false
```

Signature
```typescript
is.string(value: any) => boolean
```


### structure
### struct

Checks whether an object satisfies predicates defined in structure

NOTE: All predicates defined in structure must be satisfied.
If some of the properties are optional use [undefinedOr](#undefinedOr)

You shouldn't use this function to validate input from the user and expect complex report of what is invalid.
There are few reasons for that:
* it's just a predicate (that always returns only true or false)
* breaks [the design rule](design.md#user-content-defined-and-generated-predicates-will-not-throw-any-errors)

See examples for inspiration how you can use _structure_
```typescript
// Structure checkconst schema = {
     name: String, // only string
     phone: is.or(String, Number), // string or number
     surname: is.undefinedOr(String) // optional
},
    isPerson = is.structure(schema);

const person = {name: 'Tommy', phone: 80129292};
isPerson(person); // true
// same as
is.structure(schema, person); // true
isPerson({name: 'Tommy'});
```
```typescript
// filteringconst people = [
 {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 {name: 'Dr. Supa Kaki', age: 34, sex: 'female'},
 {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
];

const professors = people.filter(is.structure({
 name: is.startsWith('Prof.')
}));

// [
//   {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
//   {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
// ]
```
```typescript
// duck typingconst isDuck = is.structure({
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

Signature
```typescript
is.structure(structure: { [name: string]: Predicate | Function }) => Predicate<any>
is.structure(structure: { [name: string]: Predicate | Function }, value: Object) => boolean
is.structure(structure: { [name: string]: Predicate | Function }, value?: Object, ...extraArgs: any[]) => boolean | Predicate<any>
```

Throws:
* TypeError - if structure is not an object

### symbol

Checks whether value is Set
```typescript
is.symbol(Symbol('test')); // true
is.symbol('test'); // false
```

Signature
```typescript
is.symbol(value: any) => boolean
```


### true

Checks whether a value is a boolean true
```typescript
is.true(true); // true
is.true('true'); // false
```

Signature
```typescript
is.true(value: any) => boolean
```


### truthy

Checks whether a value is truthy
```typescript
is.truthy(true); // true
is.truthy(1); // true
is.truthy(0); // false
```

Signature
```typescript
is.truthy(value: any) => boolean
```


### thenable
### promiseLike

Checks whether value is thenable according to Promise A+ spec https://promisesaplus.com/
Useful to asses whether value might be used as promise.
```typescript
is.thenable(Promise.resolve('test')); // true
is.thenable({then: () => {}}); // this is still a thenable (according to spec)
is.thenable({}); // false
```

Signature
```typescript
is.thenable(value: any) => boolean
```


### undefined

Checks whether a value is undefined
```typescript
is.undefined(undefined); // true
is.undefined(0); // false
```

Signature
```typescript
is.undefined(value: any) => boolean
```


### undefinedOr

Checks whether a value is undefined or satisfies given predicate
Very useful to check optional arguments of function.
```typescript
const isUndefinedOrString = is.undefinedOr(is.string);

isUndefinedOrString(undefined); // true
isUndefinedOrString('test'); // true

// same as
is.undefinedOr(is.string, undefined); // true
is.undefinedOr(is.string, 'test'); // true

isUndefinedOrString({}); // false

// simpler for common types
is.undefinedOr(String)(undefined); // true
is.undefinedOr(String)('test'); // true
```

Signature
```typescript
is.undefinedOr<T = any>(predicate: Predicate | Function) => TypeGuardPredicate<T>
is.undefinedOr<T = any>(predicate: Predicate | Function, value: any) => boolean
is.undefinedOr<T = any>(predicate: Predicate | Function, value?: any) => boolean | TypeGuardPredicate<T>
```

Throws:
* TypeError - if provided predicate is not a function

### weakMap

Checks whether value is an instance of WeakMap

Signature
```typescript
is.weakMap<K extends object = any, B = any>(value: any) => boolean
```


### weakSet

Checks whether value is an instance of WeakSet

Signature
```typescript
is.weakSet<T = any>(value: any) => boolean
```



### setDescription

Sets description of predicate.

Underneath assigns a non-enumerable property to a given predicate
```typescript
function customPredicate(value) {
 // implementation
}

is.setDescription(customPredicate, 'some custom description')
is.getDescription(customPredicate); // 'some custom description'
```

Signature
```typescript
    is.setDescription<T extends Predicate>(predicate: T, desc: string) => T
```

### getDescription

Returns predicate description
```typescript
is.getDescription(is.string); // 'a string'

function someCustomPredicate(value) {
  // implementation
}
is.getDescription(someCustomPredicate); // 'satisfied custom predicate "someCustomPredicate"'

is.getDescription(function(value) {}); // 'satisfied custom predicate "anonymous"'
```

Signature
```typescript
    is.getDescription(predicate: Predicate) => string
```

### assert

Asserts that value satisfies given predicate, otherwise throws a given error with provided message
```typescript
// if no message provided then description of the predicate will be taken
is.assert(is.string)(null) // Error('Assertion failed. Must be a string')

// simple types are mapped to predicates so they get the same description
is.assert(String)(null) // Error('Assertion failed. Must be a string')

is.assert(String)('string') // undefined - everything is fine
is.assert(is.not(is.empty), 'Value is required')(''); // Error('Value is required')

// custom error class allowed
is.assert(String, undefined, CustomErrorClass)(null); // CustomErrorClass('Assertion failed. Must be a string');
```

Signature
```typescript
    is.assert(predicate: (Predicate | Function), message?: string, exceptionClass: { new (message: string): any } = Error) => (value: any, ...extraArgs: any[]) => void
```


### Predicate
A function that returns true or false based on input arguments
```typescript
type Predicate<T = any> = (value: T, ...extraArgs: any[]) => boolean;
```

### TypeGuardPredicate
A function that returns true or false based on input arguments but additionally is a TypeGuard for Typescript compiler
```typescript
type TypeGuardPredicate<T = any> = (value: any, ...extraArgs: any[]) => value is T;
```