const potluck = ["pizza", "sushi", "chicken", "taco"]
                 // 0        1         2         3
    potluck[0] //O(1)
    potluck.push("salad") //O(1)
    potluck.pop() //O(1)
    potluck.unshift("mac n cheese") // O(n)
    potluck.splice(1, 0, "cake") // O(n)

// Build your own array


class ArrayICreated {
    length = 2
    data = {
        0: "apples",
        1: "peaches"
    }

    get(index) {
        return this.data[index]
    }

    push(value) {
        this.data[this.length] = value
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length-- 
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}


const myArray = new ArrayICreated()
console.log(myArray.pop())
console.log(myArray.push("watermelon"))
console.log(myArray)


















































// Exercise: Merge Sorted Arrays
// Given two sorted array, merge these two arrays into one sorted array

function merge(arr1, arr2) {
    //write code here
}

merge([0,3,4,31], [3,4,6,30]); // [ 0, 3, 3, 4, 4, 6, 30, 31 ]