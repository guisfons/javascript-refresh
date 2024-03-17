// With a class we can create a blueprint and add the Object later
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return 'Hi'
    }
}


const user = new User('Guilherme', 23)
console.log(user);
// console.log(user.greet())