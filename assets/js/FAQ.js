function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const toggleIcon = answer.previousElementSibling.querySelector('.toggle-icon');
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggleIcon.textContent = "+";
    } else {
        answer.style.display = "block";
        toggleIcon.textContent = "-";
    }
};