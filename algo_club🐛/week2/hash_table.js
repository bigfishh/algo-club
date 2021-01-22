
// Creating a Hash
class HashICreated {
    constructor(size) {
        this.data = new Array(size)
    }

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
            if (currentBucket.length === 1) { // O(1)
                return currentBucket[0][1]
            }

            for ( let i = 0; i < currentBucket.length; i++) { // O(n)
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }  
            }
        }
        return undefined
    }

}

const newHash = new HashICreated(13)
console.log(newHash._hash("chai"))
// console.log(newHash.set("cake", 20))
// console.log(newHash.set("lox", 10))
// console.log(newHash.set("sushi", 100))






















//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1 

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
    
}

console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))














// Exercise: Ransom Note
// https://leetcode.com/problems/ransom-note/
// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// You may assume that both strings contain only lowercase letters.

// const canConstruct = function(ransomNote, magazine) {
    
// };