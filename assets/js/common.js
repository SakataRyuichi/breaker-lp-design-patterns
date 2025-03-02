// 共通JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // スムーススクロール
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (const link of smoothScrollLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // CTAボタンのイベントトラッキング
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  for (const button of ctaButtons) {
    button.addEventListener('click', function() {
      console.log('CTA clicked:', this.innerText);
      // ここにコンバージョントラッキングのコードを追加
    });
  }
});
