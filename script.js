const questions = [
    {
        question: "What is the name of Harry's owl?",
        options: ["Errol", "Hedwig", "Pigwidgeon", "Fawkes"],
        correct: 1
    },
    {
        question: "Which house does Luna Lovegood belong to?",
        options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        correct: 2
    },
    {
        question: "What is the core of Harry's wand?",
        options: ["Dragon heartstring", "Unicorn hair", "Phoenix feather", "Veela hair"],
        correct: 2
    },
    {
        question: "Who is the Half-Blood Prince?",
        options: ["Severus Snape", "Tom Riddle", "Sirius Black", "Lucius Malfoy"],
        correct: 0
    },
    {
        question: "What spell is used to summon objects?",
        options: ["Wingardium Leviosa", "Accio", "Expelliarmus", "Lumos"],
        correct: 1
    },
    {
        question: "What is the name of Hermione's cat?",
        options: ["Mrs. Norris", "Crookshanks", "Scabbers", "Trevor"],
        correct: 1
    },
    {
        question: "Which dragon does Harry face in the Triwizard Tournament?",
        options: ["Norwegian Ridgeback", "Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball"],
        correct: 1
    },
    {
        question: "What is the name of the wizard prison?",
        options: ["Nurmengard", "Azkaban", "Grindelwald", "Durmstrang"],
        correct: 1
    },
    {
        question: "Who kills Dumbledore?",
        options: ["Bellatrix Lestrange", "Draco Malfoy", "Severus Snape", "Voldemort"],
        correct: 2
    },
    {
        question: "What platform does the Hogwarts Express leave from?",
        options: ["Platform 8", "Platform 9", "Platform 9¾", "Platform 10"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function createWand() {
    const wand = document.createElement('div');
    wand.className = 'wand';
    wand.style.left = Math.random() * 100 + '%';
    wand.style.top = '0';
    document.body.appendChild(wand);
    
    setTimeout(() => {
        wand.remove();
    }, 4000);
}

setInterval(createWand, 3000);

function startQuiz() {
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.quiz-screen').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(selected) {
    if (answered) return;
    answered = true;
    
    const options = document.querySelectorAll('.option');
    const correct = questions[currentQuestion].correct;
    
    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === correct) {
            option.classList.add('correct');
        }
        if (index === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        score++;
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.querySelector('.quiz-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    
    document.getElementById('finalScore').textContent = `${score} / ${questions.length}`;
    
    let rank = '';
    let icon = '';
    
    if (score === 10) {
        rank = 'Headmaster/Headmistress';
        icon = '🧙‍♂️';
    } else if (score >= 8) {
        rank = 'Professor';
        icon = '📚';
    } else if (score >= 6) {
        rank = 'Prefect';
        icon = '⭐';
    } else if (score >= 4) {
        rank = 'Outstanding Student';
        icon = '✨';
    } else {
        rank = 'First Year Student';
        icon = '🎓';
    }
    
    document.getElementById('rank').textContent = rank;
    document.getElementById('rankIcon').textContent = icon;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.start-screen').classList.add('active');
}

createStars();
