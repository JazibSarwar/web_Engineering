colors = ["red","green"]
console.log("Hello");
console.log(colors);
const arr = [1,2,3]
console.log([arr]);

/**Object this is multi line comment 
  **/
//single line comment

//Objects
var obj = {
    name: "jazib",
    age: 17,
    single: true
}
console.log(obj)
if(obj.single == true){
    console.log("Hey Bro you are singleeeeeeeeee.!!!!");
}

let arrayObj = [{id:1, name:"jazib" },{id:2, name:"ddjazib" },{id:2, name:"ddjazib" },{id:1, name:"jazib" },{id:1, name:"jazib" },{id:1, name:"jazib" }];
obj = {

}
for(let i=0;i<arrayObj.length-1;i++){
        const element = arrayObj[i].id;
        if(obj[element])
        {
            obj[element]++
        }
        else {
            obj[element]=1;
        }
}
console.log(obj);


const array = [,1,2,3,4,2,3]
array.forEach(function(item){
    console.log (item)
    return item
})
