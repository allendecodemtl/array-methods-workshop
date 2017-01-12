// Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.

var arr1 = [2,-1,5,-3,9];

arr1.forEach(function(element){
    if (element >0){
        console.log(element);
    }
});


// Similar to the previous exercise, write a function called getPositives that takes an array and uses the filter method to return a new array with only the positive numbers.
var arr2 = arr1.filter(function(element){
    return element > 0
});

console.log(arr2);


// Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).
[2,-1,5,-3,9].filter(function(element){
    return element > 0
}).forEach(function(element){
    console.log(element)
});


// Write a function called filterArray that takes a callback function and an array as arguments. 
// Your filterArray function should return a new array that contains only the elements where the callback function returns true.