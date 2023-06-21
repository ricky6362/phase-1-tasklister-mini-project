document.addEventListener("DOMContentLoaded", function(event){
  // your code here
  // Accessing the ul element as the parent element
  const tasks = document.getElementById("tasks")

  // Accessing the submit button
  const submitButton = document.getElementById("submit")
  submitButton.addEventListener("submit", (event)=> {
    event.preventDefault()
  })
});
