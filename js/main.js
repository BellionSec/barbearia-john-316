// Funções de validação
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarSenha(senha) {
    // Mínimo 8 caracteres, pelo menos uma letra e um número
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(senha);
}

// Funções de manipulação do DOM
function mostrarMensagem(mensagem, tipo = 'info') {
    const div = document.createElement('div');
    div.className = `mensagem mensagem-${tipo}`;
    div.textContent = mensagem;
    
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 3000);
}

function carregarDados(endpoint) {
    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            mostrarMensagem('Erro ao carregar dados. Tente novamente.', 'erro');
        });
}

// Funções de formatação
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function formatarData(data) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(data));
}

// Funções de navegação
function redirecionar(pagina, parametros = {}) {
    const url = new URL(pagina, window.location.origin);
    
    Object.keys(parametros).forEach(key => {
        url.searchParams.append(key, parametros[key]);
    });
    
    window.location.href = url.toString();
}

// Menu mobile foi movido para o arquivo mobile-menu.js

// Funções gerais
console.log("main.js carregado");

// Função para garantir que a página volte ao topo quando for atualizada
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Botão de voltar ao topo
document.addEventListener('DOMContentLoaded', () => {
    // Garantir que a página volte ao topo quando carregada
    window.scrollTo(0, 0);
    
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Função para garantir que o fundo da página permaneça escuro
function ensureDarkBackground() {
    // Seleciona elementos principais que devem ter fundo escuro
    const elementsToFix = [
        document.documentElement,
        document.body,
        document.querySelector('main'),
        document.querySelectorAll('section:not(.section-with-bg.bg-separator-1)') // Excluir a seção de experiência premium
    ];
    
    // Define a cor de fundo como escura em cada elemento
    elementsToFix[0].style.backgroundColor = '#1E1E1E';
    elementsToFix[1].style.backgroundColor = '#1E1E1E';
    
    if (elementsToFix[2]) {
        elementsToFix[2].style.backgroundColor = '#1E1E1E';
    }
    
    elementsToFix[3].forEach(section => {
        if (!section.classList.contains('bg-separator-1')) {
            section.style.backgroundColor = '#1E1E1E';
        }
    });
    
    // Certifica que a seção hero tenha visibilidade correta mesmo com as novas animações
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundColor = '#1E1E1E';
        // Evitamos definir opacity aqui para não interferir com as animações
    }
    
    // Garante que a primeira seção após o hero tenha visibilidade total e fundo escuro
    const firstSectionAfterHero = document.querySelector('.section-with-bg.bg-separator-1');
    if (firstSectionAfterHero) {
        firstSectionAfterHero.style.backgroundColor = '#1E1E1E';
        // Evitamos definir opacity aqui para não interferir com as animações
        
        // Elimina qualquer gap entre o hero e a primeira seção, sem afetar as animações
        if (hero) {
            hero.style.marginBottom = '-2px';
        }
    }
}

// Função para corrigir a visibilidade dos textos em seções específicas
function fixTextVisibility() {
    // Ajustes para seção de barbeiros
    const barbersTitle = document.querySelector('.barbers h2');
    if (barbersTitle) {
        barbersTitle.style.color = '#D5A97C';
        barbersTitle.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
        barbersTitle.style.padding = '2rem 1rem 1rem';
        barbersTitle.style.display = 'block';
        barbersTitle.style.width = '100%';
        barbersTitle.style.textAlign = 'center';
    }
    
    // Ajustes para cartões de barbeiros
    const barberCards = document.querySelectorAll('.barber-card-new');
    barberCards.forEach(card => {
        // Remover qualquer padding interno
        card.style.padding = '0';
        card.style.overflow = 'hidden';
        card.style.position = 'relative';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.height = '400px'; // Altura fixa para melhor consistência
        card.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
        card.style.border = '1px solid rgba(213, 169, 124, 0.3)';
        
        // Ajustar o título para ficar sobreposto à imagem na parte inferior
        const title = card.querySelector('h3');
        if (title) {
            title.style.color = '#D5A97C';
            title.style.textAlign = 'center';
            title.style.position = 'absolute';
            title.style.bottom = '0';
            title.style.left = '0';
            title.style.right = '0';
            title.style.margin = '0';
            title.style.padding = '1rem';
            title.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
            title.style.zIndex = '2';
            title.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.7)';
        }
        
        // Ajustar o container da imagem
        const imageContainer = card.querySelector('.barber-image-new');
        if (imageContainer) {
            imageContainer.style.width = '100%';
            imageContainer.style.height = '100%';
            imageContainer.style.overflow = 'hidden';
            
            // Ajustar a imagem
            const image = imageContainer.querySelector('img');
            if (image) {
                image.style.width = '100%';
                image.style.height = '100%';
                image.style.objectFit = 'cover';
                image.style.objectPosition = 'center top';
                image.style.transition = 'transform 0.3s ease';
            }
        }
    });
    
    // Ajustes para seção Sobre Nós
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.style.backgroundColor = '#1E1E1E';
        aboutSection.style.padding = '4rem 2rem';
        
        const aboutTitle = aboutSection.querySelector('h2');
        if (aboutTitle) {
            aboutTitle.style.color = '#D5A97C';
            aboutTitle.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
            aboutTitle.style.marginBottom = '2rem';
        }
        
        const aboutParagraphs = aboutSection.querySelectorAll('p');
        aboutParagraphs.forEach(p => {
            p.style.color = '#F5F0E5';
            p.style.lineHeight = '1.8';
        });
    }
    
    // Ajustes para todos os títulos de seção
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        title.style.color = '#D5A97C';
        title.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
    });
    
    // Ajustes para o rodapé
    const footer = document.querySelector('.footer');
    if (footer) {
        // Remove estilos inline e aplica estilos do CSS
        footer.removeAttribute('style');
        
        const footerInfo = footer.querySelector('.footer-info p');
        if (footerInfo) {
            footerInfo.removeAttribute('style');
        }
        
        const socialIcons = footer.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.removeAttribute('style');
        });
    }
}

// Executa a função quando o DOM estiver carregado e após um pequeno delay
document.addEventListener('DOMContentLoaded', () => {
    // Aplicação imediata
    ensureDarkBackground();
    fixTextVisibility();
    
    // Aplicação após um pequeno delay para garantir que os estilos CSS foram aplicados
    setTimeout(() => {
        ensureDarkBackground();
        fixTextVisibility();
    }, 100);
    
    setTimeout(() => {
        ensureDarkBackground();
        fixTextVisibility();
    }, 500);
    
    setTimeout(() => {
        ensureDarkBackground();
        fixTextVisibility();
    }, 1000);
    
    // Verifica o fundo quando a página for rolada
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            ensureDarkBackground();
            fixTextVisibility();
        });
    });
});

// Funcionalidade para a seção de FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqCards = document.querySelectorAll('.faq-card');
    const mustacheIcon = document.querySelector('.mustache-icon');
    
    if (faqCards.length) {
        faqCards.forEach(card => {
            const question = card.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const wasActive = card.classList.contains('active');
                
                // Fecha todas as outras perguntas imediatamente
                faqCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                        // Força o reflow para aplicar imediatamente o efeito de fechamento
                        otherCard.offsetHeight;
                    }
                });
                
                // Se já estava ativo, apenas remove a classe (fecha mais rápido)
                if (wasActive) {
                    card.classList.remove('active');
                } else {
                    // Abre imediatamente sem delay
                    card.classList.add('active');
                }
            });
        });
    }
    
    // Adiciona animação aos elementos quando aparecem na tela
    const faqSection = document.querySelector('.faq-section');
    const faqTitle = document.querySelector('.faq-title');
    
    if (faqSection && faqTitle) {
        // Adiciona classe para preparar animação
        faqTitle.classList.add('animate-prepare');
        
        faqCards.forEach((card, index) => {
            card.classList.add('animate-prepare');
            
            // Configura um atraso diferente para cada card, criando um efeito cascata
            setTimeout(() => {
                card.classList.add('animate-in');
            }, 100 + (index * 100)); // 100ms de atraso inicial, mais 100ms por card
        });
        
        // Anima o título primeiro
        setTimeout(() => {
            faqTitle.classList.add('animate-in');
        }, 100);
    }
});

// Função para inicializar os indicadores de navegação dos planos
function initializeSubscriptionIndicators() {
    const subscriptionGrid = document.querySelector('.subscription-grid');
    const indicators = document.querySelectorAll('.subscription-indicators .indicator');
    
    if (!subscriptionGrid || indicators.length === 0) return;
    
    // Atualiza o indicador ativo com base no card visível
    function updateSubscriptionIndicator() {
        if (window.innerWidth > 896 || window.orientation === 'portrait') return;
        
        const cards = document.querySelectorAll('.subscription-card');
        const scrollLeft = subscriptionGrid.scrollLeft;
        const cardWidth = subscriptionGrid.scrollWidth / cards.length;
        const activeIndex = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);
        
        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Adiciona evento de scroll para o grid
    subscriptionGrid.addEventListener('scroll', updateSubscriptionIndicator);
    
    // Adiciona evento de clique para os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const cards = document.querySelectorAll('.subscription-card');
            const cardWidth = subscriptionGrid.scrollWidth / cards.length;
            subscriptionGrid.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        });
    });
}

// Função para inicializar os indicadores de navegação dos barbeiros
function initializeBarbersIndicators() {
    const barbersGrid = document.querySelector('.barbers-grid');
    const indicators = document.querySelectorAll('.barbers-indicators .indicator');
    
    if (!barbersGrid || indicators.length === 0) return;
    
    // Atualiza o indicador ativo com base no card visível
    function updateBarbersIndicator() {
        if (window.innerWidth > 896 || window.orientation === 'portrait') return;
        
        const cards = document.querySelectorAll('.barber-card-new');
        const scrollLeft = barbersGrid.scrollLeft;
        const cardWidth = barbersGrid.scrollWidth / cards.length;
        const activeIndex = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);
        
        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Adiciona evento de scroll para o grid
    barbersGrid.addEventListener('scroll', updateBarbersIndicator);
    
    // Adiciona evento de clique para os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const cards = document.querySelectorAll('.barber-card-new');
            const cardWidth = barbersGrid.scrollWidth / cards.length;
            barbersGrid.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        });
    });
}

// Define as funções que são chamadas na inicialização
function setupMenuToggle() {
    // Esta função é implementada no arquivo mobile-menu.js
    console.log("Menu toggle é gerenciado pelo mobile-menu.js");
}

function setupSmoothScroll() {
    // Implementa funcionalidade de rolagem suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Se for apenas #, role para o topo da página
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // Verificar se o href começa com # e não é apenas #
            if (href && href !== '#') {
                try {
                    // Tentar encontrar o elemento usando o ID
                    const targetId = href.substring(1); // Remove o # inicial
                    const target = document.getElementById(targetId);
                    
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.log("Erro ao rolar para:", href);
                }
            }
        });
    });
}

function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Inicializar as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setupMenuToggle();
    setupSmoothScroll();
    setupBackToTop();
    initializeSubscriptionIndicators();
    initializeBarbersIndicators(); // Adicionar inicialização dos indicadores dos barbeiros
    ensureDarkBackground();
}); 