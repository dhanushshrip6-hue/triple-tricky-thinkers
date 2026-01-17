// ======== DYNAMIC USERNAME AND GREETING ========
// Get username from localStorage, default to 'Student'
const username = localStorage.getItem('username') || 'Student';

// Get current hour
const now = new Date();
const hour = now.getHours();

// Decide greeting based on time
let greeting = '';
if(hour >= 5 && hour < 12){
    greeting = 'Good Morning';
} else if(hour >= 12 && hour < 17){
    greeting = 'Good Afternoon';
} else {
    greeting = 'Good Evening';
}

// Update the welcome div dynamically
const welcomeElement = document.querySelector('.welcome');
if(welcomeElement){
    welcomeElement.innerText = `${greeting}, ${username}!`;
}


function startCourse(subject){
    // Convert subject to lowercase, remove spaces, and add ".html"
    const page = subject.toLowerCase().replace(/\s+/g, '') + '.html';
    window.location.href = page;
}

// function startCourse(subject){
//     if(subject === 'Data Structures'){
//         window.location.href = 'sydatastructure.html';
//     } else if(subject === 'DBMS'){
//         window.location.href = 'sydbms.html';
//     } else if(subject === 'Python'){
//         window.location.href = 'sypython.html';
//     } else if(subject === 'Web Development'){
//         window.location.href = 'syweb.html';
//     }else if(subject === 'AI'){
//         window.location.href = 'syai.html';
//     }
// }
