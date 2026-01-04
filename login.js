function login() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == "" || pass == "") {
        document.getElementById("message").innerHTML = "Fill all fields";
    } else {
        localStorage.setItem("username", user);
        window.location.href = "div.html";
    }
}



// function login() {
//     var user = document.getElementById("user").value;
//     var pass = document.getElementById("pass").value;

//     if (user == "" || pass == "") {
//         alert("Enter username and password");
//     } else {
//         window.location = "div.html";
//     }
// }

