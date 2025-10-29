//Array methods
//map, filter, reduce, some, find

//map =  It is used to transform an array

// let arr1 = [1,2,3,4,5,6,7];

// function multi(item){
//     return item+3; 
// }

// let result1 = arr1.map(multi);
// console.log(result1);

//filter
// let arr = [1,2,3,4,5,6,7];

// function fil(item){
//     return (item%2 == 0); 
// }

// let result = arr.filter(fil);
// console.log(result);


//reduce

// let arr = [1,2,3,4,5,6,7];

// function myreduce(acc, item){
//     console.log("acc" + " ---> " + acc + "       " + "item" + " ---> " + item)
   
    
//    return acc * item
// }

// let result = arr.reduce(myreduce, 1)
// console.log(result)



let cart = ["mobile", "laptop", "bag","jeans", "guitar"];

function myFind(item, i){
    if(item == "bag"){
        return i;
    }
}

let idx = cart.find(myFind);
console.log(idx);
