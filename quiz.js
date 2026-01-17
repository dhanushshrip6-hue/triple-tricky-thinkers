let questions = document.querySelectorAll(".question");
let current = 0;
let score = 0;

function checkAnswer(select){
if(select.value === "") return;

let correct = questions[current].dataset.answer;
select.disabled = true;

if(select.value === correct){
score++;
document.getElementById("giftPopup").style.display="flex";
}else{
document.getElementById("wrongPopup").style.display="flex";
}
}

function nextQuestion(){
document.getElementById("giftPopup").style.display="none";
document.getElementById("wrongPopup").style.display="none";

questions[current].classList.remove("active");
current++;

if(current < questions.length){
questions[current].classList.add("active");
}else{
showResult();
}
}

function showResult(){
let feedback =
score === 5 ? "🌟 Excellent!" :
score >= 3 ? "👍 Good Job!" :
"📘 Keep Practicing!";

document.querySelector(".quiz-box").innerHTML = `
<h2>Quiz Completed</h2>
<h3>Score: ${score} / 5</h3>
<p>${feedback}</p>
`;
}

