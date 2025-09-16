const person = {
    fullname:"abcde",
    age:25,
    Address:"Delhi",
    jobDescription:{
        title:"PE",
        company:"GLA",
        YOE:3
    }
}

person.salary = 200000;


// console.log(person.jobDescription.company); //object chaining

console.log(person["jobDescription"]["YOE"]);
person.degree = "B.tech"

// Object.freeze(person);

let res = Object.hasOwn(person, "salary");

// console.log(res);
// console.log(person)

//loop

// for(let value of person){
//     console.log(value);
// }

for(let key in person){
    console.log(person[key]);
}