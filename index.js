const quizData = [
    {question : "Earth is ...",
        answers : [
                {Text: "Flat"},
                {Text: "Square"},
                {Text: "Round"},
                {Text: "None of These"}
        ]
    },
    {question : "How old is joe?",
        answers : [
            {Text: "10"},
            {Text: "29"},
            {Text: "8"},
            {Text: "None of These"}
    ]
    },
    {question : "The color of Sky is ...",
        answers : [
            {Text: "white"},
            {Text: "bkue"},
            {Text: "navy"},
            {Text: "rainbow"}
    ]
    },
];



const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next');

let currentQuiz=0;
let score=0;

loadQuiz()

function loadQuiz(){
    resetQuiz();
    let currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = (currentQuizData.question);
    
    
    currentQuizData.answers.forEach((answer) =>{
        const buttonel = document.createElement('button')
        buttonel.innerHTML= (answer.Text);
        buttonel.classList.add('btn');
        answersEl.appendChild(buttonel);
        
    })

};
function resetQuiz(){
    nextBtn.style.display=('none');
    while(answersEl.firstChild){
        answersEl.removeChild(firstChild);
    };
};




loadQuiz()