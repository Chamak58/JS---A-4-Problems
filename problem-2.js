
function sendNotification(email){

    if(!email.includes('@')){
        return "Invalid Email"
    }
    const array = email.split('@');
    //console.log(array);
    const userName = array[0];
    const domainName = array[1];
    return userName + ' ' +  'sent you an email from'+ ' ' + domainName;
    //console.log(userName);
    //console.log(domainName);
    //return 'sent you an email from';  
} 

const output = sendNotification('farhan34@yahoo.com');
console.log(output);

// function sendNotification(email){
//     const seperatedName = (email.split('@'));
//     const userName = seperatedName.indexOf('@');
//     console.log(userName);
//     // console.log(domainName);
//     // return 'userName'
//     //const email = 'userName'+'@'+'domainName';
//     //const[userName, domainName] = (email.split('@'));
    
// }
// const output = sendNotification('zihad@gmail.com')
// console.log(output);