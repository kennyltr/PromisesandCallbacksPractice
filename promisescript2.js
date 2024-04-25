//Creating first promise script
let FirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Success")
    }, 6000)
})

//Creating second promise script
let SecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second Success")
    }, 3000)
})

//Console log before calling first promise
console.log('Before first promise');

//Calling first promise
FirstPromise.then((successMessage) => {
    console.log("First promise callback " + successMessage)
})

//Console log between calling first promise and second promise
console.log('Before second promise');

//Calling second promise
SecondPromise.then((successMessage) => {
    console.log("Second promise callback " + successMessage)
})

//Console log after calling first promise and second promise
console.log('Called both promises');