const form = document.querySelector("form"),
nameField = form.querySelector(".join__username"),
nameInput = nameField.querySelector("input"),
idField = form.querySelector(".join__id"),
idInput = idField.querySelector("input");
passwordField = form.querySelector(".join__password"),
passwordInput = passwordField.querySelector("input"),
confirmField = form.querySelector(".join__confirm"),
confirmInput = confirmField.querySelector("input");

form.onsubmit = ()=>{
    if(nameInput.value == ""){
        nameField.classList.add("error");
        return false;
    }
    if(idInput.value == ""){
        idField.classList.add("error");
        return false;
    }
    if(passwordInput.value == ""){
        passwordField.classList.add("error");
        return false;
    }
    if(confirmInput.value == ""){
        confirmField.classList.add("error");
        return false;
    }
    // if(checkPassword() == 1){
    //     return false;
    // }else{
    //     return true;
    // }
}

nameInput.onkeyup = ()=>{
    if(nameInput.value != ""){
        nameField.classList.remove("error");
    }
}

idInput.onkeyup = ()=>{
    if(idInput.value != ""){
        idField.classList.remove("error");
    }
}

passwordInput.onkeyup = ()=>{
    if(passwordInput.value != ""){
        passwordField.classList.remove("error");
    }
}

confirmInput.onkeyup = ()=>{
    if(confirmInput.value != ""){
        confirmField.classList.remove("error");
    }
    // if(confirmInput != passwordInput){
    //     confirmField.classList.add("password");
    // }else{
    //     confirmField.classList.remove("password");
    // }
}

// function checkPassword(){
//     if(passwordInput != confirmInput){
//         confirmField.classList.add("password");
//         return 1;
//     }else{
//         confirmField.classList.remove("password");
//         return 0;
//     }
// }
