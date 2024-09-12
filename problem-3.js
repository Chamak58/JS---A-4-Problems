function checkDigitsInName(name){

   if (typeof name !== "string"){
    return  "Invalid Input";
   }

   for(let n = 0; n < name.length; n++){
        if (!isNaN(name[n])){
        return true;
        }
          
   }
   
    return false; 
}

const output = checkDigitsInName(["Raj"]);
console.log(output);

// let input = 'Raj123';
// let num = parseInt(input);
// console.log(num);

// const call = 'fahim5645';
// console.log(call.length);
// for(let i = 0; i < call.length; i++){
//     console.log(i);
// }