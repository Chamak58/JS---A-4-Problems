

function  waitingTime(waitingTimes  , serialNumber) {

    // if(Array.isArray !== waitingTimes && typeof(serialNumber) !== 'number'){
    //     return "Invalid Input";
    // }

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    const numbers = waitingTimes.length;
    //return numbers;
    let sum = 0;
    for(let item of waitingTimes){
        if(typeof item === 'number'){
            
        }

        sum = sum + item;
        item++;
        console.log(sum);
    }
    const avg = parseInt(sum / numbers);
    console.log(avg);

    const remainingCandidates = serialNumber - 1 - numbers;
    console.log(remainingCandidates);

    const result = avg * remainingCandidates;
    return result;


}


console.log(waitingTime([6], 4))

//console.log(items);
