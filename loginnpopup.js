function login(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value; // Get username from input field
    const password = document.getElementById('password').value; // Get password from input field

    // Perform authentication (replace this with your authentication logic)
    if (username === "admin" && password === "admin123") {
        localStorage.setItem('loggedInUser', username); // Store logged-in user in localStorage
        window.location.href = "dashb.html"; // Redirect to example.html page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
