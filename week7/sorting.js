// Bubble Sort
// a sorting algo where the largest val bubbles up to the top first 
function swap(arr, indx1, indx2) {
    let largerVal = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = largerVal
}

function bubbleSort(arr) {
    // outer loop 
        // loop through the arr
        // compare the element that we're on to the next one and
            // if current is greater, swap 
            // else move on 
    for (let i = 0; i < arr.length; i++) {
        let noSwap = true
        for (let j = 0; j < (arr.length - 1 - i); j++) {
            if (arr[j] > arr[j+1]) {
                // swap(arr, j, j+1)
                noSwap = false
                let largerVal = arr[j] // 9
                arr[j] = arr[j+1] // arr[0] = 2
                arr[j+1] = largerVal // arr[1] = 9
            }
        }
        if (noSwap) {
            return arr
        }
    }
    return arr
}
                        // jlV   j+1
console.log(bubbleSort([9, 2, 19, 4, 5, 3, 7, 1]))
// ------------------------------------------------







// Selection Sort
function selectionSort(arr) {

}

console.log(selectionSort([9, 19, 2, 4, 5, 3, 7]))
// ------------------------------------------------







// Insertion Sort
function insertionSort(arr) {

}

console.log(insertionSort([9, 19, 2, 4, 5, 3, 7]))
// ------------------------------------------------







// Merge Sort
function mergeSort(arr) {

}

console.log(mergeSort([9, 19, 2, 4, 5, 3, 7]))