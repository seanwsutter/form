/* example
let a;
let b;
let c;

let a,b,c;

let username = document.getElementById("username"); 
let email = document.getElementById("email");
let password = document.getElementById("password");

let username = document.getElementById("username"), 
  email = document.getElementById("email"),
  password = document.getElementById("password");

  create small arrow function to stop code repitition
function named id with argument id 2x

let id = (id) => {
  document.getElementById(id)
}

Must write return word when using arrow function ()=>{}, Unless you write it on a single line
*/
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// issue - 3 div classes with same name 'error', use getElementsByClassName
// statement will select all divs with class name 'error' and store them in array
// errorMsg = ['error', 'error', 'error']; // ['0(username)', '1(email)', '2(password)'],  
// example, select email, errorMsg[1].innerHTML = "wrong email"

let username = id("username"), 
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
  // added submit event listener to form (clicking submit will run function)
  
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") { // trim() will remove extra spaces in text input fields 
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};


  