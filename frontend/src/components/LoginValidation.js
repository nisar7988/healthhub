function validation(values) {
 let error = {}
 const regxpassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
 if(values.name === ""){
    error.name = "Name should not be empty";
 } 
 else if(values.name.length < 3 && values.name.length >0){
    error.name = "Name should more than 3 characrter long";
 }
 else{
    error.email = "";
 }

 if(values.password === ""){
    error.password = "Password should be empty";
 }
 else if(!regxpassword.test(values.password)){
   error.password = "Password didn't match";
 }
 else{
    error.password = ""
 }
 return error;
}

export default validation;