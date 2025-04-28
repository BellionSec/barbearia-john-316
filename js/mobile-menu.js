/**
 * Script para gerenciar o menu mobile
 */
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;
    
    if (!menuButton || !navLinks) {
        console.error('Elementos do menu não encontrados');
        return;
    }
    
    // Função para alternar o menu
    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        // Alternar classes
        menuButton.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Garante que o menu esteja visível ou escondido imediatamente
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.opacity = '1';
        } else {
            setTimeout(function() {
                navLinks.style.display = '';
            }, 100); // Pequeno atraso apenas para o fechamento
        }
    }
    
    // Adicionar evento ao botão do menu
    menuButton.addEventListener('click', toggleMenu);
    
    // Fechar o menu ao clicar em um link
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Fechar o menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !menuButton.contains(event.target)) {
            toggleMenu();
        }
    });
    
    // Fechar o menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 