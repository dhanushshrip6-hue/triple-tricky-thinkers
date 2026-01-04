function openSubject(subjectId) {
    const allSubjects = document.querySelectorAll(".subject-content");
    allSubjects.forEach(subject => {
        subject.style.display = "none";
    });

    document.getElementById(subjectId).style.display = "block";
}