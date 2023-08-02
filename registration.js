// function All(){
//     if(UName() && FName() && Email() && Pw() && Address()){
//         alert("Registration Success!");
//         return true;
//     }
//     return false;
// }

function All(){
    if(UName() && FName() && Email() && Pw() && Address()){
     confirm("are you sure want to register?");
     alert ("Registration Success!");
    return true;
    }
    return false;
}

function UName(){
    var Uname = document.getElementById("username").value;
    if(Uname == ""){
        alert("Please fill your username");
        return false;
    }
    else if(Uname.length > 15){
        alert("Username's length must not exceeds 15 characters");
        return false;
    }
    for(var i = 0; i < Uname.length; i++){
        if(!(Uname[i] >= 'A' && Uname[i] <= 'Z') && !(Uname[i] >= 'a' && Uname[i] <= 'z') && !(Uname[i] >= '0' && Uname[i] <='9')){
            alert("Username must not contain special characters");
            return false;
        }
    }
    return true;
}

function FName(){
    var name = document.getElementById("fullname").value;
    if(name == ""){
        alert("Please fill your Full Name");
        return false;
    }
    for(var i = 0; i < name.length; i++){
        if(!(name[i] >= 'A' && name[i] <= 'Z') && !(name[i] >= 'a' && name[i] <= 'z') && !(name[i] == " ")){
            alert("Full Name must not contain numbers or special characters");
            return false;
        }
    }
    return true;
}

function Email(){
    var email = document.getElementById("email").value;
    if(email == ""){
        alert("Please fill your Email");
        return false;
    }
    var len = email.length - 1;
    var amulet = email.indexOf("@");
    var dot = email.indexOf(".");
    if(amulet == -1){
        alert("Missing '@' for Email format");
        return false;
    }
    else if(email[0] == "@" || email[len] == "@" || email[0] == "." || email[len] == "."){
        alert("Email must not starts or ends with '@' or '.'");
        return false;
    }
    else if(email.indexOf("@", amulet + 1) != -1){
        alert("Email must contain only a single '@'");
        return false;
    }
    else if(amulet + 1 == dot || amulet - 1 == dot){
        alert("'@' and '.' must not be adjacent");
        return false;
    }
    else if(!email.endsWith(".com") && !email.endsWith(".id")){
        alert("Missing Email's domain");
        return false;
    }
    return true;
}

function Pw(){
    var pw = document.getElementById("password").value;
    if(pw == ""){
        alert("Please fill your password");
        return false;
    }
    else if(pw.length < 8){
        alert("Password's length must not less than 8 characters");
        return false;
    }
    return true;
}

function Address(){
    var adr = document.getElementById("address").value;
    if(adr == ""){
        alert("Please fill your address");
        return false;
    }
    return true;
}



