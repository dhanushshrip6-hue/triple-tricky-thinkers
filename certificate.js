// Make sure this runs after the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Get data from localStorage
    const username = localStorage.getItem("username") || "Student";
    const quizName = localStorage.getItem("cert_quizname") || "Quiz";
    const quizDate = localStorage.getItem("cert_date") || new Date().toLocaleDateString();

    // Set the certificate content
    document.getElementById("studentName").innerText = username;
    document.getElementById("quizName").innerText = quizName;
    document.getElementById("quizDate").innerText = quizDate;
});



