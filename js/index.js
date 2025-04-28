// Script Index
console.log("index.js carregado");

// Função para garantir que a página volte ao topo quando for atualizada
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Código de carrossel e outros componentes
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que a página volte ao topo quando carregada
    window.scrollTo(0, 0);
    
    // Menu mobile foi movido para o arquivo mobile-menu.js
    
    // Código simplificado focado apenas no carrossel
    const carousel = document.querySelector('.services-carousel');
    const servicesGrid = document.querySelector('.services-grid');
    const cards = document.querySelectorAll('.service-card');
    const hoverLeft = document.querySelector('.hover-area-left');
    const hoverRight = document.querySelector('.hover-area-right');
    
    // Verificar se é um dispositivo móvel
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (servicesGrid && cards.length) {
        console.log('Inicializando carrossel...');
        let currentIndex = 0;
        const cardWidth = 300 + 32; // Width + gap
        const totalCards = cards.length;
        let hoverTimer = null;
        let touchStartX = 0;
        let touchEndX = 0;
        
        // Função para calcular quantos cards são visíveis por vez
        function getVisibleCards() {
            return window.innerWidth <= 768 ? 1 : 3;
        }
        
        function moveCarousel(direction) {
            const visibleCards = getVisibleCards();
            if (direction === 'left' && currentIndex > 0) {
                currentIndex--;
            } else if (direction === 'right' && currentIndex < totalCards - visibleCards) {
                currentIndex++;
            }
            
            servicesGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
        
        function startAutoMove(direction) {
            if (hoverTimer) {
                clearInterval(hoverTimer);
            }
            
            hoverTimer = setInterval(() => {
                moveCarousel(direction);
            }, 800);
        }
        
        function stopAutoMove() {
            if (hoverTimer) {
                clearInterval(hoverTimer);
                hoverTimer = null;
            }
        }
        
        // Eventos para desktop
        if (!isMobile) {
            console.log('Configurando eventos de desktop...');
            if (hoverLeft) {
                hoverLeft.addEventListener('mouseenter', () => {
                    startAutoMove('left');
                });
                hoverLeft.addEventListener('mouseleave', stopAutoMove);
                
                // Também adicionar evento de clique para maior compatibilidade
                hoverLeft.addEventListener('click', () => moveCarousel('left'));
            }
            
            if (hoverRight) {
                hoverRight.addEventListener('mouseenter', () => {
                    startAutoMove('right');
                });
                hoverRight.addEventListener('mouseleave', stopAutoMove);
                
                // Também adicionar evento de clique para maior compatibilidade
                hoverRight.addEventListener('click', () => moveCarousel('right'));
            }
        }
        
        // Suporte a gestos de toque para mobile
        if (isMobile) {
            console.log('Configurando eventos de touch para mobile...');
            if (carousel) {
                console.log('Elemento carrossel encontrado para deslize:', carousel);
                let isDragging = false;
                
                // Adicionar evento touchstart
                carousel.addEventListener('touchstart', (e) => {
                    isDragging = true;
                    touchStartX = e.changedTouches[0].screenX;
                    console.log('Touch start:', touchStartX);
                }, { passive: true });
                
                // Adicionar evento touchmove
                document.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    
                    // Obter posição atual do toque
                    const currentTouch = e.changedTouches[0];
                    const diffX = currentTouch.screenX - touchStartX;
                    
                    // Log para debug
                    console.log('Touch move, diff:', diffX);
                    
                    // Se o movimento horizontal for significativo, prevenir scroll da página
                    if (Math.abs(diffX) > 10) {
                        // Tentar prevenir o comportamento padrão
                        try {
                            e.preventDefault();
                        } catch (error) {
                            console.log('Não foi possível prevenir o comportamento padrão do touchmove');
                        }
                    }
                }, { passive: false });
                
                // Adicionar evento touchend
                document.addEventListener('touchend', (e) => {
                    if (!isDragging) return;
                    
                    isDragging = false;
                    touchEndX = e.changedTouches[0].screenX;
                    console.log('Touch end:', touchEndX);
                    handleSwipe();
                }, { passive: true });
                
                // Adicionar evento para cancelamento do toque
                document.addEventListener('touchcancel', () => {
                    isDragging = false;
                    console.log('Touch cancelado');
                }, { passive: true });
            } else {
                console.error('Elemento carrossel não encontrado para eventos de toque!');
            }
        }
        
        function handleSwipe() {
            const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
            const swipeDistance = touchEndX - touchStartX;
            console.log('Swipe distance:', swipeDistance);
            
            if (swipeDistance < -swipeThreshold) {
                // Swipe para a esquerda (próximo)
                console.log('Swipe para a esquerda detectado, movendo para a direita');
                moveCarousel('right');
            } else if (swipeDistance > swipeThreshold) {
                // Swipe para a direita (anterior)
                console.log('Swipe para a direita detectado, movendo para a esquerda');
                moveCarousel('left');
            }
        }
        
        // Prevenir comportamento padrão de arrastar imagens
        cards.forEach(card => {
            const images = card.getElementsByTagName('img');
            [...images].forEach(img => {
                img.addEventListener('dragstart', e => e.preventDefault());
            });
        });
        
        // Ajustar carrossel ao redimensionar janela
        window.addEventListener('resize', () => {
            // Garantir que não ultrapasse o limite ao mudar de tamanho de tela
            const visibleCards = getVisibleCards();
            if (currentIndex > totalCards - visibleCards) {
                currentIndex = totalCards - visibleCards;
                servicesGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
        });
    }
    
    // Voltaremos a adicionar as outras funcionalidades depois
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