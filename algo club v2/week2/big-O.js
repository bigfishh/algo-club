// Write a function called
//  `hasTargetSum` that receives two arguments:
//    * an array of integers
//    * a target integer

//  The function should return all pairs of numbers found in the array that add up to the target number.
//  hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7], [11, -1], [7, 3]]
//  hasTargetSum([22, 19, 4, 6, 30, -6], 25) ==>  [[19, 6]]

// declare an empty array that will house the matching pairs []
// loop through the array and compare two value <--- 
// add the two matching value in to an array and add it to the returning array. 
// return that array 

function hasTargetSum(arr, sum) {
    let finalResult = [] // O(1)
    for (let i = 0; i < arr.length; i++) {  // O(n)
        let currentNumber = arr[i] // O(1)
        // console.log("currentNumber", arr[i])
        arr.forEach((number) => { // O(n)
            console.log(arr[i], number)
            if (number + currentNumber === sum) { // O(1)
                finalResult.push([number, currentNumber]) // O(1)
            }
        })
    }
    return finalResult // O(1)
}
// If you have nested loop over the same collection ( n * n ) => (n^2)
// If you have nested loop over the different collection ( n * m )

// O(n^2)

console.log(hasTargetSum([22, 19, 4, 6, 30, -6], 25)) // ==>  [[-1, 11], [3, 7]]






































// Solution #1: O(n^2)
// function hasTargetSum(arr, sum) {
//     let finalArr = []
//     for ( let i = 0; i < arr.length; i++ ) {
//         for ( let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 finalArr.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return finalArr
// }

// Solution #2: O(n^2)
// function hasTargetSum(arr, sum) {
//     let finalArr = []
//     for ( let i = 0; i < arr.length; i++ ) {
//         if (arr.includes(sum - arr[i])) {
//             finalArr.push([arr[i], sum - arr[i]])
//         }
//     }
//     return finalArr
// }


// Solution #3: O(n)
// function hasTargetSum(arr, sum) {
//     let finalArr = []
//     let seenHash = {}

//     for ( let i = 0; i < arr.length; i++ ) {
//         let complement = sum - arr[i]
//         if (seenHash[complement]) {
//             finalArr.push([arr[i], complement])
//         }
//         seenHash[arr[i]] = true
//     }
//     return finalArr
// }