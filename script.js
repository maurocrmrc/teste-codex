// Game State
const gameState = {
    hearts: 5,
    maxHearts: 5,
    streak: 0,
    gems: 100,
    xp: 0,
    currentLesson: 0,
    currentQuestion: 0,
    selectedOption: null,
    correctAnswers: 0,
    wrongAnswers: 0,
    completedLessons: [],
    unlockedLessons: [0],
    soundEnabled: true,
    darkMode: false,
    lessonStartTime: 0,
    skipUsed: false
};

// Lessons Database
const lessonsDB = [
    {
        title: "Primeiros Sinais",
        icon: "🤰",
        questions: [
            {
                text: "Contrações a cada 15 minutos. O que fazer?",
                options: [
                    { text: "Correr ao hospital", correct: false },
                    { text: "Cronometrar e preparar", correct: true },
                    { text: "Entrar em pânico", correct: false },
                    { text: "Ignorar", correct: false }
                ],
                tip: "Monitore as contrações. Hospital quando estiverem a cada 5 minutos."
            },
            {
                text: "A bolsa rompeu! Primeira ação?",
                options: [
                    { text: "Anotar hora e cor", correct: true },
                    { text: "Correr sem direção", correct: false },
                    { text: "Dar banho", correct: false },
                    { text: "Postar online", correct: false }
                ],
                tip: "Líquido claro é normal. Verde ou marrom = emergência!"
            },
            {
                text: "Quando ir ao hospital?",
                options: [
                    { text: "Primeira contração", correct: false },
                    { text: "Contrações de 5 em 5 min", correct: true },
                    { text: "Dor insuportável", correct: false },
                    { text: "Após pesquisar", correct: false }
                ],
                tip: "Regra 5-1-1: contrações a cada 5 min, durando 1 min, por 1 hora."
            }
        ]
    },
    {
        title: "O Grande Dia",
        icon: "👶",
        questions: [
            {
                text: "Como ajudar durante o parto?",
                options: [
                    { text: "Massagem e apoio", correct: true },
                    { text: "Filmar tudo", correct: false },
                    { text: "Sair para comer", correct: false },
                    { text: "Dormir", correct: false }
                ],
                tip: "Seu apoio emocional faz toda diferença!"
            },
            {
                text: "Logo após nascer, prioridade é?",
                options: [
                    { text: "Foto para redes", correct: false },
                    { text: "Contato pele a pele", correct: true },
                    { text: "Banho imediato", correct: false },
                    { text: "Pesar urgente", correct: false }
                ],
                tip: "Contato pele a pele regula temperatura e cria vínculo."
            },
            {
                text: "Testes na maternidade?",
                options: [
                    { text: "QI do bebê", correct: false },
                    { text: "Pezinho e orelhinha", correct: true },
                    { text: "Natação", correct: false },
                    { text: "DNA", correct: false }
                ],
                tip: "Triagem neonatal detecta doenças precocemente."
            }
        ]
    },
    {
        title: "Primeiros Cuidados",
        icon: "🍼",
        questions: [
            {
                text: "Frequência de amamentação?",
                options: [
                    { text: "Cada 6 horas", correct: false },
                    { text: "Livre demanda", correct: true },
                    { text: "3x ao dia", correct: false },
                    { text: "Quando chora", correct: false }
                ],
                tip: "Livre demanda = sempre que o bebê quiser, 8-12x/dia."
            },
            {
                text: "Como limpar o umbigo?",
                options: [
                    { text: "Água e sabão", correct: false },
                    { text: "Álcool 70%", correct: true },
                    { text: "Não mexer", correct: false },
                    { text: "Pomada", correct: false }
                ],
                tip: "Álcool 70% a cada troca. Cai em 7-21 dias."
            },
            {
                text: "Posição para dormir?",
                options: [
                    { text: "De bruços", correct: false },
                    { text: "Barriga para cima", correct: true },
                    { text: "De lado", correct: false },
                    { text: "Sentado", correct: false }
                ],
                tip: "Sempre de barriga para cima previne morte súbita."
            }
        ]
    },
    {
        title: "Rotina Diária",
        icon: "🛁",
        questions: [
            {
                text: "Temperatura do banho?",
                options: [
                    { text: "40-42°C", correct: false },
                    { text: "36-37°C", correct: true },
                    { text: "Fria", correct: false },
                    { text: "Qualquer", correct: false }
                ],
                tip: "Use o cotovelo para testar. Deve estar morna."
            },
            {
                text: "Prevenir assaduras?",
                options: [
                    { text: "Trocar pouco", correct: false },
                    { text: "Muito talco", correct: false },
                    { text: "Trocar sempre", correct: true },
                    { text: "Sem fralda", correct: false }
                ],
                tip: "Troque frequentemente e use pomada preventiva."
            },
            {
                text: "Horas de sono do RN?",
                options: [
                    { text: "8 horas", correct: false },
                    { text: "16-20 horas", correct: true },
                    { text: "4-6 horas", correct: false },
                    { text: "24 horas", correct: false }
                ],
                tip: "Dormem muito, mas em períodos curtos de 2-4h."
            }
        ]
    },
    {
        title: "Hora de Dormir",
        icon: "😴",
        questions: [
            {
                text: "Criar rotina de sono?",
                options: [
                    { text: "Deixar cansar", correct: false },
                    { text: "Banho e calma", correct: true },
                    { text: "TV ligada", correct: false },
                    { text: "Música alta", correct: false }
                ],
                tip: "Rotina: banho, massagem, ambiente calmo."
            },
            {
                text: "Bebê só dorme no colo?",
                options: [
                    { text: "Deixar chorar", correct: false },
                    { text: "Transição gradual", correct: true },
                    { text: "Sempre colo", correct: false },
                    { text: "Dar remédio", correct: false }
                ],
                tip: "Coloque no berço sonolento, não totalmente dormindo."
            },
            {
                text: "Sinais de sono?",
                options: [
                    { text: "Só quando chora", correct: false },
                    { text: "Esfrega olhos", correct: true },
                    { text: "Fica agitado", correct: false },
                    { text: "Impossível saber", correct: false }
                ],
                tip: "Bocejos, esfregar olhos e irritação são sinais."
            }
        ]
    },
    {
        title: "Emergências",
        icon: "🚨",
        questions: [
            {
                text: "Bebê 1 mês com febre?",
                options: [
                    { text: "Dar remédio", correct: false },
                    { text: "Hospital já", correct: true },
                    { text: "Banho gelado", correct: false },
                    { text: "Esperar", correct: false }
                ],
                tip: "Febre em < 3 meses é sempre emergência!"
            },
            {
                text: "Como agir no engasgo?",
                options: [
                    { text: "Sacudir", correct: false },
                    { text: "5 tapas, 5 compressões", correct: true },
                    { text: "Dedo na garganta", correct: false },
                    { text: "Dar água", correct: false }
                ],
                tip: "5 tapas nas costas, vire, 5 compressões no peito."
            },
            {
                text: "Sinais de desidratação?",
                options: [
                    { text: "Muito xixi", correct: false },
                    { text: "Moleira funda", correct: true },
                    { text: "Bebê alegre", correct: false },
                    { text: "Dormindo bem", correct: false }
                ],
                tip: "Moleira funda, boca seca, sem lágrimas = desidratação."
            }
        ]
    }
];

// Initialize lessons path
function initLessonsPath() {
    const container = document.querySelector('.lesson-path');
    container.innerHTML = '';
    
    lessonsDB.forEach((lesson, index) => {
        const row = document.createElement('div');
        row.className = 'lesson-row';
        
        const button = document.createElement('button');
        button.className = 'lesson-button';
        button.id = `lesson${index}`;
        button.onclick = () => startLesson(index);
        
        const content = document.createElement('div');
        content.className = 'lesson-content';
        
        const icon = document.createElement('span');
        icon.className = 'lesson-icon';
        icon.textContent = lesson.icon;
        content.appendChild(icon);
        
        button.appendChild(content);
        row.appendChild(button);
        container.appendChild(row);
        
        const label = document.createElement('div');
        label.className = 'lesson-label';
        label.textContent = lesson.title;
        container.appendChild(label);
    });
    
    updateLessonButtons();
}

// Update lesson buttons
function updateLessonButtons() {
    lessonsDB.forEach((lesson, index) => {
        const button = document.getElementById(`lesson${index}`);
        if (!button) return;
        
        button.className = 'lesson-button';
        button.disabled = true;
        
        if (gameState.completedLessons.includes(index)) {
            button.classList.add('completed');
            button.disabled = false;
        } else if (gameState.unlockedLessons.includes(index)) {
            button.classList.add('current');
            button.disabled = false;
        } else {
            button.classList.add('locked');
        }
    });
}

// Start lesson
function startLesson(lessonId) {
    if (!gameState.unlockedLessons.includes(lessonId) && !gameState.completedLessons.includes(lessonId)) {
        return;
    }
    
    if (gameState.hearts <= 0) {
        alert('❤️ Sem vidas! Aguarde 1 hora ou compre na loja.');
        return;
    }
    
    gameState.currentLesson = lessonId;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.selectedOption = null;
    gameState.skipUsed = false;
    gameState.lessonStartTime = Date.now();
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('exerciseScreen').classList.add('active');
    
    loadQuestion();
}

// Load question
function loadQuestion() {
    const lesson = lessonsDB[gameState.currentLesson];
    const question = lesson.questions[gameState.currentQuestion];
    
    const progress = (gameState.currentQuestion / lesson.questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    gameState.selectedOption = null;
    document.getElementById('checkButton').className = 'check-button inactive';
    document.getElementById('resultModal').classList.remove('show');
    
    document.getElementById('questionText').textContent = question.text;
    
    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const card = document.createElement('button');
        card.className = 'option-card';
        card.textContent = option.text;
        card.onclick = () => selectOption(index);
        grid.appendChild(card);
    });
}

// Select option
function selectOption(index) {
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    document.querySelectorAll('.option-card')[index].classList.add('selected');
    gameState.selectedOption = index;
    document.getElementById('checkButton').className = 'check-button active';
}

// Check answer
function checkAnswer() {
    if (gameState.selectedOption === null) return;
    
    const lesson = lessonsDB[gameState.currentLesson];
    const question = lesson.questions[gameState.currentQuestion];
    const selected = question.options[gameState.selectedOption];
    
    document.querySelectorAll('.option-card').forEach((card, index) => {
        card.onclick = null;
        card.disabled = true;
        
        if (question.options[index].correct) {
            card.classList.add('correct');
        }
        if (index === gameState.selectedOption && !selected.correct) {
            card.classList.add('wrong');
        }
    });
    
    const modal = document.getElementById('resultModal');
    const icon = document.getElementById('resultIcon');
    const title = document.getElementById('resultTitle');
    const message = document.getElementById('resultMessage');
    const tipText = document.getElementById('tipText');
    const continueBtn = document.getElementById('continueBtn');
    
    if (selected.correct) {
        gameState.correctAnswers++;
        gameState.xp += 10;
        gameState.gems += 5;
        
        icon.className = 'result-icon correct';
        title.textContent = 'Correto!';
        title.className = 'result-title correct';
        message.textContent = 'Muito bem!';
        continueBtn.className = 'continue-button correct';
        
        playSound('correct');
    } else {
        gameState.wrongAnswers++;
        gameState.hearts = Math.max(0, gameState.hearts - 1);
        
        icon.className = 'result-icon wrong';
        title.textContent = 'Ops!';
        title.className = 'result-title wrong';
        message.textContent = 'Não foi dessa vez!';
        continueBtn.className = 'continue-button wrong';
        
        playSound('wrong');
    }
    
    tipText.textContent = question.tip;
    modal.classList.add('show');
    
    updateUI();
    saveState();
    
    document.getElementById('checkButton').style.display = 'none';
    
    if (gameState.hearts === 0) {
        setTimeout(() => {
            alert('❤️ Sem vidas! Volte mais tarde.');
            exitLesson();
        }, 1500);
    }
}

// Next question
function nextQuestion() {
    gameState.currentQuestion++;
    
    document.getElementById('checkButton').style.display = 'block';
    
    const lesson = lessonsDB[gameState.currentLesson];
    
    if (gameState.currentQuestion >= lesson.questions.length) {
        completeLesson();
    } else {
        loadQuestion();
    }
}

// Skip question
function skipQuestion() {
    if (!gameState.skipUsed) {
        if (confirm('Você pode pular apenas uma vez. Deseja pular?')) {
            gameState.skipUsed = true;
            nextQuestion();
        }
    } else {
        alert('Você já usou seu pulo!');
    }
}

// Exit lesson
function exitLesson() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('homeScreen').classList.add('active');
}

// Complete lesson
function completeLesson() {
    const timeSpent = Math.floor((Date.now() - gameState.lessonStartTime) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    const total = gameState.correctAnswers + gameState.wrongAnswers;
    const accuracy = Math.round((gameState.correctAnswers / total) * 100);
    const xpEarned = 50 + (gameState.correctAnswers * 10);
    
    gameState.xp += 50;
    gameState.gems += 20;
    
    if (!gameState.completedLessons.includes(gameState.currentLesson)) {
        gameState.completedLessons.push(gameState.currentLesson);
        gameState.streak++;
        
        const nextLesson = gameState.currentLesson + 1;
        if (nextLesson < lessonsDB.length && !gameState.unlockedLessons.includes(nextLesson)) {
            gameState.unlockedLessons.push(nextLesson);
        }
    }
    
    document.getElementById('xpEarned').textContent = xpEarned;
    document.getElementById('accuracyPercent').textContent = `${accuracy}%`;
    document.getElementById('timeSpent').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('completeModal').classList.add('show');
    
    playSound('complete');
    saveState();
}

// Close complete modal
function closeComplete() {
    document.getElementById('completeModal').classList.remove('show');
    exitLesson();
    updateLessonButtons();
}

// Update UI
function updateUI() {
    document.getElementById('heartsCount').textContent = gameState.hearts;
    document.getElementById('streakCount').textContent = gameState.streak;
    document.getElementById('gemsCount').textContent = gameState.gems;
}

// Dark mode
function toggleDarkMode() {
    gameState.darkMode = !gameState.darkMode;
    const toggle = document.getElementById('darkModeToggle');
    
    if (gameState.darkMode) {
        document.body.setAttribute('data-theme', 'dark');
        toggle.classList.add('active');
    } else {
        document.body.setAttribute('data-theme', 'light');
        toggle.classList.remove('active');
    }
    
    saveState();
}

// Sound toggle
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    const toggle = document.getElementById('soundToggle');
    const icon = document.getElementById('soundIcon');
    
    if (gameState.soundEnabled) {
        toggle.classList.add('active');
        icon.textContent = '🔊';
    } else {
        toggle.classList.remove('active');
        icon.textContent = '🔇';
    }
    
    saveState();
}

// Play sound
function playSound(type) {
    if (!gameState.soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'correct':
            oscillator.frequency.value = 800;
            gainNode.gain.value = 0.3;
            break;
        case 'wrong':
            oscillator.frequency.value = 300;
            gainNode.gain.value = 0.3;
            break;
        case 'complete':
            oscillator.frequency.value = 1000;
            gainNode.gain.value = 0.2;
            break;
    }
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Settings menu
function toggleSettings() {
    const menu = document.getElementById('settingsMenu');
    menu.classList.toggle('show');
}

// Navigation
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    switch(screen) {
        case 'home':
            document.getElementById('homeScreen').classList.add('active');
            document.querySelectorAll('.nav-item')[0].classList.add('active');
            break;
        default:
            alert('Em breve!');
            document.getElementById('homeScreen').classList.add('active');
            document.querySelectorAll('.nav-item')[0].classList.add('active');
    }
}

function goBack() {
    const exerciseScreen = document.getElementById('exerciseScreen');
    if (exerciseScreen.classList.contains('active')) {
        if (confirm('Sair da lição? Você perderá o progresso.')) {
            exitLesson();
        }
    } else {
        showScreen('home');
    }
}

// Save/Load state
function saveState() {
    localStorage.setItem('tinyStepsState', JSON.stringify(gameState));
}

function loadState() {
    const saved = localStorage.getItem('tinyStepsState');
    if (saved) {
        Object.assign(gameState, JSON.parse(saved));
    }
}

// Initialize
function init() {
    loadState();
    updateUI();
    initLessonsPath();
    
    if (gameState.darkMode) {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('darkModeToggle').classList.add('active');
    }
    
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('settingsMenu');
        const profileBtn = document.querySelector('.profile-button');
        
        if (!menu.contains(e.target) && e.target !== profileBtn) {
            menu.classList.remove('show');
        }
    });
}

// Start app
window.onload = init;
