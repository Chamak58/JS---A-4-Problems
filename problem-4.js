

function calculateFinalScore(obj) {

    if(typeof obj !== "object"){
        return "Invalid Input"
    }

    let totalScore = obj.testScore + obj.schoolGrade;

    //return totalScore;


    if(obj.isFFamily === true){
        totalScore = totalScore + 20;
        console.log(totalScore);
    }


    if(totalScore >= 80){
        return true;
    }
    else {
        return false;
    }

}

// const applicant = {
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,

// }

const applicant = "hello";


console.log(calculateFinalScore(applicant));