const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = 'Bob';
myVariable = 'Steve';
//this is a comment.
/*
This is also a comment.
*/
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('yes dude')
} else {
    alert('what the hell is this shit?')
}
document.querySelector('html').onclick = function() {
    alert('Hey!')
}