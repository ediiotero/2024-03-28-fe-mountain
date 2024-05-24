// Callbacks


const myCalculator = (num1, num2, cb) => {
    const sum = num1 + num2;
    cb(sum)
}
const display = item => console.log(item)

myCalculator(5, 9, display)

// Promise
// more here: https://www.w3schools.com/js/js_promise.asp

const myDisplay = item => console.log(item)

const myPromise = new Promise((resolve, reject) => {
    const x = 0;

    if(x === 0){
        resolve('Ok')
    } else {
        reject('Error')
    }
})

myPromise.then(value => myDisplay(value)).catch(value => myDisplay(value))


// ========================

// Fetch Api 

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => console.log(json))