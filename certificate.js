// SECURITY CHECK (only after quiz)
if (localStorage.getItem("quizPassed") !== "true") {
    alert("Access denied");
    window.location.href = "quiz.html";
}

// FETCH DATA
const name = localStorage.getItem("studentName") || "Student Name";
const course = localStorage.getItem("courseName") || "Course Name";
const score = localStorage.getItem("score") || "0";
const total = localStorage.getItem("total") || "0";

// SET VALUES
document.getElementById("name").innerText = name;
document.getElementById("course").innerText = course;
document.getElementById("score").innerText = `${score}/${total}`;

// DATE (Professional format)
const options = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById("date").innerText =
    new Date().toLocaleDateString("en-GB", options);

// CERTIFICATE ID
document.getElementById("certId").innerText =
    "CERT-" + Math.floor(100000 + Math.random() * 900000);
