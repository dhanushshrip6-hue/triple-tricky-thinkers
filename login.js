function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Save username
    localStorage.setItem("username", username);

    // Redirect to home page
    window.location.href = "home.html";
}

