function sum(...nums) {
    let total = 0

    nums.forEach(function(element)  {
        total += element
    });

    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i]
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     total += nums[i]
    // }

    return total
}

// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)


// Function.prototype.myBind = function(context, ...bindArgs) {
//     let that = this;

//     return function(...callArgs) {
//         return that.apply(context, bindArgs.concat(callArgs));
//     }
// }

Function.prototype.myBind = function () {
    let that = this;
    let context;
    let args = [];


    for (let i = 0; i < arguments.length; i++) {
        if (i === 0) {
            context = arguments[i];
        } else {
            args.push(arguments[i]);
        }
    }

    return function () {
        for (let i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        return that.apply(context, args);
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(numArgs) {
    let numbers = []
    let total = 0
    return function _curriedSum(num1) {
        total += num1
        numbers.push(num1)
        if (numbers.length === numArgs) {
            return total
        }
        return _curriedSum
    }

}

const curry = curriedSum(4);
console.log(curry(5)(30)(20)(1)) // => 56

Function.prototype.curry = function(numArgs) {
    let nums = []


}