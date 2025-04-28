# Documentação de Estilos CSS

## Visão Geral
O projeto utiliza arquivos CSS organizados para criar um design consistente, responsivo e temático para a Barbearia John 3.16. O tema visual é escuro e elegante, com detalhes em tons dourados/marrom.

## Estrutura de Arquivos CSS

### Arquivos Principais
- **style.css**: Estilos globais e base do site
- **responsive.css**: Regras específicas para diferentes tamanhos de tela
- **animations.css**: Definições de animações e transições

## Padrões de Design

### Cores
- **Fundo Principal**: `#1E1E1E` (cinza escuro quase preto)
- **Cor de Destaque**: `#D5A97C` (dourado/marrom)
- **Texto Principal**: `#F5F0E5` (branco amarelado)
- **Texto Secundário**: `rgba(245, 240, 229, 0.7)` (branco amarelado com transparência)
- **Elementos de Fundo**: `rgba(30, 30, 30, 0.8)` (cinza escuro com transparência)
- **Bordas**: `rgba(213, 169, 124, 0.3)` (dourado com transparência)

### Tipografia
- **Fonte Principal**: 'Playfair Display', serif
- **Fonte Secundária**: 'Montserrat', sans-serif
- **Títulos**: Playfair Display com peso 700
- **Corpo de Texto**: Montserrat com peso 400
- **Tamanho Base**: 16px
- **Escalas de Tamanho**:
  - Títulos principais: 2.5rem - 3.5rem
  - Subtítulos: 1.8rem - 2.2rem
  - Texto normal: 1rem - 1.2rem

### Layout
- **Grid System**: Utiliza CSS Grid e Flexbox
- **Containers**: Largura máxima de 1200px centralizada
- **Espaçamento**: Sistema consistente de padding e margin
- **Breakpoints**:
  - Mobile: até 576px
  - Tablet: 577px - 896px
  - Desktop: acima de 897px

## Componentes Estilizados

### Navegação
- Menu desktop horizontal com transição suave
- Menu mobile com animação de deslizamento
- Indicador de seção ativa
- Botão hamburger com animação

### Cards
- Cards de serviço com hover effect
- Cards de planos com destaque para o plano mais popular
- Cards de barbeiros com efeito de zoom na imagem
- Cards de FAQ com expansão suave

### Botões
- Botão primário com fundo dourado
- Botão secundário com borda dourada e fundo transparente
- Botões com hover effect
- Botão de voltar ao topo com fade in/out

### Elementos Interativos
- Carrosséis com navegação por swipe ou hover
- Áreas clicáveis com feedback visual
- Indicadores de navegação para carrosséis
- Formulários com feedback de validação

## Classes Utilitárias
- `.container`: Container centralizado com largura máxima
- `.section-title`: Estilo padrão para títulos de seção
- `.flex-center`: Centralizador com flexbox
- `.animate-prepare`: Preparação para animações de entrada
- `.animate-in`: Aplicação de animações de entrada

## Animações Principais
- **Fade In**: Elementos surgem suavemente
- **Slide Up**: Elementos deslizam para cima ao aparecer
- **Pulse**: Pulsação suave para botões de destaque
- **Bounce**: Pequeno efeito de salto para elementos interativos
- **Rotate**: Rotação para elementos como o ícone de menu

## Approach Responsivo
- **Mobile First**: Design base para dispositivos móveis
- **Progressive Enhancement**: Adição de features para telas maiores
- **Layout Adaptativo**: Mudanças de layout conforme breakpoints
- **Imagens Responsivas**: Otimizadas para diferentes tamanhos de tela

## Boas Práticas Implementadas
- Nomenclatura de classes semânticas
- Organização por componentes
- Variáveis CSS para temas consistentes
- Prefixos para animações
- Otimização de performance em animações 