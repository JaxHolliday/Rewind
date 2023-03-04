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

    let revString = [];

    //reverse string in a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        //revString adds to itself for every loop iteration 
        revString += userString[i];        
    }

    return revString;

}

//display the results
//view function
function displayString(revString){

    // write to the page 
    document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`;
    //show alert box
    document.getElementById("alert").classList.remove("invisible");


}