document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const suggestion = document.getElementById("suggestion").value;
    
    // Here you could process the feedback, e.g., send it to a server
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Suggestion: " + suggestion);
    
    alert("Thank you for your feedback!");
    
    // Clear the form
    document.getElementById("feedback-form").reset();
});
