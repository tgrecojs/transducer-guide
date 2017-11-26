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

const tg = objReducer(user, {
    age: 25
});

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

// remove dependency on array
// return reducer - NOT the reducer
const mapTransducer = xf => reducer => {
    return (acc, val) =>  {
        reducer((xf(val))); 
        return acc;
    };
}


// used as innermost transducrers


// predicate
const isEven = x => x % 2 === 0;
const filterTransducer = predicate => 
    transducer => (acc, val) => {
    // redux switch statement
    // map fn (below)
    if(predicate(val)) return transducer(acc, val);
    return acc;
}


// transform function
const double = x => x * 2;

const isEvenFilter = filterTransducer(isEven);
const isNot2Filter = filterTransducer(val => val !== 2);

const data = [1,2,3,4,5];
const doubleMap = mapTransducer(double);

const pushReducer = (accumulation, value) => {
    accumulation.push(value);
    return accumulation;
}
const simple = data.reduce(filterTransducer(isEven)(doubleMap), [])
// const withPushReducer = data.reduce(filterTransducer(isEven)(doubleMap(pushReducer)), [])
// console.log(simple)
// console.log(withPushReducer);

const compose = (...fns) => fns.reduce((acc, fn) => 
    (...args) => fn(acc(...args)), x => x);
const cleanNums =  compose(isNot2Filter, isEvenFilter, doubleMap);


let nums = [1,2,3,4,5,6];

const composeWithPush = [1,2,3,4].reduce(
    compose(isNot2Filter, isEvenFilter, doubleMap)(pushReducer),
    []
)
console.log(composeWithPush)

/**
 * Transducer
 * s
 */

 const transduce = (xf, reducer, seed, collection) => {
     const transformedReducer = xf(reducer);
     let accumulation = seed;
     for(const value of collection) {
         accumulation = transformedReducer(accumulation, value);
     }
     return accumulation;
 }

 const isVowel = char => ['a','e','i','o','u', 'y'].includes(char.toLowerCase())

 const vowelChecker = transduce(
     compose(mapTransducer(toUpper), filterTransducer(isVowel)),
     (str, char) => str + char,
     '',
     'adrian'
 );

 console.log(vowelChecker)