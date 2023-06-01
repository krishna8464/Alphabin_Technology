let regis = document.getElementById("regis").style.display="none";

let log = document.querySelector(".login").addEventListener("click",()=>{
    document.getElementById("regis").style.display="inline";
    document.getElementById("log").style.display= "none";
})

document.querySelector(".signup").addEventListener("click",()=>{
    document.getElementById("regis").style.display="none";
    document.getElementById("log").style.display= "inline";
})


const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit',async function(event) {
  event.preventDefault(); // Prevent form submission
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let data = {username:name,email,password}

  // Validate form values
  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields');
  } else {
    // Perform registration logic here
    let res = await fetch("https://alphabin-technology-backend.onrender.com/register",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if(res.ok){
        console.log("done");
        alert('Registration successful');
    }else{
        alert("User already Registrated Please Login")
    }
    registrationForm.reset(); // Clear form fields
  }
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit',async function(event) {
  event.preventDefault(); // Prevent form submission
  // Get form values
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  let value = document.getElementById("showit");
  value.innerText="...Please wait"
  let data = {email,password}

  // Validate form values
  if (email.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields');
  } else {

    // Perform registration logic here
    let res = await fetch("https://alphabin-technology-backend.onrender.com/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    if(res.ok){
        let out = await res.json();
        sessionStorage.setItem("Access_Token",out.Access_Token);
        sessionStorage.setItem("email",out.email);
        sessionStorage.setItem("username",out.username);
        alert("Login Successfull")
        window.location.href="forstcast.html"
    }else{
        alert("Wrong Crendiansials")
    }
    registrationForm.reset(); // Clear form fields
  }
});