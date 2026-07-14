import { firebaseConfig } from "./firebase-config.js";


import { initializeApp } 
from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getAuth,

createUserWithEmailAndPassword,

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);



window.signup=function(){


let email=document.getElementById("email").value;

let password=document.getElementById("password").value;



createUserWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{

message.innerHTML="Account Created!";

})


.catch(e=>{

message.innerHTML=e.message;

});


}




window.login=function(){


let email=document.getElementById("email").value;

let password=document.getElementById("password").value;



signInWithEmailAndPassword(

auth,

email,

password

)

.then(()=>{


window.location="dashboard.html";


})


.catch(e=>{


message.innerHTML=e.message;


});


}
