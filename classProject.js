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

console.log(sum(1, 2, 3, 4) === 10)
console.log(sum(1, 2, 3, 4, 5) === 15)
