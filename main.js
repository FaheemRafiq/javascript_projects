btn.addEventListener("click", () => {
  let uname = document.querySelector("#username");
  let password = document.querySelector("#password");
  let nlabel = document.querySelector("#name_label");
  let plabel = document.querySelector("#password_label");
  let nMsg = document.querySelector("#name_msg");
  let pMsg = document.querySelector("#password_msg");

  if (uname.value === "") {
    nlabel.style.color = "red";
    nMsg.innerHTML = "<strong>Username</strong> must not be empty.";
    uname.style.borderColor = "red";
  } else {
    nlabel.style.color = "black";
    uname.style.borderColor = "green";
    nMsg.innerHTML = "";
  }
  if (password.value === "") {
    plabel.style.color = "red";
    pMsg.innerHTML = "Please inter your <strong>Password</strong>";
    password.style.borderColor = "red";
  } else {
    plabel.style.color = "black";
    pMsg.innerHTML = "";
    password.style.borderColor = "green";

  }
});

password.addEventListener("keyup", () => {
//   let password = document.querySelector("#password").value;
//   let plabel = document.querySelector("#password_label");
//   let pMsg = document.querySelector("#password_msg");
let six = document.querySelector('#six');
let numeric = document.querySelector('#numeric');
if(password.value.length >= 6){
    six.style.color = "green";
}else{
    six.style.color = "red";
}
var lowerCaseLetters = /[a-z]/g;
if (password.value.match(lowerCaseLetters)) {
    numeric.style.color = "green";
}
else{
    numeric.style.color = "red";
}


});
