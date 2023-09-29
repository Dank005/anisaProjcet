let colorBad = "#ff7878"
let colorGood = "#B3CB23"

function InputNameClick()
{
    document.getElementById("FirstName").style.width = "230px";
    document.getElementById("FirstName").style.height = "50px";
}

function CheckValdation()
{
    console.log("CheckValdation")
    checkName("FirstName");
    checkName("LastName");
    checkDest();
    checkPhone();
    checkDate();
    checkQuantity();
}

function checkName(name) { 
    var testName = document.getElementById(name).value; 
    var regex = /^[a-zA-Z\s]{2,20}$/; 
    
    if (regex.test(testName)) { // if testing of first is true 
        document.getElementById(name).style.borderColor = "green"; 
        return true; 
    } 
    
    else {
        document.getElementById(name).style.borderColor = "red";
        return false; 
    } 
} 

function checkDest() { 
    var testDest = document.getElementById("Destination").value; 
    var regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/; 
    
    if (regex.test(testDest)) {
        document.getElementById("Destination").style.borderColor = "green"; 
        return true; 
    } 
    
    else {
        document.getElementById("Destination").style.borderColor = "red";
        document.getElementById("Destination").innerHTML = "Please, enter 2-50 characters"; 
        return false; 
    } 
} 

function checkPhone() { 
    var phone = document.getElementById("PhoneNumber").value; 
    var regex = /^\d{3}-(\d{3})-\d{3}$/; 
    
    if (regex.test(phone)) {
        document.getElementById("PhoneNumber").style.backgroundColor = colorGood; 
        document.getElementById("PhoneNumber").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {
        document.getElementById("PhoneNumber").style.backgroundColor = colorBad;    
        document.getElementById("PhoneNumber").innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 

function checkDate() {
    var phone = document.getElementById("DateAndTime").value; 
    var regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/; 
    
    if (regex.test(phone)) { 
        document.getElementById("DateAndTime").style.backgroundColor = colorGood; 
        document.getElementById("DateAndTime").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {
        document.getElementById("DateAndTime").style.backgroundColor = colorBad;    
        document.getElementById("DateAndTime").innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 

function checkQuantity() {
    var count = document.getElementById("Quantity").value; 
    
    if (count>0) { 
        document.getElementById("Quantity").style.backgroundColor = colorGood; 
        document.getElementById("Quantity").innerHTML = "Input correct :)"; 
        return true; 
    } 
    
    else {
        document.getElementById("Quantity").style.backgroundColor = colorBad;    
        document.getElementById("Quantity").innerHTML = "Input is incorrect!";   
        return false; 
    } 
} 