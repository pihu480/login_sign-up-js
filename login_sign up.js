var fs = require('fs');
console.log("**** WELOCOMEto Login and sign up page ***")

let readlineSync = require("readline-sync");
var user=readlineSync.question("If you want to Login or sign up :-")
if (user=="sign up"){
    var user_name=readlineSync.question("enter the user name :-")
    var password1=readlineSync.question("enter the password :-")
    var password2=readlineSync.question("enter the confirm password :-")
    if (password1==password2){
        console.log("Both password are a same")
        if (password1.includes('@') || password1.includes("#") ){
            console.log("password is special charcter")
            if (password1==password2){
                var description=readlineSync.question("enter the description :- ")
                var Birth_date=readlineSync.question("enter the birth date :-")
                var Hobbies=readlineSync.question("enter the Hobbies :-")
                var Gender=readlineSync.question("enter the gender :-")
                console.log("congrates",user_name,"your are signed up successfully")
                user_details={user:{"username":user_name,"password":password1},"profilo":{"description":description,"birth_date":Birth_date,"Hobbies":Hobbies,"Gender":Gender}}
                let json = JSON.stringify(user_details,null,4)
                // let file_1=JSON.stringify(json_1,null,4)
                fs.writeFileSync("user_details.JSON", json) 
            }
            else{
                console.log("your password is Incorrect")
            }
        }
        else{
            console.log("At least password should be contain one special charcter or number")
        }
    }
    else{
        console.log("Sign up is not succesfully")
    }
}
// else if (user=="Login"){
//     var user_name1=readlineSync.question("enter the user name :-")
//     var password3=readlineSync.question("enter the password :-")
//     with (open("user_details.json","r"))
//         data=json.load(file)
//         for (keys, values in data.items()){
//             console.log("\nPerson ID:", keys)
//             for (key in values){
//                 console.log(key + ':', values[key])
//             }
//         console.log("congrates",user_name1,"your are Login successfully")
//         }}
// else{
//     console.log("It is not valid")
// }
