const userNameData = ['Guilherme', 'Fonseca']
// Without creating two consts like below:
// const firstName = userNameData[0]
// const lastName = userNameData[1]

// We can destructur the array like this:
const [firstName, lastName] = ['Guilherme', 'Fonseca']
console.log(firstName, lastName);