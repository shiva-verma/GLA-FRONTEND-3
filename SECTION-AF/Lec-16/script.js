let person = {
    name:"shiv",
    age:25,
    address:"Delhi",
    job:{
        company:"CB",
        title:"Product Engineer",
        YOE:4,
        project:{
            pid:"345678",
            ptitle:"GenAI"
        }
    }
}


// console.log(person.address)
// console.log(person["age"])
// console.log(person.job.project.ptitle) //Object Chaining

//Immutable
Object.freeze(person)

person.salary = 100;

// console.log(person)

//for....of loop is not works with non iterable 
// for(let value of person){
//     console.log(value)
// }


//for....in
for(let key in person){
    console.log(person[key]);
}



