// function linearSearch(arr, val) {
//     // iterate through this array 
//     // create a conditional to see if the val exist at the current position in the input arr, arr[i]
//     // if found, return true, else return false 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return true
//         }        
//     }
//     return false
// }

// console.log(linearSearch([9, 19, 2, 4, 5, 3, 7], 7))




function binarySearch(arr, val) {
    // declare three diff variable: middle, right, left  
    // iterate through this array and break it off into pieces 
    // check if the middle is equal to or greater/less than the val we're looking for
        // if the middle is less than val: check items in left 
        // else check the items on the right 
    // reassign the middle 
    // if the value doesn't exist, return -1, if it does exist: return index 

    let start = 0 
    let end = arr.length - 1
    
    while (start <= end) {
        let middle = Math.floor((start + end)/2) 
        let guess = arr[middle]
        if (guess === val) {
            return middle
        } else if (guess > val) {
            end = middle - 1 
        } else if (guess < val) {
            start = middle + 1
        }
    }
    return -1 
}

// O(log n)
console.log(binarySearch([1, 2, 7, 20, 21, 30], 7))
                        //   s      m     e