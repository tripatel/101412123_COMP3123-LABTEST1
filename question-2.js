// Function to return a resolved promise
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('message : delayed success!' );
        }, 500);
    });
}

// Function to return a rejected promise
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("error : delayed expectation!");
        }, 500);
    });
}

// Handling the resolved promise
resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));

// Handling the rejected promise
rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));
