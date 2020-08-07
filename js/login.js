var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var loginPageBtn = document.getElementById("btn");

function register () {
  loginForm.style.left="-400px";
  registerForm.style.left="50px";
  loginPageBtn.style.left="110px";
}
function login () {
  loginForm.style.left="50px";
  registerForm.style.left="450px";
  loginPageBtn.style.left="0px";
}
function loginToPage() {
  var empt1 = document.forms["form1"]["user-id"].value;
  var empt2 = document.forms["form1"]["password"].value;
  if((empt1 && empt2) == "")
  {
    document.getElementById("output").innerHTML= ("Input User ID and Password");
    return false;
  }
  else {

    window.location.replace("details.html");

  }
}
function RegisterPage() {
  var empt1 = document.forms["form2"]["fullname"].value;
  var empt2 = document.forms["form2"]["email"].value;
  var empt3 = document.forms["form2"]["user-id"].value;
  var empt4 = document.forms["form2"]["Password1"].value;
  var empt5 = document.forms["form2"]["password2"].value;

  if(empt4!=empt5) {
    document.getElementById("output2").innerHTML=("Passwords do not match");
    return false;
  }

  if((empt1 && empt2 && empt3 && empt4 && empt5) == "")
  {
    document.getElementById("output2").innerHTML= ("Input all the details");
    return false;
  }
  else {

    window.location.replace("details.html");

  }
}
