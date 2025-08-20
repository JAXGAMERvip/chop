// 🔒 منع الزر الأيمن + الكيبورد
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    (e.ctrlKey && e.key.toLowerCase() === 'u')
  ) {
    e.preventDefault();
  }
});

// 🔒 منع سحب/حفظ الصور
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
  img.addEventListener('contextmenu', e => e.preventDefault());
  img.setAttribute('draggable', 'false');
});

document.querySelectorAll('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=XEYvAuHxg6s', '_blank');
  });
});

videoModal.addEventListener('click', () => {
  videoModal.classList.remove('active');
  videoModal.querySelector('iframe').src = '';
});

videoModal.addEventListener('click', () => {
  videoModal.classList.remove('active');
  videoModal.querySelector('iframe').src = '';
});

// 🖼️ modal الصور (Lightbox)
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeImg = document.getElementById('closeImg');

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    imgModal.style.display = 'flex'; // فتح النافذة
    modalImg.src = img.src;
  });
});

// إغلاق عند الضغط على ×
closeImg.addEventListener('click', () => {
  imgModal.style.display = 'none';
});

// إغلاق عند الضغط خارج الصورة
imgModal.addEventListener('click', e => {
  if (e.target === imgModal) {
    imgModal.style.display = 'none';
  }
});
