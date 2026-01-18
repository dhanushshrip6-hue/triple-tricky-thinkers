// Get certificate info from localStorage
const username = localStorage.getItem("cert_username") || "Student";
const quizName = localStorage.getItem("cert_quizname") || "Quiz";
  const quizDate = localStorage.getItem("cert_date") || new Date().toLocaleDateString();
const certId = "DS-" + username + "-" + Date.now();

// Fill certificate content
document.getElementById("studentName").innerText = username;
document.getElementById("quizName").innerText = quizName;
document.getElementById("quizDate").innerText = quizDate;
document.getElementById("certId").innerText = certId;
