// Discussion Questions: 
// 1. What is an array? How would I write one in JS? 
// it's object, it's list, its index-based keys, it has an order 

let favoriteFoods = [ "lox", "ice cream cake", "spaghetti", "kiwis",  "chicken"]
                        0           1              2           3       4

// 2. What are some common operations we can do with an array? 
favoriteFoods.pop() // O(1) --- Delete O(1)
favoriteFoods.unshift() // O(n) --- Delete O(n)
favoriteFoods.shift("lox") // O(n) --- Insert O(n)
favoriteFoods[2] // O(1) -- Access O(1)
// search -- O(n)
// 3. What do you think their runtimes would be? 
// 4. What do you think the pros/cons of arrays would be? 
// -- slow at searching, deleting, inserting 
// -- it's really quick at pulling out values
