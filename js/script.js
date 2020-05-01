const form = document.getElementById('form'); // form

form.addEventListener('submit', (e) =>{
    e.preventDefault();

checkName();
checkLastName();
checkEmail();
checkPassword();

});/* listener */

//errors ids
const name_error = document.getElementById('name-error');
const lname_error = document.getElementById('lname-error');
const email_error = document.getElementById('email-error');
const password_error = document.getElementById('password-error');

//icons ids
const icon1 = document.getElementById('e-icon1');
const icon2 = document.getElementById('e-icon2');
const icon3 = document.getElementById('e-icon3');
const icon4 = document.getElementById('e-icon4');

//set placeholder
const placeholder1 = document.getElementById('first-name');
const placeholder2 = document.getElementById('last-name');
const placeholder3 = document.getElementById('email');
const placeholder4 = document.getElementById('password');





function checkName(name){
    var name = document.getElementById('first-name').value;
    var re = /^[a-zA-Z0-9]+$/;
    if(name == ""){
        name_error.innerHTML = "First Name cannot be empty";
        icon1.style.display = 'block';
        placeholder1.setAttribute('placeholder','');
        
        return false;
    }else if(!re.test(name)){
        name_error.innerHTML = 'Only alphanumeric is allowed';
        icon1.style.display = 'block';
        return false;
        
    }else{
        name_error.innerHTML = "";
        icon1.style.display = 'none';
        return true;
    }
}

function checkLastName(lname){
    var lname = document.getElementById('last-name').value;
    var re = /^[a-zA-Z0-9]+$/;
    if(lname == ""){
        placeholder2.setAttribute('placeholder','');
        lname_error.innerHTML = "Last Name cannot be empty";
        icon2.style.display = 'block';
        return false;
    }else if(!re.test(lname)){
        lname_error.innerHTML = 'Only alphanumeric is allowed';
        icon2.style.display = 'block';

        return false;
        
    }else{
        lname_error.innerHTML = "";
        icon2.style.display = 'none';
        return true;
    }
}

function checkEmail(email){
    var email = document.getElementById('email').value;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email ==""){
        icon3.style.display = 'block';
        email_error.innerHTML = 'Looks like this is not an email';
        placeholder3.setAttribute('placeholder','example@email/com','red');


        return false;
    }else if(!regex.test(email)) {
        icon3.style.display = 'block';
        email_error.innerHTML = 'Looks like this is not an email';
        return false;

    }else {
        icon3.style.display = 'none';
        email_error.innerHTML = '';
        return true;
    }
    

}

function checkPassword(password){
    var password = document.getElementById('password').value;

    if (password == "") {
        placeholder4.setAttribute('placeholder','');
        icon4.style.display = 'block';
        password_error.innerHTML ='Password cannot be empty';
        return false;
        
    }else{
        icon4.style.display = 'none';
        password_error.innerHTML = '';
        return true;
    }


}