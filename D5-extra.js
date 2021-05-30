/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
console.log("\n--------------EXERCISE 11--------------")
const giveMeRandom = function (randomNumberN) {
    let randomNumber = []
    for (i = 0; i < randomNumberN; i++) {
        randomNumber.push(Math.floor(Math.random() * 11)) // random from 0 to 10
    }
    console.log(randomNumber)
    return randomNumber
}

const checkArray = function () {
    let randomArray = giveMeRandom(3)
    let sumBigger5 = 0
    for (i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > 5) {
        console.log(randomArray[i], "is bigger than 5")
        sumBigger5 += randomArray[i]
    } else {
        console.log(randomArray[i], "is smaller than 5")
        }
    }
    console.log(sumBigger5)
    return sumBigger5
}
checkArray()


/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
console.log("\n--------------EXERCISE 12--------------")

const shippingCartTotal = function (shoppingCart) {
    let totalDue = 0
    for (i = 0; i < shoppingCart.length; i++) {
        let item = shoppingCart[i]
        totalDue += item.price * item.quantity
    }
    console.log(totalDue)
    return totalDue
}
shippingCartTotal([ {price: 6, quantity: 2}, {price: 2, quantity: 1}])

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

console.log("\n--------------EXERCISE 13--------------")
let shoppingCart = [ {price: 2, quantity: 3}, {price: 2, quantity: 2}]
//console.log(shoppingCart)
const addToShoppingCart = function (item3) {
    shoppingCart.push(item3)
    console.log(shoppingCart)
    return shoppingCart
}
addToShoppingCart({price: 5, quantity: 3})

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

console.log("\n--------------EXERCISE 14--------------")
//console.log(shoppingCart)

const maxShoppingCart = function () {
    let shoppingPrices = []
    for (i = 0; i < shoppingCart.length; i++) {
        shoppingPrices.push(shoppingCart[i].price)
    }
    shoppingPrices.sort(function(a, b){return a-b})
    console.log("The item with highest price is:", shoppingCart[shoppingCart.length-1])
    return shoppingCart[shoppingCart.length-1]
}
maxShoppingCart()


/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

console.log("\n--------------EXERCISE 15--------------")
//console.log(shoppingCart)

const latestShoppingCart = function () {
    console.log("Last item is:", shoppingCart[shoppingCart.length - 1])
    return shoppingCart[shoppingCart.length - 1]
}
latestShoppingCart()

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

console.log("\n--------------EXERCISE 16--------------")

const loopUntil = function (x) {
    let y
    let yArray = []
    for (i = 1; i < 4; i++) {
        y = Math.floor(Math.random()*9)
        if (y > x) {
            yArray.push(y)
            console.log(y)
        } else break
    }
}
loopUntil(2)

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
