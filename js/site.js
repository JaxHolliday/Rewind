//get string value from page 
//controller function
function getValues(){
    //add any invis class to page// makes it available 
   document.getElementById("alert").classList.add("invisible");

   let userString = document.getElementById("userString").value;

   let revString = reverseString(userString);

   displayString(revString);
}

//reverse the string
//logic function
function reverseString(userString){

}

//display the results
//view function
function displayString(){

}