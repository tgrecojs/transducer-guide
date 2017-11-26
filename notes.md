## Transducer Notes
#### 1. Understand why transducers can impoive performanc.

```js
// 1. map is going to run & create intermediary values
// 2. filter runs through entire array from the jump.
const result = arrOfMill
                .map(doubleIt) 
                .filter(isEven)

/** 
 * Imperative
 * Much Faster
*/
const result = [];
const arrOfMill.forEach(val => {
    // replicate map call
    const tripled = tripleIt(val);
    if (isEven(tripled)) result.push(tripled)'
})
```

* "Wouldn't it be great if we could keep our array operations defined separately, but still only iterate once through our collection? This is where transducers are going to save us from our misery."

### 2. Reducers for different data types.
* Reducers takes an accumulated val and a new val & **folds** new value into accumulation.
* JavaScripts `reduce` method is NOT a reducer in itself. 
    * It's just a method that abstracts the iteration part & feeds these values to your `reducer` argument.

```js
const reducer = (acc, val) => acc + val;
reducer(10, 5) // 15
```

##### Folding Values into object example

```js
const objReducer = (acc, obj) => {
    return {
        ...acc,
        ...obj
    }
}

const user = {
    name: 'TG',
    email: 'thomasjosephgreco@gmail.com'
}

objReducer(user, {
    age: 25
});
```

### Transformer Functions
* a fn that is given a value to transform.
* transformers **compose naturally** as long as **input and output** types are the same.

```js
const toUpper = str => str.toUpperCase();
const shout = str => `${str}!!!`
const scream = str => toUpper(shout(scream))
```

### Map and Filter Reducers

```js
const map = (xf, arr) => arr.reduce(acc, val => {
    acc.push(xf(val));
    return accl
}, [])

const filter = (predicate, arr) => arr.reduce(acc, val => {
    if (predicate(val)) acc.push(val);
    return accl
}, [])
```


### Map and Filter Trasnducers
* No longer need array.
* * We only want to create functions that return reducer functions
* Must all deal with same data type -> performance? 

```js
const mapTransducer = xf => ((acc, val) =>  acc.push(xf(val)); return acc
})

const filter = (predicate, arr) => arr.reduce(acc, val => {
    if (predicate(val)) 
    return accl
}, [])
```

* Transducers leverage curried functions.
* This allow to make super customizable functions for transforming data.
* 
```js
const filter = predicate => transducer =>
    (acc, val) => {
        // redux switch statement
        // map fn (below)
        if(predicate(value)) {
            return transducer(acc, val)
        };
        return
    }

}

// Allows us to create customized fns w/ POWER
const isEvenFilter = filter(evenOnly);
const doubleNums = map()
```
#### Transduce
* Bake in complete functionality so we don't need to call `.reduce(transducer)` = xf(reducer)
* using for ..of loop allows us to crea


```js
const transduce = (x) 

// xf = transformFn
// seed = initialVal
const transduceReducer = (xf, reducer, seed, collection) =>  {
    // mustbe a  
    // collection.reduce(xf(reducer), seed);
}
// 
const transduceIteratorObj = (xf, reducer, seed, collection) =>  {
    // 
    const transformFn = xf(reducer);
    // build an accumulation started with seed;
    let accumulation = seed;
    for(const val of collection) {
        // use xf  transformReducer 
        accumulation = transformFn(acc, val)
    }
}

const toUpper = str => str.toUpperCase();

// Ex. 
transduceIteratorObj(
    map(toUpper),
    (str, char) => str + char,
    '',
    'thomas'
)
```

* *Transduction* -> the result of a transducer acting on.




 something.
To do
* [] Create a compose fn for transducers. 
* []

* combinator:
    * " A combinator is a function which creates a new function with some relationships between the functions you passed in."

