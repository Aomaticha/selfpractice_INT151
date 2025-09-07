//03.09.2025
//prompt 1 Write a function addProperty(obj, key, value) that adds a new  property to an object and returns the updated object
function addProperty(obj,key,value){
    obj[key] = value;
    return obj;
}
console.log(addProperty({},'city','bangkok'))

//prompt 2 Write a function mergeObject(obj1, obj2) and return merges two objects
function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(mergeObject({name:'aom',age:25},{city:'bangkok'}))

//prompt 3 Write a function convertToUppercase(arr) that takes an array of strings and returns a new array with all strings converted to uppercase.
function convertToUppercase(arr){
    return arr.map(a => a.toUpperCase());
}
console.log(convertToUppercase(['hello','world']))



//04.09.2025
//prompt 1 Write a function findMax(arr) that takes an array of numbers and returns the maximum value using the reduce method
function findMax(arr){
    let max = arr[0];
    for(let ar of arr){
        if(ar > max){
            max = ar;
        }
    }
     return max;
}
console.log(findMax([1,2,3,4,5]));



//05.09.2025
//prompt 1 Write a function doubleAndFilterEvenNumbers(arr) that takes an array of numbers, filter out odd numbers and returns a new array with doubled numbers
function donbleAndFilterNumber(arr){
    return arr.filter((a) => a % 2 === 0).map((ar) => ar * 2);
}
console.log(donbleAndFilterNumber([1,2,3,4]));



//06.09.2025
//prompt 1 Write a function EvenNumbers(arr) that takes an array of numbers and returns a new array with only the even numbers
function EvenNumber(arr){
    return arr.filter((a) => a % 2 === 0);
    
}
console.log(EvenNumber([1,2,3,4]))

//prompt 2 Write a function populateArray(length, value) that creates an array of given length and fills it with the specified value
function populateArray(length,value){
    return Array(length).fill(value)
}
console.log(populateArray(8,'a'))
