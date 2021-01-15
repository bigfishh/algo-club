## SWBATs
- [ ] Define 'data structure' 
- [ ] Stand their ground in front of Big O terminology 
- [ ] Identify code that runs in constant, linear, and quadratic time 
- [ ] Understand and use arrays
- [ ] Understand and use hash tables/ hashmaps

## Discussion Question
1. Define algorithm? 
    - steps that you take/ tell the computer to do. 
2. What is Big O? 
    - to tell runtime of your code 
    - amount of time that it takes a function to run
    - measures speed/time based how many operations/steps it takes for the program to run
3. What is constant time? 
    - O(1)
    - no matter how much input there are, the program will always run the same amount of steps
    - value doesn't depend on the size of input 
    - on a graph, it's a flat line
    - super duper good, predictable 
4. What is linear time? 
    - O(n)
    - the number of operations it takes for the program to run depends on the size of the input 
    - the more input you have, the more operations it takes for the program to run 
    - on graph, it's a striaght line
    - if you see a loop -- it's O(n)
    - it's an okay runtime 
5. What is quadratic time? 
    - O(n^2)
    - on a graph, it's like half of a U 
    - with every new input that you have, it's going to have quadratically longer. 
    - nested loops 
6. What is the runtime of the following programs? Why?

#1 
```js
    function findLox(arr) {
        for ( let i = 0; i < arr.length; i++ ) { // 0(n)
            if (arr[i] === "lox") { // 0(1)
                return "found it!"
            }
        }
    }

    // findLox([1,"lox", 4, 5])  0(n)
```
#2
```js
                                    n           m           p
    function findMutualFriends(helenFriends, tomFriends, adaFriends) {

        helenFriends.forEach((helenFriend) => { // O(n) 
            tomFriends.forEach((tomFriend) => { // O(n)
                if (helenFriend === tomFriend) { // O(1)
                    console.log(`wow, we both know ${helenFriend}!`)
                }
            })
        })

        for (let i = 0; i < adaFriends.length; i++) { // O(n)
            console.log("i have friends too!")
        }
        
    }

    findMutualFriends(["lucy", "brian"], ["richard", "katie", "susan", "poppy", "lucy"], ["taylor", "lucy", "poppy"])
    // O( n * m + p ) => O(n^2 + n) => O(n^2)
    // n = 10
    // O(10*10 + 10) => O(100 + 10)
```
#3
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

```
#4
```js
    function makeLoxBagel(lox, bagel, creamCheese) {
        let goodBagel = lox + bagel + creamCheese
        return goodBagel
    }
```
7. Define data structure 
-  how you organize your data/values 
