// Reverse a Subarray
// Given an array arr of size N. Your task is to determine that if by reversing any one subarray can the given array be sorted or not.

// You have to complete solve function which consists of arr array of size N as inputs and you have to return boolean answer as output.

// Input Format
// The first line of input contains a single integer N.

// The second line of input contains N space seperated integers.

// Output Format
// Return true, if by reversing any one subarray sorted array can be formed as else false , "Yes" or "No" will be taken care by driver code.

// Example 1
// Input

// 5
// 1 2 5 4 3
// Output

// Yes
// Explanation

// By reversing the subarray {5, 4, 3}, the array will be sorted.

// Example 2
// Input

// 4
// 1 4 2 3
// Output

// No
// Explanation

// By reversing any of the subarray we will not be able to form a sorted array.

// Constraints
// 1 <= N <= 10^5

// 1 <= arr[i] <= 10^6

// Topics
// Sorting
// Arrays
// Companies
// Amazon


function solve(N, arr) {
    // Write your code here
    // let n = arr.length;
    let l = 0, r = N - 1;

    while (l < N - 1 && arr[l] <= arr[l + 1]) l++;

    if (l === N - 1) return true;

    while (r > 0 && arr[r - 1] <= arr[r]) r--;

    if (l > 0 && arr[l - 1] > arr[r]) return false;
    if (r < N - 1 && arr[l] > arr[r + 1]) return false;

    for (let i = l; i < r; i++) {
        if (arr[i] < arr[i + 1]) return false;
    }

    return true;
}

console.log(solve(5, [1, 2, 5, 4, 3])) // true
console.log(solve(4, [1, 4, 2, 3])) // false