// Async JS and Promises practice
// Asynchronous programming is a technique that enables your program to start a potentially long-running task,
// and then rather than having to wait until that task has finished, to be able to continue to be responsive to 
// other events while the task runs. Once the task is completed, your program is presented with the result.

// Synchronous programs go through your code one line at a time

// Default Async Methods
// fetch(), getUserMedia(), showOpenFilePicker()

// We look to fix synchronous programs by:
// - start a long-running operation by calling a function
// - have the function start the operation and return right away, so our program can still be responsive to other events
// - be notified with the result of the operation, when it eventually completes.

// Promises
// Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned 
// by an asynchronous function, which represents the current state of the operation. At the time the promise is 
// returned to the caller, the operation often isn't finished, but the promise object provides methods to handle 
// the eventual success or failure of the operation.

import fetch from 'node-fetch';
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// Step 1
console.log(fetchPromise); // This shows incomplete promise return object "Promise { <pending> }" in logs FIRST 

// Step 3
fetchPromise.then( res => {
    console.log("Response status: ", res.status); // This shows finished operation in logs THIRD
});

// Step 2
console.log("Started request..."); // This shows fetch is being initiated in logs SECOND

