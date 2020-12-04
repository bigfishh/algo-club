## SWBATs
- [ ] Understand what an interviewer is looking for during a whiteboarding interview 
- [ ] Have a solid whiteboarding approach 
- [ ] Define 'algorithm' 
- [ ] Stand their ground in front of Big O terminology 
- [ ] Identify code that runs in constant, linear, logarithmic, and quadratic time 

## Discussion Question
1. What is an interviewer looking for? 
2. What is good code? 
3. What are the steps to approach a whiteboarding question? 

Write a function called
`hasTargetSum` that receives two arguments:
  * an array of integers
  * a target integer

The function should return all pairs of numbers found in the array that add up to the target number.

```js
// Example 1:
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10)
// should return
// [[-1, 11], [3, 7]] 

// Example 2:
hasTargetSum([22, 19, 4, 6, 30, -6], 25)
// should return
// [[19, 6]] 
```
4. Algorithm
5. Big O Notation  



## Algorithm...wtheck is that? 🧐 
- a set of instructions/steps to complete a task
- similar to the steps you take to wash your hair or bake banana bread 

An algorithm to wash 🧼 your hair: 
- Developer's worse nightmare: 
```js 
    lather()
    rinse()
    repeat()
```
- Freedom: 
```js 
    while (hair !== clean) {
        lather()
        rinse()
    }
```
An algorithm to bake 🍌 banana bread: 
```
1. Preheat Oven to 350˚F. 
2. Butter and flour a bread loaf pan (9.25"L x 5.25"W x 2.75"D)
3. In a mixing bowl using paddle attachment, cream together 1/2 cup softened butter and 2/3 cup sugar. Add 2 lightly beaten eggs.
4. Mash bananas with a fork until consistency of chunky applesauce and add them to the mixing bowl along with 1/2 tsp vanilla extract. 
5. Mix until blended. 
6. In a separate bowl, whisk together dry ingredients: 1 1/2 cups flour, 1 tsp baking soda and 1/2 tsp salt. Add to mixing bowl and mix until incorporated. 
7. Fold in 3/4 cup chocolate chips then transfer to prepared bread pan. Sprinkle remaining 1/4 cup chocolate over the top. 
8. Bake at 350˚F for 55-65 minutes or until a toothpick inserted into the center comes out clean. 
9. Let banana bread rest 10 min before transferring to a wire rack to cool. 
```

## What's Big O? 🤨
- a way to measure and compare an algorithm's efficiency. 
- a way of measuring efficiency outside of using time (i.e. seconds, milliseconds, hours, days etc.)
    - because speed and performance can vary depending on the hardware we're using and other programs that we might be running on it. 
- big O calculates runtime based on how many steps/operations it takes to run a program 
- why is it important? 
    - time/space complexity 
    - as programmers, it's important to balance the efficiency of an algorithm and the amount of space in memory this algorithm requires.
    - what the worse case scenario is 

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
    for (let i = 1; i < arrayOfFriends.length; i++) { // O(n)
        console.log(`hi ${arrayOfFriends[i]}`) 
    }
}
sayHiToFriends(["monica", "rachel", "chandler", "ross", "joey", "phoebe"]) // O(n)
```
- ### Quadratic O(n^2)
    - Each element in a collection has to be compared to every other element 
    - Each additional element that we add to a given collection has to touch or somehow iterate over every other element in the collection 

```js
function findMutualFriends(helenFriends, tomFriends) {

    helenFriends.forEach((helenFriend) => { // O(n)
        tomFriends.forEach((tomFriend) => { // O(m) <--- iterating over two different collections nested together
            if (helenFriend === tomFriend) { 
                console.log(`wow, we both know ${helenFriend}!`)
            }
        })
    })

}

findMutualFriends(["nancy", "lucy", "brian"], ["richard", "katie", "susan", "poppy", "lucy"])
// 0(n * m) 
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