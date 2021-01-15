// Directions: Calculate the big O of each function

// Exercise #1: 
let ingredients = ["chicken", "carrots", "celery", "noodles", "lox", "coffee"]

function makeSoup(input) {
    let thingsToPrep = input // O(1)
    let minsItWillTakeToDoEverything = 30  // O(1)

    for (let i = 0; i < thingsToPrep.length; i++) { // O(n)
        prepThisItem()
        minsItWillTakeToDoEverything++
    }

    return minsItWillTakeToDoEverything // O(1)
}

// O(1 + 1 + n + 1) -> O(3 + n) -> 0(n)

makeSoup(ingredients)

//-------------------------------------------

// Exercise #2: 
function doSomethingRandom(input) {
    let firstThing = 20 // O(1)
    let secondThing = "blueberries" // O(1)
    let thirdThing = "peanut butter jelly" // O(1)

    for (let i = 0; i < input; i++) { // O(n^2) // 100
        firstThing++ 
        let items = i + 1 
        for (let j = 0; j < input; j++) { 
            let numberOfFoodAdventure = j + 1 
            let somethingElse = j * 50
            let counting = j * 22
        } 
    } 

    for (let j = 0; j < input; j++) { // O(n)  // 10 
        let numberOfFoodAdventure = j + 1 
        let somethingElse = j * 50
        let counting = j * 22
    } 

    for (let j = 0; j < input; j++) { // O(n) 
        let numberOfFoodAdventure = j + 1 
        let somethingElse = j * 50
        let counting = j * 22
    } 

    for (let j = 0; j < input; j++) { // O(n) 
        let numberOfFoodAdventure = j + 1 
        let somethingElse = j * 50
        let counting = j * 22
    } 

    return "abcdefg" // O(1)
}

// O(1 + 1 + 1 + n + n + 1) => O(4 + 3n + n^2) => O(n^2)
doSomethingRandom(10)

//-------------------------------------------

// Exercise #3: 
function attendParty(partyPeople) {
    let friends = Math.floor(partyPeople.length / 2)
    let bestFriend = partyPeople[0]

    let counter = 0

    for (let i = 0; i < 25; i++) {
        console.log("good food options")
    }

    while (counter < friends) {
        console.log("hi friend")
        counter++ 
    }

    return `hi ${bestFriend}`
}

attendParty(["Monica", "Rachel", "Ross", "Joey", "Chandler", "Phoebe", "Gunther", "Janice", "Ben Geller", "Richard", "The Duck", "The Chick"])
//-------------------------------------------

// Exercise #4: 
function viewMealOptions(foodArr, drinkArr) {

    foodArr.forEach((food) => {
        console.log(food)
    }) 

    for (let j = 0; j < drinkArr; j++) {
        console.log(drinkArr[j])
    } 

}

viewMealOptions(["salad", "pizza", "sushi"], ["soda", "water"]) 
//-------------------------------------------

// Exercise #5: 
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
//-------------------------------------------

// Exercise #6: 
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

findMutualFriends(["lucy", "brian"], ["richard", "katie", "susan", "poppy", "lucy"], ["taylor", "lucy", "poppy"])
//-------------------------------------------