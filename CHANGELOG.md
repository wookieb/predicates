# Changelog
 
## 2.0.3
* Fixed compatibility with typescript 2.7

## 2.0.1
* Fixed #26

## 2.0.0
* 2.0.0-rc2 became 2.0.0
 
## 2.0.0-rc2
* Added type guards
* Added description for all predicates
* Added _assert_
* Decreased verbosity with simple type to predicate mapping

## 2.0.0-rc1
* Dropped support for bower, use webpack or any other module bundler
* Rewritten in typescript for much better code completion and function signature detection
* Added _asyncFunction_, _generator_, _map_, _set_, _symbol_, _thenable_, _weakMap_, _weakSet_, _emptyArray_, _notEmptyArray_ (#22) predicates
* Fixed #23

## 1.0.1
* Fixed #21

## 1.0.0-rc.2
* Added bower support #16

## 1.0.0-rc.1
* Provided names for all the functions to make debugging easier #13
* Added _primitive_ predicate #12
* Added _plainObject_ predicate #4
* Added _divisible_ and _divisibleWithRemainder_ predicates
* Added _property_ predicate #14
* Added _notBlank_ predicate
* Improved performance

## 0.3
* Fixed path to finite polyfill
* Better support for is.NaN #11
* Added _notEmpty_ predicate #9
* Improved is.false and is.true to accept new Boolean(true/false) as well
* Fixed behavior of is.object to accept Object.create(null) #10

## 0.2.1
* Fix: instanceof renamed to instanceOf

## 0.2
* Added information how to use _predicates_ for arguments assertions
* Added documentation with examples and design rules
* Added "startsWith" and "endsWith" functions
* Added type checking for property names for hasOwnProperty and hasProperty predicate
* Fixed error type declaration for @throws