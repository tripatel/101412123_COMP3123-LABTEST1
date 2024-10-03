function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input is not an array");
        } else {
            const filteredArray = arr.filter(item => typeof item === 'string')
                                     .map(item => item.toLowerCase());
            resolve(filteredArray);
        }
    });
}

// Example usage
const mixedArray = ["PIZZA", 10 , true , 25, "WINGS"];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
