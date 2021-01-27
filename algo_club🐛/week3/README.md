## Outline
- [ ] Review last week's [leetcode problem](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/)
- [ ] Array Discussion
    - What are they? 
    - Runtimes for Access, Search, Insertion, and Deletion
    - Build your own array  
    - Static Arrays vs. Dynamic Arrays 
    - Pros and Cons 
- [ ] Additional Exercises: 
    - [Reverse String](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/)
    - [Move Zeroes](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/)


## Array Introduction 
- arrays are commonly known as lists
- it organizes items in contiguous order ( one after another in memory )
- because of this it has the smallest footprint of any data structures
- arrays in javascript are just objects with integer-based keys

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
## Runtimes
- insert `O(n)`
- delete `O(n)`
- search `O(n)`
- access `O(1)`

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
## Tradeoffs
- Pros: 
    - fast look ups, really good quick at accessing information where you already know the index 
    - adding/deleting the last element of an array 
    - if the array is ordered and close to each other in data, makes it easy to work with
- Cons: 
    - slow insertion + deletes because we have to shift the indexes 
    - if you're using static arrays, it's fixed in size so you'll have to declare the array size from the beginning 

