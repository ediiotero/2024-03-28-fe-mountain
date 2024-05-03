// const city = prompt('What city are you in?')
// const firstName = prompt("What is your first name?");

// const isHungry = confirm("Are you hungry?");

// alert(firstName + " hungry? " + isHungry);

// console.log(isHungry);

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// const age = prompt('What is your age?')

// if(age >= 15 && age <= 18) {
//     alert('you can learn to drive')
// } else if (age > 18) {
//     alert('you can take you driving test')
// } else {
//     alert('you can\'t drive')
// }

// switch(true) {
//     case age >= 15 && age <= 18:
//         alert('you can learn to drive')
//         break;
//     case age > 18:
//         alert('you can take you driving test')
//         break;
//     default:
//         alert('you can\'t drive')
// }

// const grade = prompt('Enter a grade')
// console.log(grade.toUpperCase())
// switch(grade.toUpperCase()) {
//     case 'A':
//         alert('Score of 90-100')
//         break;
//     case 'B':
//         alert('Score of 80-89')
//         break;
//     case 'c':
//         alert('Score of 70-79')
//         break;
//     case 'D':
//         alert('Score of 60-69')
//         break;
//     default:
//         alert('Score of under 60')
// }


// const question = confirm('Would you like to start?')
// const list = []

// while(question === true && list.length < 3) {
//     if(list.length === 0) {
//         alert('starting the app')
//     }
//     const colorQuestion = prompt('Give me a color')
//     list.push(colorQuestion)

//     if(list.length === 3){
//         console.log(list)
//     }
// }


// let count = 0

// while(count <= 5) {
//     count++
//     console.log('this count is at ' + count)
// }

// do{
//     count++
//     console.log(count)
// } while(count <= 5)



// write a loop that will console.log even numbers 1-10

for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}