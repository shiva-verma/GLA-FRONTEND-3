const person = {
    fullname:"abcde",
    age:25,
    Address:"Delhi",
    jobDesc:{
        title:"PE",
        company:"GLA",
        YOE:4
    }
}
person.jobDesc.salary = 5000000;

console.log(person);

console.log(person["fullname"])
console.log(person.fullname)
console.log(person.jobDesc.title)
console.log(person["jobDesc"]["title"])

Object.freeze(person);
person.status = "single"

console.log(person)

let res = Object.hasOwn(person, "Addressing")
console.log(res);

//loop

// for...of ----> Values X X X X
// for(let value of person){
//     console.log(value)
// }

// for....in -----> Index, Keys
for(let key in person.jobDesc){
    console.log(person["jobDesc"][key]);
}


//------------------------------------------------------------------//
const student = [
    {
        name:"Alice",
        scores:{
            math:90,
            english:80,
            science:70
        }
    },
     {
        name:"Bob",
        scores:{
            math:60,
            english:75,
            science:85
        }
    },
     {
        name:"Charlie",
        scores:{
            math:100,
            english:95,
            science:70
        }
    }
]

