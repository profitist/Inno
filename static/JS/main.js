// AI Assistant Chat Toggle
const aiBtn = document.getElementById('aiBtn');
const aiChat = document.getElementById('aiChat');
const closeAi = document.getElementById('closeAi');

aiBtn.addEventListener('click', () => {
  aiChat.style.display = 'block';
  aiBtn.style.display = 'none';
});

closeAi.addEventListener('click', () => {
  aiChat.style.display = 'none';
  aiBtn.style.display = 'block';
});

// Role selection animation
const roleBtns = document.querySelectorAll('.role-btn');
roleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    roleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Можно добавить редирект или показ модального окна регистрации
  });
});

// Модальное окно входа
const modalBg = document.getElementById('modalBg');
const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModal() {
  modalBg.classList.add('active');
}
function closeModal() {
  modalBg.classList.remove('active');
}
if (openModalBtn) openModalBtn.onclick = openModal;
if (openModalBtn2) openModalBtn2.onclick = openModal;
if (closeModalBtn) closeModalBtn.onclick = closeModal;

// Закрытие по клику вне формы
if (modalBg) {
  modalBg.addEventListener('mousedown', (e) => {
    if (e.target === modalBg) closeModal();
  });
}
// Предотвращаем submit (заглушка)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.onsubmit = (e) => {
    e.preventDefault();
    closeModal();
    alert('Вход выполнен (заглушка)');
  };
}
