// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
if(menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });
}
// Botão WhatsApp flutuante
function addWhatsAppButton() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/554898160085?text=Ol%C3%A1%2C+gostaria+de+falar+sobre+im%C3%B3veis!';
  btn.className = 'whatsapp-float';
  btn.target = '_blank';
  btn.innerHTML = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.5 20.5C22.8333 21.5 21.5 22.5 19.5 22.5C17.5 22.5 15.5 21.5 13.5 19.5C11.5 17.5 10.5 15.5 10.5 13.5C10.5 11.5 11.5 10.1667 12.5 9.5C13.5 8.83333 14.5 8.5 15.5 8.5C16.5 8.5 17.5 8.83333 18.5 9.5C19.5 10.1667 20.5 11.5 20.5 13.5C20.5 15.5 19.5 17.5 17.5 19.5C15.5 21.5 13.5 22.5 11.5 22.5C9.5 22.5 8.16667 21.5 7.5 20.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(btn);
}
addWhatsAppButton();
// Animação de entrada para seções
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section, .portfolio-item, .hero, .contato-form').forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s';
      el.style.opacity = 1;
    }, 200);
  });
});
// Validação simples do formulário de contato
const contatoForm = document.querySelector('.contato-form');
if(contatoForm) {
  contatoForm.addEventListener('submit', function(e) {
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
    if(!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      e.preventDefault();
    } else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Digite um e-mail válido.');
      e.preventDefault();
    }
  });
} 