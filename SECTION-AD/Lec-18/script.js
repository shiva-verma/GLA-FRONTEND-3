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

function calculateAvg(students){
    const res = {
        math:0,
        science:0,
        english:0
    }

    for(let value of students){
        res.english += value.scores.english;
        res.math += value.scores.math;
        res.science += value.scores.science;
    }
    return res;
}

let result = calculateAvg(students)
console.log("English" + " ----> " + result.english/3);
console.log("Math" + " ----> " + result.math/3);
console.log("Science" + " ----> " + result.science/3);


function calculatePercentage(students){
    let percentage = {
        Alice:0,
        Bob:0,
        Charlie:0
    }
    for(let value of students){
        let getScore = value.scores.english + value.scores.math + value.scores.science;

        let per = (getScore/300)*100;
        percentage[value.name] = per;
    }
    return percentage;
}

let res = calculatePercentage(students);
console.log(res);
