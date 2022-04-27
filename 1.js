const allPeaksFinder = (arr) => {
    let arrLen = arr.length;
    let peaksArray = [];

    for(let i = 0; i < arrLen; i++) {
        if(arr[i] == arr[0] && arr[i] >= arr[i + 1]) peaksArray.push(arr[i])
        if(arr[i] == arr[arr.length-1] && arr[i] >= arr[i - 1]) peaksArray.push(arr[i])
        if(arr[i] >= arr[i + 1] && arr[i] >- arr[i - 1]) peaksArray.push(arr[i]);
    };

    return peaksArray;
};

console.log(allPeaksFinder([19,1,3,2,5,7,2,9,10,8,25])); // peaksArray ==> [19, 3, 7, 10, 25]

// Divide and conquer
const firstPeak = (arr) => {
    if(arr[arr.length/2] < arr[(arr.length/2) + 1]) arr = arr.slice(arr.length/2, arr.length-1);
    if(arr[arr.length/2] < arr[(arr.length/2) - 1]) arr = arr.slice(arr[0], arr.length/2);
    else return arr[arr.length/2];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]>= arr[i + 1] && arr[i] >= arr[i - 1]) return arr[i];
    };
};

console.log(firstPeak([1,2,6,11,2,1,2,4,1,2]));