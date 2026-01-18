let questions = document.querySelectorAll(".question");
let current = 0;
let score = 0;

function checkAnswer(select) {
  if(select.value === "") return;

  let correct = questions[current].dataset.answer;
  select.disabled = true;

  if(select.value === correct) {
    score++;
    document.getElementById("giftPopup").style.display = "flex";
  } else {
    document.getElementById("wrongPopup").style.display = "flex";
  }
}

function nextQuestion() {
  document.getElementById("giftPopup").style.display = "none";
  document.getElementById("wrongPopup").style.display = "none";

  questions[current].classList.remove("active");
  current++;

  if(current < questions.length) {
    questions[current].classList.add("active");
  } else {
    showResult();
  }
}

function showResult() {
  let feedback =
    score === questions.length ? "🌟 Excellent!" :
    score >= Math.ceil(0.7 * questions.length) ? "👍 Good Job!" :
    "📘 Keep Practicing!";

  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  // Show results and feedback
  document.querySelector(".quiz-box").innerHTML = `
    <h2>Quiz Completed</h2>
    <h3>Score: ${score} / ${totalQuestions}</h3>
    <p>${feedback}</p>
  `;

  // Only if student passed >=70%
  if(percentage >= 70) {
    const btn = document.createElement("button");
    btn.innerText = "Download Certificate";
    btn.style.marginTop = "20px";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";
    btn.onclick = function() {
      // Ask student name
      let username = localStorage.getItem("username");
      if(!username) {
        username = prompt("Enter your name for the certificate:", "Student");
      }
      username = username.trim() || "Student";

      const quizName = document.title || "Quiz";
      const date = new Date().toLocaleDateString();

      // Save info for certificate
      localStorage.setItem("cert_username", username);
      localStorage.setItem("cert_quizname", quizName);
      localStorage.setItem("cert_score", score);
      localStorage.setItem("cert_date", date);
      localStorage.setItem("cert_downloaded", "yes");

      // Open certificate page
      window.open("jerin.html", "_blank");
    };
    document.querySelector(".quiz-box").appendChild(btn);
  }
}
