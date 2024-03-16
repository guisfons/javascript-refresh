// An arrow function give us the option to build functions faster

// Instead of creating a function like this:
function userName () {}

// We can create one like this:
(userName, age, gender) => {}

// We can create an arrow function like this:
userName, age, gender => {}

// In addition, if we don't use any parameters, we must use declare the function like this:
() => {}

// Or even, when we are returning a value like this:
number => {
    return number * 3
}

// We can write it like this:
number => number * 3