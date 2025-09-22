const students = [
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

// ques1. Calculate average of Each subject
for (let i=0;i<students.length;i++){
const {math,english, science} = students[i].scores
const total= math+english+science
const average= total/3
console.log("total :" + `${total}`);
console.log("Average :" + `${average}`);
}

// ques2. Calculate percentage of each student