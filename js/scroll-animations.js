/**
 * Biblioteca de animações de scroll para Barbearia John 3.16
 * Utiliza a Intersection Observer API para detectar quando elementos entram na viewport
 * e adiciona classes de animação para criar efeito de surgimento.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Garantir que não haja problemas de layout iniciais
    const fixLayoutBeforeAnimations = () => {
        // Define a cor de fundo do body inicialmente como escura
        document.body.style.backgroundColor = '#1E1E1E';
        document.documentElement.style.backgroundColor = '#1E1E1E';
        
        document.body.style.opacity = '0.99';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 10);
    };
    
    fixLayoutBeforeAnimations();
    
    // Inicializa o Map para armazenar animações específicas por seção
    const sectionAnimations = new Map();
    
    // Seleciona todos os elementos que devem ser animados
    const sections = document.querySelectorAll('section:not(.hero):not(.bg-separator-1)');
    const serviceCards = document.querySelectorAll('.service-card');
    const subscriptionCards = document.querySelectorAll('.subscription-card');
    const barberCards = document.querySelectorAll('.barber-card-new');
    const contactItems = document.querySelectorAll('.contact-item, .map-container, .contact-social, .scheduling-wrapper');
    const socialCards = document.querySelectorAll('.social-card');
    const appButtons = document.querySelectorAll('.app-button');
    
    // Seleciona as seções hero e "experiência premium" para animar
    const heroSection = document.querySelector('.hero');
    const experienceSection = document.querySelector('.section-with-bg.bg-separator-1');
    const heroContent = document.querySelector('.hero-content');

    // Aplica classes de animação específicas para a seção hero
    if (heroSection) {
        heroSection.style.opacity = '0';
        setTimeout(() => {
            heroSection.style.transition = 'opacity 1.5s ease-out';
            heroSection.style.opacity = '1';
        }, 100);
    }
    
    // Anima o conteúdo do hero com um efeito diferente
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Anima a seção "experiência premium" com um efeito mais destacado
    if (experienceSection) {
        // Garante que qualquer estilo inline não interfira na animação
        experienceSection.style.removeProperty('opacity');
        experienceSection.style.removeProperty('transform');
        experienceSection.style.removeProperty('transition');
        
        // Define o estilo inicial para a animação
        experienceSection.style.opacity = '0';
        experienceSection.style.transform = 'translateY(30px)';
        
        // Aplica a animação após um pequeno atraso
        setTimeout(() => {
            experienceSection.style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
            experienceSection.style.opacity = '1';
            experienceSection.style.transform = 'translateY(0)';
            
            // Garante que o conteúdo da seção também seja animado
            const experienceContent = experienceSection.querySelector('.content');
            if (experienceContent) {
                experienceContent.style.opacity = '0';
                experienceContent.style.transform = 'translateY(15px)';
                
                setTimeout(() => {
                    experienceContent.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
                    experienceContent.style.opacity = '1';
                    experienceContent.style.transform = 'translateY(0)';
                }, 100);
            }
        }, 600);
    }

    // Configuração do Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.02 // 2% do elemento visível
    };

    // Função de callback para quando um elemento é observado
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe de animação quando o elemento fica visível
                entry.target.classList.add('animate-in');
                // Para de observar o elemento após a animação
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Função para inicializar as animações em um grupo de elementos
    const initAnimations = (elements, delay = 0, stagger = 25) => {
        elements.forEach((element, index) => {
            // Pula a primeira seção após o hero
            if (element === experienceSection) return;
            
            // Adiciona classe para preparar o elemento para animação
            element.classList.add('animate-prepare');
            // Define o atraso da animação baseado no índice
            element.style.transitionDelay = `${delay + (index * stagger)}ms`;
            // Observa o elemento
            observer.observe(element);
        });
    };

    // Inicializa as animações para cada grupo de elementos
    initAnimations(sections, 0, 40);
    initAnimations(serviceCards, 20, 30);
    initAnimations(subscriptionCards, 20, 30);
    initAnimations(barberCards, 20, 30);
    initAnimations(contactItems, 20, 30);
    initAnimations(socialCards, 30, 20);
    
    // Inicializa as animações dos botões de app com um stagger maior para criar efeito de defasagem
    initAnimations(appButtons, 50, 300);

    // Defasa ligeiramente a animação dos botões de app
    appButtons.forEach((button, index) => {
        if (index > 0) {
            // Defasa a animação de pulso para que não estejam sincronizados
            button.style.animationDelay = `${index * 0.7}s`;
        }
    });

    // Garante que todas as seções tenham fundo escuro
    document.querySelectorAll('section').forEach(section => {
        section.style.backgroundColor = '#1E1E1E';
    });
    
    // Garante que main tenha fundo escuro
    const main = document.querySelector('main');
    if (main) {
        main.style.backgroundColor = '#1E1E1E';
    }

    // Animações para a seção de FAQ
    const faqSection = document.querySelector('.faq-section');
    const faqTitle = document.querySelector('.faq-title');
    const mustacheIcon = document.querySelector('.mustache-icon');
    const faqCards = document.querySelectorAll('.faq-card');

    if (faqSection && faqTitle && faqCards.length) {
        // Prepara os elementos para animação
        faqTitle.classList.add('animate-prepare');
        
        // Garantir que o ícone de bigode não fique invisível
        if (mustacheIcon) {
            // Não adicionar classe de animação prepare ao mustache-icon
            // mustacheIcon.classList.add('animate-prepare');
            
            // Deixar o ícone visível de imediato
            mustacheIcon.style.opacity = '1';
            mustacheIcon.style.visibility = 'visible';
            mustacheIcon.style.transform = 'translateY(0) scale(1)';
        }
        
        faqCards.forEach(card => {
            card.classList.add('animate-prepare');
        });
        
        // Configura o observer para a seção de FAQ
        observer.observe(faqSection);
        
        // Função para animar os elementos da FAQ quando entrarem na tela
        function animateFaqElements() {
            // Anima o título primeiro
            setTimeout(() => {
                faqTitle.classList.add('animate-in');
                
                // Garantir que o ícone de bigode esteja sempre visível
                if (mustacheIcon) {
                    mustacheIcon.classList.add('animate-in');
                    mustacheIcon.style.opacity = '1';
                    mustacheIcon.style.visibility = 'visible';
                }
            }, 100);
            
            // Anima os cards com um atraso em cascata
            faqCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, 200 + (index * 100)); // 200ms de atraso inicial, mais 100ms por card
            });
        }
        
        // Adiciona a função de animação à lista
        sectionAnimations.set(faqSection, animateFaqElements);
    }
}); 