function solve() {

    let wraper = document.getElementById('quizzie');
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let questionSections = document.getElementsByTagName('section');
    let resultHeading = document.querySelector('.results-inner h1');
    let resultList = document.getElementById('results');
    let correctAnswersCount = 0;
    let currentStep = 1;

    let handler = (e) => {

        if (e.target.className === 'answer-text') {

            if (correctAnswers.includes(e.target.textContent)) {
                correctAnswersCount++;
            }

            questionSections[currentStep - 1].style.display = 'none';

            if (currentStep < questionSections.length) {
                questionSections[currentStep].style.display = 'block';
            }



            resultHeading.textContent = correctAnswersCount == 3 ?
                `You are recognized as top JavaScript fan!` : `You have ${correctAnswersCount} right answers`;

            if (currentStep === questionSections.length) {
                wraper.removeEventListener('click', handler);
                resultList.style.display = 'block';
            }

            console.log('Still Here')
            currentStep++;


        }
    };
    wraper.addEventListener('click', handler);

}