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

// ========== Promises ==========
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


// ========== Chaining Promises ==========
// MOST Minimal code approach
fetchPromise // Make intiial async request from fetch call
    .then(res => res.json()) // convert response to json using .json() (promise is returned)
    .then(json => console.log(json[0].name)); // take retured json object and log first items name

// ========== Handling multiple promises at once ==========
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2]) //Fetch all requests and return each requests response 
  .then( responses => { // Pass responses object
    // console.log(typeof responses);
    for (const response of responses) { // Loop over response object and seperate logs for each request
      console.log(`${response.url}: ${response.status}`); // Log response url and status code
    }
  })
  .catch( error => { // Error handler if any initial fetch fails
    console.error(`Failed to fetch: ${error}`)
  });


// ========== Async Await ==========
// The async keyword gives you a simpler way to work with asynchronous promise-based code. Adding async 
// at the start of a function makes it an async function. Async and await keywords tend to pair well with other keywords
// try and catch exceptions.
const productsFetch = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

async function fetchProducts(){
    try{
        const res = await productsFetch;
        const json = await res.json();
        return json;
    }catch(err){
        console.error('Could not get products: ', err);
    };
};

const jsonPromise = fetchProducts();
jsonPromise.then( jsonItem => console.log('jsonItem: ', jsonItem[0].name))