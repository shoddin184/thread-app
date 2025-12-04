document.addEventListener('DOMContentLoaded', function() {
    console.log('掲示板アプリケーションが読み込まれました');
    initFormValidation();
    initThreadButtonEffects();
    initCarousel();
});

function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const threadInput = form.querySelector('input[name="thread"]');
            const articleTextarea = form.querySelector('textarea[name="article"]');

            if (threadInput && threadInput.type !== 'hidden') {
                if (threadInput.value.trim() === '') {
                    event.preventDefault();
                    alert('スレッド名を入力してください');
                    return false;
                }
            }

            if (articleTextarea) {
                if (articleTextarea.value.trim() === '') {
                    event.preventDefault();
                    alert('投稿内容を入力してください');
                    return false;
                }
            }
        });
    });
}

function initThreadButtonEffects() {
    const threadButtons = document.querySelectorAll('.thread-button');

    threadButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function initCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    if (!wrapper) return;

    const items = wrapper.querySelectorAll('.carousel-item');
    if (items.length === 0) return;

    let currentIndex = 0;
    const itemWidth = 266;
    const totalItems = items.length;
    const originalItemCount = 7;

    setInterval(() => {
        currentIndex++;
        wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        if (currentIndex >= originalItemCount) {
            setTimeout(() => {
                wrapper.style.transition = 'none';
                currentIndex = 0;
                wrapper.style.transform = `translateX(0)`;

                setTimeout(() => {
                    wrapper.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }, 3000);
}

function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
