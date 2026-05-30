const quizQuestions = [
        // --- SCIENCES & NATURE (1-20) ---
        {
            question: "who craeted the term 'Dark Matter ?",
            options: ["Saul Adelman", "Marc Aaronson", " Fritz Zwicky", "Vera Rubin"],
            correctIndex: 3,
            explanation: " Correct, Fritz Zwicky coined the term while studying the Coma galaxy cluster."
        },
        {
            question: "The universe is made-out of ,how many componets ?",
            options: ["5", "2", "4", "3"],
            correctIndex: 3,
            explanation: "Correct, the universe is made-out of 3 componets: visibal matter, dark matter and dark energy."
        },
        {
            question: "Dark Matter is made-up, to how  many precentage (%) in our universe?",
            options: ["58%", "27%", "82%", "5%"],
            correctIndex: 2,
            explanation: "Correct, scientist have measured that dark matter makes up to 27% of the cosmos."
        },
        {
            question: "The larges galaxy contains, how  many stars?",
            options: ["Million", "Billion", "Hundred", "Trillion"],
            correctIndex: 3,
            explanation: "Correct, the largest contain trillions of stars and can be more than a million light-years across."
        },

        // Export standard for ES6 modules (if used) or fallback global availability
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = { quizQuestions };
        }