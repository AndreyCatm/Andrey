document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    const settingsModal = document.getElementById('settingsModal');
    const finishSettingsButton = document.getElementById('finishSettings');
    const languageSelect = document.getElementById('languageSelect');
    const themeSelect = document.getElementById('themeSelect');
    const languageSelectTab = document.getElementById('languageSelectTab');
    const themeSelectTab = document.getElementById('themeSelectTab');
    const htmlTag = document.getElementById('htmlTag');

    const settings = {
        language: localStorage.getItem('language') || 'ru',
        theme: localStorage.getItem('theme') || 'dark',
        isFirstVisit: !localStorage.getItem('visited')
    };

    if (settings.isFirstVisit) {
        settingsModal.style.display = 'flex';
    } else {
        mainContent.style.display = 'block';
    }

    applySettings();

    finishSettingsButton.addEventListener('click', () => {
        settings.language = languageSelect.value;
        settings.theme = themeSelect.value;
        localStorage.setItem('language', settings.language);
        localStorage.setItem('theme', settings.theme);
        localStorage.setItem('visited', 'true');
        applySettings();
        settingsModal.style.display = 'none';
        mainContent.style.display = 'block';
    });

    function applySettings() {
        setLanguage(settings.language);
        setTheme(settings.theme);
        languageSelect.value = settings.language;
        themeSelect.value = settings.theme;
        languageSelectTab.value = settings.language;
        themeSelectTab.value = settings.theme;

        updateTabTitles();
    }

    function setLanguage(language) {
        if (language === 'en') {
            document.getElementById('profileTitle').textContent = 'Andrey\'s Profile';
            document.getElementById('statusText').textContent = 'Creator Extension Of RoAndre';
            document.getElementById('aboutText').textContent = 'Hello, I am Andrey, the person who has tried everything: YouTube, programming, staff, and much more! I am a good person here and I am always kind to people and also I love programming, and I am also the creator of the RoAndre extension, can you imagine? Yes?? I am currently in staff at RoPlus, Red Cat YouTube, FunnyHomeu, and many others!';
            document.getElementById('linksTabButton').textContent = 'Links';
            document.getElementById('aboutSiteTabButton').textContent = 'About the Site';
            document.getElementById('settingsTabButton').textContent = 'Settings';
            document.getElementById('settingsTitle').textContent = 'Settings';
            document.getElementById('settingsTabTitle').textContent = 'Settings';
            document.getElementById('finishSettings').textContent = 'Finish Setup';
        } else {
            document.getElementById('profileTitle').textContent = 'Профиль Андрея';
            document.getElementById('statusText').textContent = 'Создатель расширения RoAndre';
            document.getElementById('aboutText').textContent = 'Привет, я Андрей, Тот самый человек который попробовал во всём, о ютуберстве, о программировании, о стаффах, и ещё много всего! Я тут хороший человек и всегда я добрый к людям и также я люблю программирование, ну а ещё я создатель расширение RoAndre, прикиньте? Да?? Я сейчас в стаффах нахожусь в RoPlus, Red Cat YouTube, FunnyHomeu, и ещё много других!';
            document.getElementById('linksTabButton').textContent = 'Ссылки';
            document.getElementById('aboutSiteTabButton').textContent = 'О сайте';
            document.getElementById('settingsTabButton').textContent = 'Настройки';
            document.getElementById('settingsTitle').textContent = 'Настройки';
            document.getElementById('settingsTabTitle').textContent = 'Настройки';
            document.getElementById('finishSettings').textContent = 'Закончить настройку';
        }
    }

    function setTheme(theme) {
        if (theme === 'light') {
            htmlTag.classList.add('light-theme');
        } else {
            htmlTag.classList.remove('light-theme');
        }
    }

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        if (!settings.isFirstVisit) {
            mainContent.style.display = 'block';
        }
    }, 2000);

    window.openSettings = function() {
        settingsModal.style.display = 'flex';
    };

    window.openTab = function(event, tabName) {
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
    };

    window.saveSettingsFromTab = function() {
        settings.language = languageSelectTab.value;
        settings.theme = themeSelectTab.value;
        localStorage.setItem('language', settings.language);
        localStorage.setItem('theme', settings.theme);
        applySettings();
    };
});
