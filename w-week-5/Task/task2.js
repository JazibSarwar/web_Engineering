/**Create an object named car with properties brand, model, and year. 
Write a function calledcarInfo that takes the car object as input and 
returns a string with the car's information. For
example, if car has the values 
{ brand: 'Toyota', model: 'Camry', year: 2022 }, the functionshould return
 'The Toyota Camry was manufactured in 2022.'. **/
let car = {
    brand: "Suzuki",
    model: "Alto",
    year: 2023
};

function carInfo(obj) {
    let info = "The " + obj.brand + " " + obj.model + " was manufactured in " + obj.year + ".";
    return info;
}

console.log(carInfo(car));
