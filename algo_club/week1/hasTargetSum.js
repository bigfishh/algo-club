// Write a function called
// `hasTargetSum` that receives two arguments:
//   * an array of integers
//   * a target integer

// The function should return all pairs of numbers found in the array that add up to the target number.
// hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]

//hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]
//hasTargetSum([], 5) => []

//0. define a return array
//1. for loop to go over the input array 
    // at each element
    // slice the array and look at the other element 
//2. see if the element that we're on and the next element we're looping over will add up the the target
    // if they do add up, add it to the return array
//3. return array 

function hasTargetSum(arr, target) {
    let answerArr = [] // O(1)
    for (let i = 0; i < arr.length; i++) { // O(n)
        for (let j = i + 1; j < arr.length; j++) { // O(n)
            if (arr[i] + arr[j] === target) { // O(1)
                answerArr.push([arr[i], arr[j]]) // O(1)
            }
        }
    } 
    return answerArr // O(1)
}

// O(4 + n * n) => O(4 + n^2) => O(n^2)

console.log(hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10))
// [[-1, 11], [3, 7]]

// Whiteboarding Approach! 
// 1. Repeat the questions back, in your own words :check:
// 2. Give an example of what you think they're asking for, ask for examples, and look out for edge cases 
// 3. Pseudocode first! Get really comfortable processing your thoughts out loud 
// 4. Code 
// 5. Test your code! Run the examples from step 2 and see if your code is actually working the way you think it is 
// 6. Analyze and optimize