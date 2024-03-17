const hobbies = ["Sports", "Cooking", "Reading"]
console.log(hobbies[0]);

// Add new item to the array "Hobbies"
hobbies.push('Working')
console.log(hobbies);

// Search the index of the content in array
const index = hobbies.findIndex(item => item === 'Sports')
console.log(index);

// the "map" will not change the original array, but will creat a new one like: 
const editedHobbies = hobbies.map(item => ({text: item}))
console.log(editedHobbies);

function transformToObjects(numberArray) {
    return numberArray.map(item => ({val: item}))
}

console.log(transformToObjects([1, 2, 3]));