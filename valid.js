	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);



function validated(){
    var mail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
	if (!email.value.match(mail)) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	const newLocal = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@^+=])(.{2,15})$/;
	var decimal=  newLocal;
	if(!password.value.match("Smartserv@123")) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		alert("Incorrect Password")
		return false;
	}

}
function email_Verify(){
	var mail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
	if (email.value.match(mail)) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	const newLocal_1 = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@+=])(.{2,15})$/;
	const newLocal =newLocal_1;
	var decimal=  newLocal;
	if(password.value.match("Smartserv@123")) 
	{ 
		password.style.border = "1px solid silver";
		pass_error.style.display = "nonez";
		return true;
	}

}


