// Write your own myEach without using the built in forEach method.

Array.prototype.myEach = function (callback) {

}


// Write your own myReduce without using the built in reduce method.

Array.prototype.myReduce = function(calback, acc) {

}

// Write you own myEvery.

Array.prototype.myEvery = function(callback) {

}

// Write a function that return an object that has a count of each character occurence.
// Don't worry about punctuation, ignore spaces, but it should be case insensitive.

function counter(str) {

}


// Write a function that called doubler that uses map and returns an array with each elements
//doubled
function doubler(arr) {

}

// Write a function that removes all duplicates in an array.
function noDups(arr) {

}


//You are given an array of objects representing developers who have signed up to
// attend a coding meetup.
// Given the following input array, write a function getAverageAge that
// returns the average age of developers (rounded to the nearest integer).

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
// ];
// getAverageAge(list1) // => 33

function getAverageAge(arrOfObj) {};

// Write a function that returns the middle letter of a string.
// If the string has an even length it should return the two middle characters.

function getMiddle(str) {};

module.exports = { counter, doubler, noDups, getAverageAge, getMiddle };
