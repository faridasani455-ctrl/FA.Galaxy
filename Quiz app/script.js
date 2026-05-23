// --- Quiz Data ---
const quizData = {
    title: "CULTURE GÉNÉRALE",
    questions: [] // Populated dynamically in initQuiz()
};

// --- Quiz State ---
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// --- DOM Element Cache ---
let quizProgressEl = null;
let questionTextEl = null;
let optionsListEl = null;
let explanationContainerEl = null;
let explanationTextEl = null;
let nextBtnEl = null;
const quizCardEl = document.getElementById("quiz-card");

// --- Shuffling Helper (Fisher-Yates) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Initialization ---
function initQuiz() {
    // 1. Prepare questions: shuffle and pick 10 from questions.js database
    if (typeof quizQuestions !== 'undefined' && quizQuestions.length > 0) {
        const cloned = [...quizQuestions];
        shuffleArray(cloned);
        // Pick 10 random questions for a quick, engaging session
        quizData.questions = cloned.slice(0, 10);
        quizData.title = "CULTURE GÉNÉRALE";
    } else {
        // Robust fallback if questions.js is not loaded
        quizData.questions = [{
                question: "Quelle est la planète la plus chaude du système solaire ?",
                options: ["Mercure", "Vénus", "Mars", "Jupiter"],
                correctIndex: 1,
                explanation: "L'atmosphère dense de Vénus emprisonne la chaleur par effet de serre, la rendant plus chaude que Mercure bien qu'elle soit plus éloignée du Soleil."
            },
            {
                question: "Quelle planète est surnommée la Planète Rouge en raison de son sol d'oxyde de fer ?",
                options: ["Terre", "Mars", "Jupiter", "Saturne"],
                correctIndex: 1,
                explanation: "La surface de Mars est recouverte d'une poussière d'oxyde de fer (rouille), ce qui lui donne cette teinte rougeâtre si caractéristique visible à l'œil nu."
            },
            {
                question: "Quel est le plus grand satellite naturel de la planète Saturne ?",
                options: ["La Lune", "Titan", "Europe", "Ganymède"],
                correctIndex: 1,
                explanation: "Titan est le plus grand satellite de Saturne. C'est le seul satellite du système solaire connu pour avoir une atmosphère dense et des lacs de méthane liquide."
            }
        ];
        quizData.title = "SPACE QUIZ";
    }

    currentQuestionIndex = 0;
    score = 0;
    isAnswered = false;

    // 2. Setup card elements
    restoreCardLayout();
    renderQuestion();
}

function restoreCardLayout() {
    quizCardEl.innerHTML = `
    <header class="card-header">
      <div class="header-left"></div>
      <h1 class="card-title" id="quiz-title">${quizData.title}</h1>
      <div class="card-progress" id="quiz-progress" aria-live="polite">Question 1 / ${quizData.questions.length}</div>
    </header>

    <section class="question-section">
      <p class="question-text" id="question-text"></p>
    </section>

    <section class="options-section" aria-label="Options de réponse">
      <div class="options-list" id="options-list"></div>
    </section>

    <section class="explanation-section" id="explanation-container" aria-hidden="true" style="display: none;">
      <p class="explanation-text" id="explanation-text-content"></p>
    </section>

    <footer class="card-footer">
      <button class="next-btn" id="next-btn" disabled>NEXT</button>
    </footer>
  `;

    // Cache DOM elements
    quizProgressEl = document.getElementById("quiz-progress");
    questionTextEl = document.getElementById("question-text");
    optionsListEl = document.getElementById("options-list");
    explanationContainerEl = document.getElementById("explanation-container");
    explanationTextEl = document.getElementById("explanation-text-content");
    nextBtnEl = document.getElementById("next-btn");

    // Attach event listener
    nextBtnEl.addEventListener("click", handleNextClick);
}

// --- Render Question ---
function renderQuestion() {
    isAnswered = false;
    const currentQuestion = quizData.questions[currentQuestionIndex];

    // Update progress and question text
    quizProgressEl.textContent = `Question ${currentQuestionIndex + 1} / ${quizData.questions.length}`;
    questionTextEl.textContent = currentQuestion.question;

    // Clear and populate options list
    optionsListEl.className = "options-list"; // Reset answered styling
    optionsListEl.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.setAttribute("data-index", index);
        button.id = `opt-${index}`;

        // Label content
        const labelSpan = document.createElement("span");
        labelSpan.className = "option-label";
        labelSpan.textContent = option;

        // Icon space holder (for checkmark / cross)
        const iconSpan = document.createElement("span");
        iconSpan.className = "option-icon";

        button.appendChild(labelSpan);
        button.appendChild(iconSpan);

        // Attach selection listener
        button.addEventListener("click", () => handleOptionSelection(index));

        optionsListEl.appendChild(button);
    });

    // Hide explanation container initially
    explanationContainerEl.style.display = "none";
    explanationContainerEl.setAttribute("aria-hidden", "true");

    // Disable next button
    nextBtnEl.setAttribute("disabled", "true");
}

// --- Option Selection Logic ---
function handleOptionSelection(selectedIndex) {
    if (isAnswered) return; // Prevent multiple clicks

    isAnswered = true;
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const correctIdx = currentQuestion.correctIndex;
    const isCorrect = (selectedIndex === correctIdx);

    if (isCorrect) {
        score++;
    }

    optionsListEl.classList.add("answered");

    // Highlight chosen option and correct option
    currentQuestion.options.forEach((_, index) => {
        const btn = document.getElementById(`opt-${index}`);
        btn.setAttribute("disabled", "true"); // Prevent keyboard focus/clicks

        if (index === correctIdx) {
            btn.classList.add("correct");
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add("incorrect");
        }
    });

    // Show explanation text with smooth presentation
    const prefix = isCorrect ? "Correct. " : "Incorrect. ";
    explanationTextEl.textContent = prefix + currentQuestion.explanation;

    explanationContainerEl.style.display = "block";
    explanationContainerEl.setAttribute("aria-hidden", "false");

    // Enable Next button
    nextBtnEl.removeAttribute("disabled");

    // Auto-scroll inside card if needed on small screens
    setTimeout(() => {
        explanationContainerEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// --- Next Button / Flow Management ---
function handleNextClick() {
    if (!isAnswered) return;

    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        renderQuizCompletion();
    }
}

// --- End Screen Rendering ---
function renderQuizCompletion() {
    const card = quizCardEl;

    let comment = "";
    const ratio = score / quizData.questions.length;

    if (ratio === 1) {
        comment = "Félicitations ! Vous avez réalisé un score parfait. Votre culture générale est impressionnante !";
    } else if (ratio >= 0.7) {
        comment = "Excellent travail ! Vous avez une excellente culture générale.";
    } else if (ratio >= 0.4) {
        comment = "Pas mal ! Vous avez de bonnes connaissances, mais quelques erreurs se sont glissées.";
    } else {
        comment = "C'est une opportunité d'apprendre ! N'hésitez pas à recommencer pour vous améliorer.";
    }

    card.innerHTML = `
    <div class="completed-section">
      <h2 class="completed-title">Quiz Terminé</h2>
      <div class="completed-score">${score} / ${quizData.questions.length}</div>
      <p class="completed-message">${comment}</p>
      <button class="restart-btn" id="restart-btn">RECOMMENCER</button>
    </div>
  `;

    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", () => {
        initQuiz();
    });
}

// --- Run App ---
document.addEventListener("DOMContentLoaded", initQuiz);
// Fallback in case DOMContentLoaded has already fired
if (document.readyState === "interactive" || document.readyState === "complete") {
    initQuiz();
}