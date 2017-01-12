// Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.

var arr1 = [2,-1,5,-3,9];

function printPositives(element){
    if (element >0){
        console.log(element);
    }
}

arr1.forEach(printPositives);



// Similar to the previous exercise, write a function called getPositives that takes an array and uses the filter method to return a new array with only the positive numbers.

function getPositives(element){
    return element > 0
}

var arr2 = arr1.filter(getPositives);

console.log(arr2);



// Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).
arr1.filter(getPositives).forEach(printPositives);



// Write a function called filterArray that takes a callback function and an array as arguments. 
// Your filterArray function should return a new array that contains only the elements where the callback function returns true.
// NOTE: This is a trick question. The answer is a one-liner and you are allowed to use array.filter :)
function filterArray(arr, cb){
    return arr.filter(cb)
};

var arr3 = filterArray(arr1, function(element){ return element > 2 });

console.log(arr3);



// Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
// You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string into an array of words.

function longestWord(str) {
  // Step 1. Split the string into an array of strings
  var strSplit = str.split(' ');
  
  // Step 2. Use the reduce method
  var longestWord = strSplit.reduce(function(accumulator, currentValueBeingEvaluated) {
    if(currentValueBeingEvaluated.length > accumulator.length)
       return currentValueBeingEvaluated;
    else
       return accumulator;
  }, "");
  
  // Step 3. Return the length of the longestWord
  return longestWord;
}

console.log(longestWord("I am studying at a bootcamp"));



// Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.
// For the string "The quick brown fox", the output should be 5 because there is one e, one u, one i and two os.
// Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.

function countVowels(str){
    // Step 1. Split string into an array of characters
    var strSplit = str.split('');
    
    // Step 2. Loop throuh string and return vowels
    var strVowels = strSplit.filter(function(element){
        
        if (
                element === "a" ||
                element === "e" ||
                element === "i" ||
                element === "o" ||
                element === "u" 
            ){
            return true;
        } else {
            return false;
        }
         
    });
    
    
    // Step 3. Count number of vowels in strVowels array
    var vowelsCounter = strVowels.reduce(function(accumulator, currentValueBeingEvaluated){
        return accumulator + 1;
    },0)
    
    return vowelsCounter;
    
}

console.log(countVowels("The quick brown fox"));



// Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.
// For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
// Hint: Javascript has a special value called Infinity, which is higher than any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)






