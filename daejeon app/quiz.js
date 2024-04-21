document.addEventListener('DOMContentLoaded', function() {
    loadRandomImage();
});

function loadRandomImage() {
    const images = [
        { src: 'a-1.jpg', correctAnswer: 'A-1' },
        { src: 'a-2.jpg', correctAnswer: 'A-2' },
        { src: 'a-3.jpg', correctAnswer: 'A-3' },
        { src: 'a-4.jpg', correctAnswer: 'A-4' }
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const quizImage = document.getElementById('quizImage');
    quizImage.src = selectedImage.src;
    quizImage.alt = "이미지 " + selectedImage.correctAnswer;
    quizImage.dataset.answer = selectedImage.correctAnswer.toLowerCase();
}

function submitAnswer() {
    const userInput = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswer = document.getElementById('quizImage').dataset.answer;
    const feedbackElement = document.getElementById('feedback');

    if (userInput === correctAnswer) {
        feedbackElement.textContent = "맞았습니다!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "틀렸습니다!";
        feedbackElement.style.color = "red";
    }
}
