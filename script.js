document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botaomensagem');
    const mensagem = document.getElementById('mensagem');

    botao.addEventListener('click', () => {
        mensagem.textContent = 'Bem-vindo ao meu site!';
        mensagem.style.marginTop = '10px';
        mensagem.style.color = 'blue';
        mensagem.style.fontWeight = 'bold';
        });
    });