// dark-mode.js
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // ローカルストレージからテーマ設定を取得
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});