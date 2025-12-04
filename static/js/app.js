// 掲示板アプリケーションのJavaScript

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('掲示板アプリケーションが読み込まれました');

    // フォームのバリデーション
    initFormValidation();

    // スレッドボタンのホバーエフェクト
    initThreadButtonEffects();

    // カルーセルの初期化
    initCarousel();
});

// フォームバリデーションの初期化
function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const threadInput = form.querySelector('input[name="thread"]');
            const articleTextarea = form.querySelector('textarea[name="article"]');

            // スレッド名のバリデーション（新規作成時）
            if (threadInput && threadInput.type !== 'hidden') {
                if (threadInput.value.trim() === '') {
                    event.preventDefault();
                    alert('スレッド名を入力してください');
                    return false;
                }
            }

            // 投稿内容のバリデーション
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

// スレッドボタンのエフェクト
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

// カルーセルの初期化
function initCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    if (!wrapper) return;

    const items = wrapper.querySelectorAll('.carousel-item');
    if (items.length === 0) return;

    let currentIndex = 0;
    const itemWidth = 266; // 240px + margin 26px (13px * 2)
    const totalItems = items.length;
    const originalItemCount = 7; // オリジナルのアイテム数

    // 3秒ごとに1つずつスライド
    setInterval(() => {
        currentIndex++;
        wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // オリジナルのアイテム数を超えたら最初に戻る（シームレスに）
        if (currentIndex >= originalItemCount) {
            setTimeout(() => {
                wrapper.style.transition = 'none';
                currentIndex = 0;
                wrapper.style.transform = `translateX(0)`;

                // トランジションを再度有効化
                setTimeout(() => {
                    wrapper.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500); // トランジション完了後に実行
        }
    }, 3000);
}

// ユーティリティ関数: テキストのサニタイズ
function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
