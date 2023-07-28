const questions = document.querySelectorAll('.question');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    questions.forEach(ques => {
      ques.classList.remove('show');
    });
    questions[i].classList.toggle('show');
  });
}
