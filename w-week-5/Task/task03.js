function applyFunction(array, func) {
    
    const result = array.map(func);
    return result;
}


const numbers = [1, 2, 3];
const doubleFunc = (x) => x * 2;
const result = applyFunction(numbers, doubleFunc);
console.log(result); 
