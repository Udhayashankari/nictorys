const form=document.getElementById("myform");
const message=document.getElementById("message");

myform.addEventListener("Submit",function(event){
    event.preventDefault();


const Name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phonenumber=document.getElementById("number").value.trim();
const password=document.getElementById("password").value.trim();
const confirmpassword=document.getElementById("confirmpassword").value.trim();

if(Name===""){
    message.style.color="red";
    message.textcontent="Name is required";
    return;
}

if(!email.includes("@")||!email.includes(".")){
    message.style.color="red";
    message.textcontent="Enter a Valid Email";
    return;
}
if(phonenumber.length(10)){
    message.style.color="red";
    message.textcontent="number must be 10 characters";
    return;
}
if(password.length(6)){
    message.style.color="red";
    message.textContent="password must be 6 characters";
    return;
}
if(confirmpassword==password){
    message.style.color="red";
    message.textcontent="password incorrect";
    return;
};

const userData={
    name: Name,
    email: email,
    number: phonenumber,
    password: password,
    confirmpassword: confirmpassword  
};

localStorage.setItem("user", JSON.stringify(userData))
message.style.color="green";
message.textcontent="Registration Successful!"
form.reset();
}

)