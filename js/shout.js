const stringToShout = prompt ("what do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>The Message to shout is: ${shout}!!</h2>`;

//console.log(shoutMessage);
document.querySelector('main').innerHTML = shoutMessage; //what let us interect with the browser

