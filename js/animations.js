// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// フェードインアニメーション
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// タイピングアニメーション
const text = "Welcome to my gentleman's corner.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

// ページ遷移エフェクト
document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('visible');
});

// ローディングアニメーション
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});
// 既存のコード

// ローディングアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.add('visible');
        }, 1000); // 1秒後にローダーを非表示にする
    }
});

// タイピングアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        const text = "Welcome to my gentleman's corner.";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }
});

// 他の既存のコード