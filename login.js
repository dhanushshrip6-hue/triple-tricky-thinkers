function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    
    localStorage.setItem("username", username);

    
    window.location.href = "home.html";
}

