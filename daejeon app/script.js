document.addEventListener('DOMContentLoaded', function() {
    const quizTrigger = document.getElementById('quizTrigger');
    quizTrigger.addEventListener('click', function(event) {
        event.preventDefault();  // 기본 이벤트를 방지합니다.
        openQuiz();  // 퀴즈 페이지를 여는 함수 호출
    });
});

function openQuiz() {
    // 랜덤 이미지와 퀴즈를 포함하는 새 페이지로 이동
    window.location.href = 'quizPage.html'; // 퀴즈 페이지의 URL
}
