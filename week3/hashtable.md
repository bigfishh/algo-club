## Hash Table Introduction 
- Very commonly used to store pairs of information that need to be tied to each other. 
    - Ex: I want to buy ten packs of loxs, so I put ten into my grocery cart -- how would you represent this? 
- Hash tables have `key-value` pairs, the key is used like indexes to access the value. 
- In javascript:
    - {} POJO
        - the keys get stringified
    - Map -- `new Map()`
        - allows the keys to be any data type 
        - maintains insertion order

```js 
    let groceryCart = {
        lox: 10
    }

    groceryCart.lox 
```
|     |      |   
| --- | ---- |
| 000 | cake, 2    |
| 001 | watermelon, 1    |
| 002 | lox, 10   |
| 003 | oranges, 12   |

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/1200px-Hash_table_3_1_1_0_1_0_0_SP.svg.png)

## Hash Function 
- a function that generates a value of fixed length for each input it gets 
- it's a one way street like a meat grinder: with the output, there's no way of figuring out the input
- same input will always return the same output
- there are different hashing functions, each with their own runtime
    - [md5](http://www.miraclesalad.com/webtools/md5.php): very fast `O(1)`
    - SHA-256: takes much much longer and is very complex -- used frequently in cryptography 
- Runtimes 
    - insert O(1)
    - lookup O(1)
    - delete O(1)
        - hashes are unordered so we don't have to shift indexes like we did with arrays
    - search O(1)

## Collision
    - Computers have limited space and only a limited space is alloted for the hash map which can lead to collision 
        - https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
        - this slows down reading and writing (O(n/k)) -- k is the size of your hash table --> becomes an O(n) runtime
        - two ways to deal with collision 
            - separate chaining 
            - linked lists

## Building your own hash table
```javascript 
class HashICreated {
    data = new Array(size)

    // hash function 
    _hash(key) {
        let hash = 0 
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
            for ( let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }  
            }
        }
        return undefined
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

```

