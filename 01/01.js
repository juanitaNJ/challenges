function filterArray(arr) {

	let filteredArray = [];

    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
console.log(filterArray([1, 5, "wow", "1", 34, "cats", 3]));