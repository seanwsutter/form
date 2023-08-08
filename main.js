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

  
let username = id("username"), 
  email = id("email"),
  password = id("password");

