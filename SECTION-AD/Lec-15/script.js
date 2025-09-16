const person = {
    name:"abcd",
    age:24,
    address:"Delhi",
    job: {
        jid : "23455",
        title: "SDE",
        YOE: 3
    }
}

Object.freeze(person)

person.salary = 40000000

// console.log(person.job.title)
// console.log(person["job"]["title"])
// console.log(person)

// Object.hasOwn(person, "age")

// for(let key in person){
//     console.log(person[key]);
// }

for(let value of person){
    console.log(person[key]);
}

