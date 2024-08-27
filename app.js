const correctAnswers = ['B', 'A', 'A', 'A'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{ // listen for submit event. 
    e.preventDefault(); // dont refresh the page when submitting

    let score = 0; // set score to 0 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; // store the value of each answer 

    //compare the user's answers to the correct answers 
    userAnswers.forEach((answer, index) =>{
    if(answer === correctAnswers[index])
    {
        score+=25; // each score is worth 25% since there are 4 of them.         
    }
    });

    
    scrollTo(0,0); // automatically scrolls user to the top
    //show result on page. 
    //just remove d none 
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').innerText = `${output}%`; //overwrite current text with new text 

        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 10);

});