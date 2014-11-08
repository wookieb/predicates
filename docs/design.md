#API design

##Generated predicates might be called with more than one argument

Most of type checking, predicates libraries force you use predicates with only one argument. 
_Predicates_ doesn't have such limitation and additionally preserves the context of predicates which allows you to create even more powerful logic.


```js
var is = require('predicates');

var isOkToModifyTags = is.all(
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

##Prevents from doing stupid, illogical mistakes
_Predicates_ checks provided arguments and throws an error if something illogical happened.

```js
is.startsWith(''); // Error: Prefix cannot be empty
// since that would be true for all strings

is.in([]); // Error: Collection cannot be empty
// always false
```

That's why it's a good practice to create predicates at the beginning of module definition to quickly track down the mistakes.

```js
// some module
var is = require('predicates'),
    
var isImage = is.in([]); // Error: Collection cannot be empty

// You don't need to run the whole application to get the error that your is wrong
var Module = function(options) {
    // assert options
    ...
};

module.exports = Module;
```

##Defined and generated predicates will not throw any errors
You don't need to check the arguments provided to predicates to make sure they won't trigger any errors - _predicates_ does it for you.

```js
var isDuck = is.hasProperty('quack');

isDuck(undefined); // false - no error
isDuck(1); // false - no error
isDuck('duck'); // false - no error
```