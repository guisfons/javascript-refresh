const hobbies = ["Sports", "Cooking"]
const user = {
    name: "Guilherme",
    age: 23
}

const newHobbies = ["Coding"]

const mergedHobbies = [...hobbies, ...newHobbies]

console.log(mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser);