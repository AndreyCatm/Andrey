document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const settingsModal = document.getElementById('settingsModal');
    const mainContent = document.getElementById('mainContent');
    const languageSelect = document.getElementById('languageSelect');
    const themeSelect = document.getElementById('themeSelect');
    const finishSettings = document.getElementById('finishSettings');
    const htmlTag = document.getElementById('htmlTag');

    // Load settings from localStorage
    const settings = JSON.parse(localStorage.getItem('settings')) || {
        language: 'ru',
        theme: 'dark',
        isFirstVisit: true
    };

    // Apply settings
    if (settings.language) {
        languageSelect.value = settings.language;
        setLanguage(settings.language);
    }
    if (settings.theme) {
        themeSelect.value = settings.theme;
        setTheme(settings.theme);
    }

    // Show settings modal if first visit
    if (settings.isFirstVisit) {
        settingsModal.style.display = 'flex';
    } else {
        mainContent.style.display = 'block';
    }

    finishSettings.addEventListener('click', () => {
        settings.language = languageSelect.value;
        settings.theme = themeSelect.value;
        settings.isFirstVisit = false;
        localStorage.setItem('settings', JSON.stringify(settings));

        setLanguage(settings.language);
        setTheme(settings.theme);

        settingsModal.style.display = 'none';
        mainContent.style.display = 'block';
    });

    function setLanguage(language) {
        if (language === 'en') {
            document.getElementById('statusText').textContent = 'Creator Extension Of RoAndre';
            document.getElementById('aboutText').textContent = 'Hello, I am Andrey, the very person who tried everything, about YouTubing, programming, stuff, and much more! I am a good person here and I am always kind to people and also I love programming, and I am also the creator of the RoAndre extension, can you imagine? Yes?? I am currently in staff at RoPlus, Red Cat YouTube, FunnyHomeu, and many others!';
        } else {
            document.getElementById('statusText').textContent = 'Создатель расширения RoAndre';
            document.getElementById('aboutText').textContent = 'Привет, я Андрей, Тот самый человек который попробовал во всём, о ютуберстве, о программировании, о стаффах, и ещё много всего! Я тут хороший человек и всегда я добрый к людям и также я люблю программирование, ну а ещё я создатель расширение RoAndre, прикиньте? Да?? Я сейчас в стаффах нахожусь в RoPlus, Red Cat YouTube, FunnyHomeu, и ещё много других!';
        }
    }

    function setTheme(theme) {
        if (theme === 'light') {
            htmlTag.classList.add('light-theme');
        } else {
            htmlTag.classList.remove('light-theme');
        }
    }

    // Loading screen simulation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        if (!settings.isFirstVisit) {
            mainContent.style.display = 'block';
        }
    }, 2000);
});

function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
