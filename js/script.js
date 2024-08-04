document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Correct answers
            const correctAnswers = {
                q1: 'a',
                q2: 'a'
            };

            // Reset previous results
            quizForm.querySelectorAll('.correct, .incorrect').forEach(el => el.classList.remove('correct', 'incorrect'));

            let score = 0;

            // FormData to get all form values
            const formData = new FormData(quizForm);

            // Check answers
            formData.forEach((value, key) => {
                const question = key.slice(0, -1); // Extract question number (q1, q2, etc.)
                const correctAnswer = correctAnswers[question];
                
                // Get the parent label element of the selected radio button
                const selectedRadio = document.querySelector(`input[name="${key}"]:checked`);
                if (selectedRadio) {
                    const label = selectedRadio.parentElement;
                    
                    if (value === correctAnswer) {
                        label.classList.add('correct');
                        score++;
                    } else {
                        label.classList.add('incorrect');
                    }
                }
            });

            // Display the result
            alert(`You scored ${score}/${Object.keys(correctAnswers).length}`);
        });
    }
});
