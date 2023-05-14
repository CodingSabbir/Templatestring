const firstName='Sabbir';
const lastName='Rahman';
const age=20;
const subject='cse';


// function sayBio(){
//     return`My Name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} I am a department ${age-1} I am a ${subject}` 
// }
// console.log(sayBio());

const html=`
<h1>Bio Data</h1>
<p>My Name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} I am a ${age-1} I am a  department ${subject}</p>`;

document.body.innerHTML=html