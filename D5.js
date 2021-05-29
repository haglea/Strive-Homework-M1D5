/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

console.log("\n--------------EXERCISE 1--------------")

let area = function (l1, l2) {
    let areaOfRectangle = l1 * l2
    console.log(areaOfRectangle)
    return areaOfRectangle
}
area(3, 2)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n--------------EXERCISE 2--------------")

let crazySum = function (Integer1, Integer2) {

    if (Integer1 === Integer2) {
        console.log((Integer1 + Integer2) * 3)
        return (Integer1 + Integer2) * 3

    } else {
        console.log(Integer1 + Integer2)
        return Integer1 + Integer2
    }
}

crazySum (3, 4)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("\n--------------EXERCISE 3--------------")

let crazyDiff = function (givenNumber) {

    let absoluteDifference = Math.abs(givenNumber - 19)
    
    if (givenNumber > 19) {
        console.log(absoluteDifference * 3)
        return absoluteDifference * 3
    } else {
        console.log(absoluteDifference)
        return absoluteDifference
    }
}

crazyDiff(2)


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

console.log("\n--------------EXERCISE 4--------------")

let boundary = function (IntegerN) {

    if (IntegerN >= 20 && IntegerN <= 100 || IntegerN === 400) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return true
    }

}

boundary(19)
boundary(20)
boundary(99)
boundary(100)
boundary(399)
boundary(400)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n--------------EXERCISE 5--------------")

let strivify = function (aString) {

    if (aString.startsWith("Strive")) {
        console.log(aString)
        return aString
    } else {
        console.log("Strive" + aString)
        return "Strive" + aString
    }
}

strivify("school")
strivify("Striveschool")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

console.log("\n--------------EXERCISE 6--------------")

let check3and7 = function (positiveNumber) {

    if (positiveNumber % 3 === 0 && positiveNumber % 7 === 0) {
        console.log(positiveNumber, "is a multiple of 3 and 7")
    } else if (positiveNumber % 3 === 0) {
        console.log(positiveNumber, "is a multiple of 3")
    } else if (positiveNumber % 7 === 0) {
        console.log(positiveNumber, "is a multiple of 7")
    } else {
        console.log(positiveNumber, "is neither multiple of 3 nor 7")
    }
}

check3and7(8)
check3and7(14)
check3and7(21)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

console.log("\n--------------EXERCISE 7--------------")

let reverseString = function (stringToReverse) {

    let splitedString = stringToReverse.split("")
    //console.log(splitedString)
    let reversedString = splitedString.reverse()
   // console.log(reversedString)
    let joinedString = reversedString.join("")
    console.log(joinedString)
    return joinedString
   // this would be in one step: let reversedString = stringToReverse.split("").reverse().join("")

}

reverseString("Lea")
reverseString("Strive")

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/