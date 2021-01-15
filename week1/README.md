## Algo Club
- get the ball-rolling on learning algorithm and data structures in preparation for whiteboarding interviews
- primary language: javascript 
- practice, practice, practice ( + sometimes getting some pointers in the right direction)

// insert waterscroll + firelord picture here

## SWBATs
- [ ] understand what interviewers are looking for during white-boarding interviews 
- [ ] have a solid whiteboarding approach 
- [ ] stand your ground in front of Big O terminology 
- [ ] identify code that runs in constant, linear, and quadratic time 

## Discussion Question
1. what do you think interviewers are looking for during whiteboarding interviews? 
<details><summary></summary>
<p>

1. critical thinking
2. technical knowledge
3. communication skills
4. coding abilities

</p>
</details>

// insert wtf code quality picture here

2. what does it mean to write good code? 
<details><summary></summary>
<p>

1. readability
2. maintainability

</p>
</details>

3. what would you consider a solid whiteboarding approach?
<details><summary></summary>
<p>

1. Repeat the questions back, in your own words
2. Give an example of what you think they're asking for, ask for examples, and look out for edge cases 
3. Pseudocode first! Get really comfortable processing your thoughts out loud 
4. Code 
5. Test your code! Run the examples from step 2 and see if your code is actually working the way you think it is 
6. Analyze and optimize

</p>
</details>

// whiteboarding exercise 

4. what is big O? 
- how do you measure time? 
<details><summary></summary>
<p>

- a way to measure and compare an algorithm's efficiency.
- big O calculates runtime based on how many steps/operations it takes to run a program
- why is it important?
    - time/space complexity
    - as programmers, it's important to balance the efficiency of an algorithm and the amount of space in memory this algorithm requires.
    - what the worse case scenario is

</p>
</details>

// insert big O runtime picture 

## Types of Big O runtime 
- ### Constant O(1)
    - No matter how many inputs we're working with, the algoritm will always take the same amount of work 
    - It is a flat line on a graph 
```js
function sayHiToFirstFriend(arrayOfFriends) {
    return `hi ${arrayOfFriends[0]}`
}
sayHiToFirstFriend(["monica", "rachel", "chandler", "ross", "joey", "phoebe"])
```
- ### Logarithmic O(log(n))
    - If doubling the number of elements you are iterating over doesn't double the amount of work
    - Logarithm means very slow growing! It's really `log base 2`: the 2 comes from cutting the number of operation in half and then in half again, and again, and etc. 
    - Assume that searching operations on a sorted array of data to be `O(log(n))`
```js
function findFriend(arrayOfFriends, targetFriend) {
    const midpoint = Math.floor(arrayOfFriends.length / 2);
    const middle = arrayOfFriends[midpoint];

    if (arrayOfFriends.length <= 1) {
        return middle === targetFriend ? targetFriend : false;
    }

    if (middle === targetFriend) {
        // we found the targetFriend
        console.log(`Remainding elements to search: ${arrayOfFriends.length}`)
        return targetFriend
    } else if (middle > targetFriend) {
        // let's look in the first half
        console.log(`Remainding elements to search: ${arrayOfFriends.length}`)
        return findFriend(arrayOfFriends.slice(0, midpoint), targetFriend);
    } else if (middle < targetFriend){
        // let's look in the second half
        console.log(`Remainding elements to search: ${arrayOfFriends.length}`)
        return findFriend(arrayOfFriends.slice(midpoint), targetFriend);
    }
}
findFriend(["anna", "ben", "chandler", "dan", "jessie", "joey", "monica", "rachel", "ross", "phoebe"], "joey")
```
- ### Linear O(n)
    - As the size of the inputs grows, the number of operation will also increase proportionally linearly
    - Has a straight line on a graph 
    - Iterating through all elements in a collection of data
```js
function sayHiToFriends(arrayOfFriends) {
    for (let i = 1; i < arrayOfFriends.length; i++) { 
        console.log(`hi ${arrayOfFriends[i]}`) 
    }
}
sayHiToFriends(["monica", "rachel", "chandler", "ross", "joey", "phoebe"]) 
```
- ### Quadratic O(n^2)
    - Each element in a collection has to be compared to every other element 
    - Each additional element that we add to a given collection has to touch or somehow iterate over every other element in the collection 

```js
function findMutualFriends(helenFriends, tomFriends) {

    helenFriends.forEach((helenFriend) => { 
        tomFriends.forEach((tomFriend) => { 
            if (helenFriend === tomFriend) { 
                console.log(`wow, we both know ${helenFriend}!`)
            }
        })
    })

}

findMutualFriends(["nancy", "lucy", "brian"], ["richard", "katie", "susan", "poppy", "lucy"]) 
```
## Optimizing
- In computer science, there's always a trade off 
- If we want our algorithm to take up less time, we have to take up more space (💸 Memory is cheap)

### Hashes & Constant Time
- Here's a hash with one key-value pair, you can access the value by calling the key 
```js
    let hash = {
        "flower": "garden"
    }

    hash.flower

    let nums = [1, 2, 3, 3, 2, 2, 5, 4, 7]

    let numsHash = {
        1: 1,
        2: 3,
        3: 2, 
        5: 1, 
        4: 1, 
        7, 1
    }
```

## Refactored Solution 
- Using hashes:
```js
    function hasTargetSum(arr, sum) {
        let finalArr = []
        let seenHash = {}

        for ( let i = 0; i < arr.length; i++ ) {
            let complement = sum - arr[i]
            if (seenHash[complement]) {
                finalArr.push([arr[i], complement])
            }
            seenHash[arr[i]] = true
            console.log(seenHash)
        }
        return finalArr
    }


    array = [1, 3, 5, 7, 9, 11]

    hasTargetSum(array, 8)

    // {1: true}
    // {1: true, 3: true}
    // {1: true, 3: true, 5: true}
    // {1: true, 3: true, 5: true, 7: true}
    // {1: true, 3: true, 5: true, 7: true, 9: true}
    // {1: true, 3: true, 5: true, 7: true, 9: true, 11: true}
    // => results = [[5, 3], [7, 1]]
```

## Don't prematurely optimize! 
- Start with the brute force / naive solution first even if it is a loop within another loop. 
- Even if you don't get to the optimized/refactored solution, you still did an awesome job by articulating yourself and acknowledging the Big O of your initial solution and how you could refactor it. 

## Resources
- Leet Code
- Hacker Rank
- codewars
- Pramp
- Cracking the Coding Interview book
- Big O Explained with Examples
