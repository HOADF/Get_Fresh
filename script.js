// script.js
document.addEventListener('DOMContentLoaded', () => {
  // год в футере
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // плавная прокрутка к якорям
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // обработка формы (локально)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const phone = form.querySelector('#phone').value.trim();
      const service = form.querySelector('#service').value;
      // В реальном проекте — отправка на сервер через fetch/ajax.
      alert(`Спасибо, ${name || 'Клиент'}!\nЗаявка принята.\nСервис: ${service}\nМы свяжемся по номеру: ${phone}`);
      form.reset();
    });
  }

  // добавим простой эффект: при скролле — хедер получает тень
  const header = document.getElementById('header');
  const onScroll = () => {
    if(window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});
