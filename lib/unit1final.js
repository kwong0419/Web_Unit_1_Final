// Write your own myEach without using the built in forEach method.

Array.prototype.myEach = function (callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}


// Write your own myReduce without using the built in reduce method.

Array.prototype.myReduce = function (callback, initialValue) {
    let i = 0;
    let acc;
    if(initialValue === undefined){
        acc = this[0];
        i++;
    } else{
        acc = initialValue;
    }
    while(i < this.length){
        acc = callback(acc, this[i]);
        i++;
    }
    return acc;
}

// Write you own myEvery.

Array.prototype.myEvery = function(callback) {
    let bool = true;
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])){
            bool = false;
        }
    }
    return bool;
}

// Write a function that return an object that has a count of each character occurence.
// Don't worry about punctuation, ignore spaces, but it should be case insensitive.

function counter(str) {
    let lowerStr = str.toLowerCase();
    let counts = {}
    for(let i = 0; i < lowerStr.length; i++){
        if(lowerStr[i] !== ' '){
            if(counts[lowerStr[i]]){
                counts[lowerStr[i]] += 1;
            } else {
                counts[lowerStr[i]] = 1;
            }
        }
    }
    return counts;
}


// Write a function that called doubler that uses map and returns an array with each elements
//doubled
function doubler(arr) {
    return arr.map( (el) => el*2);
}

// Write a function that removes all duplicates in an array.
function noDups(arr) {
    let uniqueArr = []
    arr.forEach( (el) => {
        if (!uniqueArr[el]){
            uniqueArr.push(el);
        }
    })
    return uniqueArr;
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

function getAverageAge(arrOfObj) {
    let sum = 0;
    arrOfObj.forEach ((developer) => {
        sum += developer["age"];
    })
    return Math.round(sum / arrOfObj.length);
};

// Write a function that returns the middle letter of a string.
// If the string has an even length it should return the two middle characters.

function getMiddle(str) {
    for(let i = 0; i < str.length; i++){
        if ( str.length % 2 === 0){
            return str[str.length/2 -1] + str[str.length/2]
        } else {
            return str[Math.floor(str.length/2)];
        }
    }
};

module.exports = { counter, doubler, noDups, getAverageAge, getMiddle };
