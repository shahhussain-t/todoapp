// Create a new list item when clicking on the "Add" button

const CreateTodo=()=> {    // arrow function
  const myli = document.createElement("li");     //variable to create li element
  //const Wrapper=document.querySelector("#myUL") //selects the ID myUL
  let inputValue = document.querySelector("#myInput").value;// variable to select myinput id from html
    const myUL = document.querySelector("#myUL"); //variable to select myUL id from html
 const myText = document.createTextNode(inputValue); //convert string from inputValue to an html textnode(element)
    myli.appendChild(myText);  // place the created text into the li
  if (inputValue === '') { //if statement to validate if the input is not empty
    alert("You must write something!");  // send an alert that the field is empty
  } else {   
      myUL.appendChild(myli); // place the created li into the ul

    //document.getElementById("myUL").appendChild(li);
  }
  //inputValue= ""; // reset the input value to an empty
  
  document.querySelector("#myInput").value=""; 
  const myspan = document.createElement("button");  // create a button element
  const myxbtn = document.createTextNode("\u00D7"); // create a close/ x button
  myspan.className = "close"; // giving the span a class called close
  myspan.appendChild(myxbtn); // put the created 'x' inside span
  myli.appendChild(myspan); // put the span inside the li created on line 4

const closeBtnArray = document.querySelectorAll('.close')
console.log(closeBtnArray)
//console.log(closeBtnArray[0])

for (let i =0; i<closeBtnArray.length; i++){
  console.log(closeBtnArray[i])
     function removeTodo(){
       this.parentElement.style.display='none';
  //closeBtnArray[i]
       console.log(this.parentElement)
}
closeBtnArray[i].onclick = removeTodo


}

};



















// Create a "close" button and append it to each list item
//const TodoList = document.querySelector("li"); //get the li created 
//let i;

// Click on a close button to hide the current list item
//let close = document.getElementsByClassName("close");
//let i;
// for (let i = 0; i < close.length; i++) { // i starts at 0, it is less than the length of the button, and increments
//   close[i].onclick = function() {   //create a function when close is clicked.
//     let mytodo = this.parentElement; // i dont know
//     mytodo.style.display = "none";  //disply style set to none.
//     console.log(mytodo);
//   }
//}
// click on a close button to hide the current list item
//const close = document.querySelectorAll(".close");  // get all the elements with a class name of close
// console.log(close.length); // logging the length of the number of elements

//  for (let i = 0; i < close.length; i++) { // lopping through the elements
//   close[i].onclick = function() { // for each of the element when clicked, run the function
//     let mytodo = this.parentElement; 
//     mytodo.style.display = "none"; //
//     console.log(mytodo);
//   };
//   console.log(close[i])
  
// Add a "checked" symbol when clicking on a list item
// let list = document.querySelector('ul');  // create an unordered list and call it list
// list.addEventListener('click', function(ev) {  //when clicked,or when an event happens, it passes the function to listen 
//   if (ev.target.tagName === 'LI') {   // if the event listens to the list intended
//       ev.target.classList.toggle('checked'); // it will check or tick that targeted event
//   }
// }, false);  //or else not/ false