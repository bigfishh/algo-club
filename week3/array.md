## Data Structure 
- Data structures are collections of data/information/values 
- Algorithm are steps/operations we take to run a program 
- Data structures + algorithm = program 
- Common operations that we perform on DS: 
    - insert
    - delete
    - search
    - access 

## Array Introduction 
- arrays are commonly known as lists
- it organizes items in contiguous order ( one after another in memory )
- because of this it has the smallest footprint of any data structures
- arrays in javascript are just objects with integer-based keys
- runtimes: 
    - insert `O(n)`
    - delete `O(n)`
    - search `O(n)`
    - access `O(1)`

|   |           |   
| - | --------- |
| 0 | pizza     |
| 1 | sushi     |
| 2 | chicken   |
| 3 | salad     |

```js
    const potluck = ["pizza", "sushi", "chicken", "taco"]
                        0        1         2         3
    
    potluck[0] 
    potluck.push("salad") 
    potluck.pop() 
    potluck.unshift("mac n cheese") 
    potluck.splice(1, 0, "cake") 
```
## Static vs. Dynamic Arrays
- biggest difference between the two is that: 
    - static arrays are fixed in size
        - you have to define the number of element your array will have ahead of time
        - low-level languages like C++ allows you to manage memory
    - dynamic arrays automatically resizes arrays 
        - high-level languages like javascript take care of memory management 
        - under the hood, javascript will copy the original array and move it to another place in memory to a larger array ( generally twice the size of the original array )
```C++
int a[10]; // gives me an array with 10 slots
char "food"[2][20] {"pizza", "cake"};
```
## Building your own Array 
```javascript 
    class ArrayICreated {
        length = 0
        data = {}

        get(index) {
            return this.data[index]
        }

        push(value) {
            this.data[this.length] = value
            this.length++
            return this.data
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
``` 
## Practice 
```javascript
// Exercise: Merge Sorted Arrays: 
// Given two sorted array, merge these two arrays into one sorted array

function merge(arr1, arr2) {
    //write code here
}

merge([0,3,4,31], [3,4,6,30]); // [ 0, 3, 3, 4, 4, 6, 30, 31 ]
```