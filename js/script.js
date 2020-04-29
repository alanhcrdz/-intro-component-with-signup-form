
function checkForm(){
    //span id
    var error_name = document.getElementById('name-error');
    var error_lname = document.getElementById('lname-error');
    var error_email = document.getElementById('email-error');
    var error_password = document.getElementById('password-error');
    
    //input id
    var input_name = document.getElementById('first-name');
    var input_last_name = document.getElementById('last-name');
    var input_email = document.getElementById('email');
    var input_password = document.getElementById('password');
    
    //icon id
    var icon1 = document.getElementById('e-icon1');
    var icon2 = document.getElementById('e-icon2');
    var icon3 = document.getElementById('e-icon3');
    var icon4 = document.getElementById('e-icon4');
    
    
    //characters regex
    var name_re = /^[a-z-A-Z-0-9]+$/;
    
    
    //check if field empty
    if (form.inputfield.value == "") {
     
    
        //displays error small
       error_name.style.display = 'block';
       error_lname.style.display = 'block';
       error_email.style.display = 'block';
       error_password.style.display = 'block';
    
       //display icons
       icon1.style.display = 'block';
       icon2.style.display = 'block';
       icon3.style.display = 'block';
       icon4.style.display = 'block';
    
    
    
        // display  border in inputs
       input_name.style.border = '2px solid hsl(0, 100%, 74%)';
       input_last_name.style.border = '2px solid hsl(0, 100%, 74%)';
       input_email.style.border = '2px solid hsl(0, 100%, 74%)';
       input_password.style.border = '2px solid hsl(0, 100%, 74%)';
    
    
            //hide placeholders
       input_name.setAttribute('placeholder','');
       input_last_name.setAttribute('placeholder','');
       input_email.setAttribute('placeholder','email@example.com');
       input_password.setAttribute('placeholder','');
           return false;
        
    }else if(!name_re.test(form.inputfield.value)){
        return false;

    }

//validate email
    var email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      

if (!email_re.test(email)) {
    error_email.style.display = 'block';

    return false;
    
    }

        return true;

    

    
    
    }
    