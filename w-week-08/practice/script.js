const obj ={
     name:"Jazib",
     age:20,
     gender:"male",
     code:"+92"
}

//const newObj =obj
const newObj = {...obj};
obj.name ="updated"
console.log(newObj)
console.log(obj)
const array = [1,2,3,4,5,6,23,3,32,2,2]
const[a,b,c,...bakayaA]=array
console.log(a,b,c)
console.log(bakayaA)

const newArray = [...array]
const{...objA}=obj
//console.log(age)
 const{name,age,...bakaya}=obj;
 console.log(name,age)
 console.log(bakaya)



console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 5000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');



function getData() {
    //const con = Math.random(); 
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
   // if(con<=0.5){
   // resolve(data);
//}
    //if(con>0.5){
   reject({message:"there is a problem"})
//}
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
     getData()
   
    .then(data => {
    console.log('Data received:', data);

    })
    .catch(error => {
    console.error('Error:', error.message);
    });
