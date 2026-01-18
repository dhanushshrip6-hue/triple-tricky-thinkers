// let questions = document.querySelectorAll(".question");
// let current = 0;
// let score = 0;

// function checkAnswer(select) {
//   if(select.value === "") return;

//   let correct = questions[current].dataset.answer;
//   select.disabled = true;

//   if(select.value === correct) {
//     score++;
//     document.getElementById("giftPopup").style.display = "flex";
//   } else {
//     document.getElementById("wrongPopup").style.display = "flex";
//   }
// }

// function nextQuestion() {
//   document.getElementById("giftPopup").style.display = "none";
//   document.getElementById("wrongPopup").style.display = "none";

//   questions[current].classList.remove("active");
//   current++;

//   if(current < questions.length) {
//     questions[current].classList.add("active");
//   } else {
//     showResult();
//   }
// }

// function showResult() {
//   let feedback =
//     score === questions.length ? "🌟 Excellent!" :
//     score >= Math.ceil(0.7 * questions.length) ? "👍 Good Job!" :
//     "📘 Keep Practicing!";

//   const totalQuestions = questions.length;
//   const percentage = (score / totalQuestions) * 100;

  
//   document.querySelector(".quiz-box").innerHTML = `
//     <h2>Quiz Completed</h2>
//     <h3>Score: ${score} / ${totalQuestions}</h3>
//     <p>${feedback}</p>
//   `;

  
//   if(percentage >= 70) {
//     const btn = document.createElement("button");
//     btn.innerText = "Download Certificate";
//     btn.style.marginTop = "20px";
//     btn.style.padding = "10px 20px";
//     btn.style.fontSize = "16px";
//     btn.style.cursor = "pointer";
//     btn.onclick = function() {
     
//       let username = localStorage.getItem("username");
//       if(!username) {
//         username = prompt("Enter your name for the certificate:", "Student");
//       }
//       username = username.trim() || "Student";

//       const quizName = document.title || "Quiz";
//       const date = new Date().toLocaleDateString();

      
//       localStorage.setItem("cert_username", username);
//       localStorage.setItem("cert_quizname", quizName);
//       localStorage.setItem("cert_score", score);
//       localStorage.setItem("cert_date", date);
//       localStorage.setItem("cert_downloaded", "yes");

     
//       window.open("certificate.html", "_blank");
//     };
//     document.querySelector(".quiz-box").appendChild(btn);
//   }
// }
let questions = document.querySelectorAll(".question");
let current = 0;
let score = 0;

function checkAnswer(select) {
  if (select.value === "") return;

  let correct = questions[current].dataset.answer;
  select.disabled = true;

  if (select.value === correct) {
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

  if (current < questions.length) {
    questions[current].classList.add("active");
  } else {
    showResult();
  }
}

function showResult() {
  const total = questions.length;
  const percentage = (score / total) * 100;

  document.querySelector(".quiz-box").innerHTML = `
    <h2>Quiz Completed</h2>
    <h3>Score: ${score} / ${total}</h3>
    <p>${percentage >= 70 ? "🎉 You Passed!" : "📘 Try Again!"}</p>
  `;

  // ✅ ONLY IF PASSED
  if (percentage >= 70) {

    // 🔐 UNIQUE CODE (USED TO UNLOCK CERTIFICATE)
    const uniqueCode = "EDU-" + Math.random().toString(36).substr(2, 6).toUpperCase();

    // 📘 COURSE NAME (FIXED / DYNAMIC)
    const courseName = "Python Programming"; // change if needed

    // 💾 STORE DATA
    localStorage.setItem("cert_code", uniqueCode);
    localStorage.setItem("cert_course", courseName);
    localStorage.setItem("cert_date", new Date().toLocaleDateString());

    // 📦 DISPLAY CODE TO USER
    const box = document.createElement("div");
    box.style.marginTop = "20px";
    box.style.padding = "15px";
    box.style.border = "2px dashed green";
    box.style.background = "#f0fff0";

    box.innerHTML = `
      <h3>Your Certificate Code</h3>
      <h2 style="color:green">${uniqueCode}</h2>
      <p>Enter this code to download your certificate</p>
    `;

    // 🎓 BUTTON
    const btn = document.createElement("button");
    btn.innerText = "Get Certificate";
    btn.style.padding = "10px 20px";
    btn.style.marginTop = "10px";
    btn.style.cursor = "pointer";
    btn.onclick = () => {
      window.location.href = "certificate-check.html";
    };

    document.querySelector(".quiz-box").appendChild(box);
    document.querySelector(".quiz-box").appendChild(btn);
  }
}
function finishQuiz() {
    // Save subject dynamically
    localStorage.setItem("cert_quizname", SUBJECT_NAME);

    // Save date
    localStorage.setItem("cert_date", new Date().toLocaleDateString());

    // Go to certificate page
    window.location.href = "certificate.html";
}

