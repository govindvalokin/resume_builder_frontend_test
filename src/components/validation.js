// Function for phone validation
export function validatePhone(phone) {
    
    const regexmob = /^\d{10}$/;
    let error = "";
    // let phone = phone.trim()
    if (phone.trim() == "") {
        error = "This field can not be empty"
        return error;
    }
    else if (!regexmob.test(phone)) {
        error = "Invalid phone number";
        return error;
    }
    else {
        error = "";
        return error;
    }
}
// Email validation
export function validateEmail(email){
    const regexemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let error = "";
    if (email.trim() == ""){
        error = "This field can not be empty"
        return error;
    }
    else if (!regexemail.test(email.trim())) {
        error = "Invalid email";
        return error;
    }
    else {
        error = "";
        return error;
    }
}
// url validation
export function validateUrl(image_url){
    const regexurl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    let error = "";
    if (image_url.trim() == ""){
        error = "This field can not be empty"
        return error;
    }
    else if (!regexurl.test(image_url)) {
        error = "Invalid url address";
        return error;
    }
    else {
        error = "";
        return error;
    }

}
// name validation
export function validateName(name){
    let error = "";
    if (name.trim().length < 1){
        error = "Name can not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// summary validation
export function validateSummary(summary){
    let error = "";
    if (summary.trim().length <= 10){
        error = "Summary should contain more than 10 letters";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// Address validation
export function validateAddress(address){
    let error = "";
    if (address.trim().length < 1){
        error = "Address should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// street validation
export function validateStreet(street){
    let error = "";
    if (street.trim().length < 1){
        error = "Street should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// city validation
export function validateCity(city){
    let error = "";
    if (city.trim().length < 1){
        error = "City should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// pincode validation
export function validatePincode(pincode){
    let error = "";
    if (pincode.trim().length < 1){
        error = "pincode should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// country validation
export function validateCountry(country){
    let error ="";
    if (country != "India" && country != "Canada" && country != "United Kingdom" && country != "United States" && country != "Australia" && country != "China" && country != "Qatar"){
        error = "Select one option";
        return error; 
    }
    else {
        error = "";
        return error;
    }

}
// qualification validation
export function validateQualification(qualification){
    let error = "";
    if(qualification.trim() == ""){
        error = "Qualification should not be empty";
        return error; 
    } 
    else {
        error = "";
        return error;
    }
}
// course name validation
export function validateCourseName(course_name){
    let error = "";
    if (course_name.trim() == ""){
        error = "Course name should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// institute validation
export function validateInstitute(institute){
    let error = "";
    if (institute.trim() == ""){
        error = "Institute should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}
// location validation
export function validateLocation(location){
    let error = "";
    if (location.trim() == ""){
        error = "Location should not be empty";
        return error; 
    }
    else {
        error = "";
        return error;
    }
}

//Date validation
export function validateDate(date){
    let error = "";
    if(date =="" || date == null){
        error = "Date should not be empty";
        return error;
    }
    else{
        error = "";
        return error;
    }
}
