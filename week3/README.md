## SWBATs
- [ ] Define 'data structure' 
- [ ] Stand their ground in front of Big O terminology 
- [ ] Identify code that runs in constant, linear, and quadratic time 
- [ ] Understand and use arrays
- [ ] Understand and use hash tables/ hashmaps

## Discussion Question
1. Define algorithm? 
2. What is Big O? 
3. What is constant time? 
4. What is linear time? 
5. What is quadratic time? 
6. What is the runtime of the following programs? Why?

#1 
```js
    function findLox(arr) {
        for ( let i = 0; i < arr.length; i++ ) {
            if (arr[i] === "lox") {
                return "found it!"
            }
        }
    }
```
#2
```js
    function findMutualFriends(helenFriends, tomFriends, adaFriends) {

        helenFriends.forEach((helenFriend) => {
            tomFriends.forEach((tomFriend) => {
                if (helenFriend === tomFriend) {
                    console.log(`wow, we both know ${helenFriend}!`)
                }
            })
        })

        for (let i = 0; i < adaFriends.length; i++) {
            console.log("i have friends too!")
        }
        
    }
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