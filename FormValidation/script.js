var check =true;

function int(){
    var data = document.getElementById("form");
    
    validFirstName(data.firstname.value);
    validLastName(data.lastname.value);
    validPassword(data.password.value);
    validCmPassword(data.password.value,data.cmpassword.value);
}

function validFirstName(field){
    if(field==""){
        
        check =false;
        return document.getElementById("er1").innerHTML="First Name Mustbe Entered";
    }
    else if(/[^a-zA-Z- .]/.test(field)){
        
        check =false;
        return document.getElementById("er1").innerHTML="Invaild Name,Only Alphabets Are Allowed In First Name.";
    }
}
function validLastName(field){
    if(field==""){
        
        check =false;
        return document.getElementById("er2").innerHTML="Last Name Mustbe Entered";
    }
    else if(/[^a-zA-Z- .]/.test(field)){
        
        check =false;
        return document.getElementById("er2").innerHTML="Invaild Name,Only Alphabets Are Allowed In Last Name.";
    }
}

function validPassword(field){
    if(field==""){
        check = false;
        return document.getElementById("er3").innerHTML="No Password was Entered"
    }else if(field.length<6){
        check = flase;
        return document.getElementById("er3").innerHTML="Password Must be at Least 6 character";
    }
    else if(!/[a-z]/.test(field) ||!/[A-Z]/.test(field)||!/[0-9]/.test(field)){
        
        check = false;
        return document.getElementById("er3").innerHTML="password Require one each of a-z,A-Z,0-9";
    }
}

function validCmPassword(field){
    
    if(field1 !=field2){
        check = false;
        return document.getElementById("er4").innerHTML="Password Not Matched"
    }
}


