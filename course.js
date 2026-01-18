document.addEventListener("DOMContentLoaded", () => {

    // Get username from localStorage
    const username = localStorage.getItem("username") || "Student";

    // Greeting logic
    const hour = new Date().getHours();
    let greeting = "Hello";

    if (hour < 12) {
        greeting = "Good Morning 🌞";
    } else if (hour < 17) {
        greeting = "Good Afternoon🌤️";
    } else {
        greeting = "Good Evening🌛";
    }

    // Update welcome text
    const welcomeElement = document.querySelector(".welcome");
    if (welcomeElement) {
        welcomeElement.innerText = `${greeting}, ${username}!`;
    }
});



// function startCourse(subject){
//     // Convert subject to lowercase, remove spaces, and add ".html"
//     const page = subject.toLowerCase().replace(/\s+/g, '') + '.html';
//     window.location.href = page;
// }

function startCourse(subject){
    if(subject === 'Data Structures'){
        window.location.href = 'datastructures.html';
    } else if(subject === 'DBMS'){
        window.location.href = 'dbms.html';
    } else if(subject === 'Python'){
        window.location.href = 'python.html';
    } else if(subject === 'Web Development'){
        window.location.href = 'webdevelopment.html';
    }else if(subject === 'Artificial Intelligence'){
        window.location.href = 'ai.html';
    }
}
