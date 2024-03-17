// Instead of creating multiple variables to store information, like this:
const userName = 'Max'
const userAge = 34

// We can create an Object, like this:
const user = {
    name: "Max",
    age: 34
}

// This will return the whole data from the Object:
console.log(user)

// But if we want to access a value of this data,
// we can insert a dot in the end of the Object to access its separated values
console.log(user.name)
console.log(user.age)

// We can create a function inside a Object, without using the "function" before the function name
const user1 = {
    name: "Max",
    age: 34,
    greet() {
        console.log('Hello!')
        console.log(this.age)
    }
}

user1.greet()