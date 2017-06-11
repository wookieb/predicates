# API design

## Generated predicates might be called with more than one argument

Most of type checking, utility libraries force you use predicates with only one argument. 
_Predicates_ doesn't have such a limitation and additionally preserves the context function call which allows you to create even more powerful logic.


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

## Prevents from doing stupid, illogical mistakes
_Predicates_ checks provided arguments and throws an error if something illogical happened.

```js
is.startsWith(''); // Error: Prefix cannot be empty
// since that would be true for all strings

is.in([]); // Error: Collection cannot be empty
// always false
```

That's why it's a good practice to create predicates at the beginning of a module definition to quickly catch any mistake.

```js
// some module
const is = require('predicates'),
    
const isImage = is.in([]); // Error: Collection cannot be empty

// You don't need to run the whole application to get the error that your predicate is wrong
const Module = function(options) {
    // assert options
    ...
};

module.exports = Module;
```

## Defined and generated predicates will not throw any error
You don't need to check the arguments provided to predicates to make sure they won't cause an error - _predicates_ does it for you.

```js
const isDuck = is.hasProperty('quack');

isDuck(undefined); // false - no error
isDuck(1); // false - no error
isDuck('duck'); // false - no error
```

NOTE! This rule applies only for predicates defined in the library. Any user-defined predicate MAY throw errors but _predicates_ will not catch them.

```js
const assertName = is.all(is.string, function(value) {
    if (value === 'admin') {
        throw new Error('Admin is a reserved user name');
    }
});

assertName('admin'); // Error: Admin is a reserved user name
```