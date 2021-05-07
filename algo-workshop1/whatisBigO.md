## **What is an Algorithm?**

- a set of instructions/steps to complete a task
- similar to the steps you take to wash your hair or bake banana bread

**An algorithm to wash 🧼 your hair:**

- Developer's worse nightmare:

    ```jsx
    lather()
    rinse()
    repeat()
    ```

- Freedom:

    ```jsx
    while (hair !== clean) {
       lather()
       rinse()
    }
    ```

**An algorithm to bake 🍌 banana bread:**

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

## **What is Big O Notation?**

- How we measure and talk about how long it takes for our program to run

> *"How quickly it grows relative to the input, as the input gets arbitrarily large"*

**Breaking it down:** 

- *How quickly it grows*
    - There are so many different factors that might impact how quickly or slowly a program run. Such as a computer's CPU, how fast the processor is, or what other programs you have running.
    - It's hard to talk about the exact runtime. Instead, we focus more on how quickly the runtime grows.
- *Relative to the input*
    - If we were using time to measure the runtime, we would use seconds, hours, days and etc. as our units of measurements.
    - Since we're measuring our runtime based on how quickly it grows, we use the size of the input, "n."
    - Based on the input, n, how many steps/operations would it take for the program to run
- *As the input gets arbitrarily large*
    - When it comes to big O, we only care about worse case scenarios — the part of the algorithm that will grow significantly in comparison to everything else.

**Let's look at some examples:** 

- Example 1:

    This function runs in `**O(1)` constant time** relative to its input. Regardless of how many items there are in the input array, `groceries`, this function would only require one "step". 

```js
let groceries = ["chocolate", "bananas", "bread"]

function checkoutFirstItem(groceries) {
	console.log(`checking out ${groceries[0]}`)
}
```

- Example 2:

    This function runs in `**O(n)` linear time** relative to the n, which is the number of items in the input array, `groceries`. As we add more items to the `groceries` array, this function will print that much more steps. Right now, the array has 3 items, so it will take 3 operations but if we have 1000 items in the array — it will take 1000 operations. 

```jsx
let groceries = ["chocolate", "bananas", "bread"]

function checkoutAllItems(groceries) {
	for(let i = 0; i < groceries.length; i++) {
		console.log(`checking out ${groceries[i]}`)
	}
}
```

- Example 3:

    This function will take `O(n^2)` quadratic time. If the array has 3 items, the function will print 9 times. If the array has 100 items, it would print 10,000 times. In this case, since we have a nested for loop, our outer loop will run n times, and our inner loop will run n times for each of the outer loop. 

```js
let groceries = ["chocolate", "bananas", "bread"]

function makeFoodPairings(groceries) {
	for(let i = 0; i < groceries.length; i++) {
		for (let j = 0; j < groceries.length; j++) {
			console.log(`${groceries[i]} can be paired with ${groceries[j]}`)
		}
	}
}
```

**How to calculate Big O:** 

1. Drop constants
2. Drop less significant terms
3. Only consider worst case

```js
function plantsRoutine(plants) {
	console.log(plants[0])

	plants.forEach(plant => {
		console.log(`watering ${plant}`)
	})

	plants.forEach(plant => {
		console.log(`feeding ${plant}`)
	})

	for(let i = 0; i < plants.length; i++) {
		for(let j = 0; j < plants.length; j++) {
			console.log(`rotating ${plants[i]} and ${plants[j]}`)
		}
	}

	for (let i = 0; i < 200; i++) {
		console.log("talking to my plants")
	}
}
```

- Calculating Big O

    `O(1 + n + n^2 + n + 100)` ⇒ `O(1 + 2n + n^2 + 100)` ⇒ `O(1 + n + n^2 + 100)` ⇒ `O(n + n^2)` ⇒ `O(n^2)`

**Conclusion** 

- There's also space complexity