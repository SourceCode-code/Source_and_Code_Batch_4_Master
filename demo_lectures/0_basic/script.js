document.getElementById("enterButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("message").textContent = "Your journey to coding has started!";
});


//the following code will change the background color to red and display a message when the exit button is clicked
document.getElementById("exitButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "Red";
    document.getElementById("message").textContent = "Thank you for visiting please come back soon";
});
