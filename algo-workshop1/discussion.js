// Initial Questions: 

























// 1. What are interviewers looking for during a technical interview? 
// 2. What does it mean to write good code? 
// 3. What is an algorithm? 
// 4. How would you measure how fast/slow this function runs? 
let groceries = ["chocolate", "bananas", "bread"]

function checkoutFirstItem(groceries) {
	console.log(`checking out ${groceries[0]}`)
}



















// 5. What is the runtime of the following functions? 

// a)
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

// b)
function doSomethingRandom(input) {
    let firstThing = 20
    let secondThing = "blueberries"
    let thirdThing = "peanut butter jelly"

    for (let i = 0; i < input; i++) {
        firstThing++ 
        let items = i + 1
    } 

    for (let j = 0; j < input; j++) {
        let numberOfFoodAdventure = j + 1 
        let somethingElse = j * 50
        let counting = j * 22
    } 

    return "abcdefg"
}

doSomethingRandom(10)

// c) 
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