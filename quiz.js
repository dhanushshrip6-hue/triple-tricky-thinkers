let currentQ = 1;
let score = 0;

function checkAnswer(correct) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    if(correct) {
        popup.innerHTML = '🎊 Correct!';
        popup.style.backgroundColor = '#4CAF50';
        score++;
    } else {
        popup.innerHTML = '❌ Wrong!';
        popup.style.backgroundColor = '#f44336';
    }
    document.body.appendChild(popup);
    setTimeout(() => { popup.remove(); }, 1500);

    // Show next question
    document.getElementById('q'+currentQ).style.display = 'none';
    currentQ++;
    const nextQ = document.getElementById('q'+currentQ);
    if(nextQ) {
        nextQ.style.display = 'block';
    } else {
        const fb = document.getElementById('finalFeedback');
        if(score === 5) fb.innerHTML = '🎉 Excellent! You scored 5/5!';
        else if(score >= 3) fb.innerHTML = '🙂 Good job! You scored '+score+'/5. You can do even better!';
        else fb.innerHTML = '😕 You scored '+score+'/5. Try again next time!';
    }
}
