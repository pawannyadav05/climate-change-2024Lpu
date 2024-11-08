document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const suggestion = document.getElementById("suggestion").value;
    
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Suggestion: " + suggestion);
    
    alert("Thank you for your feedback!");
    
  
    document.getElementById("feedback-form").reset();
});
