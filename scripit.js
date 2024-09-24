//Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
let array1 = [1, 2, 3, 4, 5]
let array2 = [2, 4, 6, 7, 8]

function myfunction(arr1, arr2) {
    return arr1.filter(Element => !arr2.includes(Element))
}

let c = myfunction(array1, array2)
console.log(c)

//Return the number of vowels in a string
function tofunction(str) {
    let d = ['a', 'e', 'i', 'o', 'u']
    return str.toLowerCase().split('').filter(char => d.includes(char)).length;
}
let e = "Muhammad Mubashir Sarfraz"
let f = tofunction(e)
console.log(f)