// Footer ko dynamically load karne ka function
document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html") // footer.html ko load karna
        .then(response => response.text()) // Response ko text me convert karna
        .then(data => {
            document.getElementById("footer-container").innerHTML = data; // Footer ko insert karna
        })
        .catch(error => console.error("Error loading footer:", error)); // Agar koi error aaye to show karna
});
