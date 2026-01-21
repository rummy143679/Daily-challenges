// Order count - JS Clousre
// You need to make an order counter to keep track of the total number of orders received.

// Complete the function generateOrder() which returns a function which increments the count and returns the order number formed with concatenating prefix - "Total orders = " + count.

// Note: The function generateOrder() will be called internally. You do not need to call it yourself.

// Input Format
// You do not need to enter any input. The generateOrder() will be called internally to check your code for various outputs.

// Output Format
// If the generateOrder() function is called thrice, the output would be

// Total orders = 1
// Total orders = 2
// Total orders = 3
// Example 1
// Output

// Total orders = 1
// Total orders = 2
// Total orders = 3
// Topics
// JS- Functions and Arrays
// Javascript

let generateOrder = function () {
  // do not console.log here
  // return using return method
  let count = 0;
  return function () {
    count++;
    return "Total orders = " + count;
  }
};

let order = generateOrder();
for (let i = 0; i < 3; i++) {
  console.log(order());
}