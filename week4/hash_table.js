// HashTable
// It's a Object -- it hold information 
// Contains key-value pairs
// Collection of key-value pairs 

const groceryCart = {
    lox: 10,
    meat: 1, 
    milk: 3, 
    chocolate: 100, 
    veggie: 15, 
    chip: 3
}



























//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1 

//Given an array = [2,3,4,5]:
//It should return undefined


// Hash Map Approach:  
// Create a variable that is a hashmap/ hash table 
// Loop through each element in the array and store their value to true because we already saw them  
    // check if the hashmap already has this value 
    // if true, i will return that element 
// if there is no match, i will return undefined 

function firstRecurringCharacter(input) {
    let hashMap = {} 

    for (let i = 0; i < input.length; i++) { // O(n)
        if (!hashMap[input[i]]) {      
            hashMap[input[i]] = true
        } else {
            return input[i]
        }
    }

    return undefined 
}


// O(n)
firstRecurringCharacter([2,5,5,2,3,5,1,2,4]) // 5

// { 2: true, 5: true }
















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

const canConstruct = function(ransomNote, magazine) {
    
};