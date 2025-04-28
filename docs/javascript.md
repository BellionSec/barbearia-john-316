# Documentação JavaScript

## Visão Geral
Este projeto utiliza arquivos JavaScript modulares e organizados por função. Cada arquivo tem uma responsabilidade específica, o que facilita a manutenção e o desenvolvimento contínuo.

## main.js
Arquivo principal que contém funções utilizadas em todo o site.

### Funções de Validação
- `validarEmail(email)`: Valida o formato de um endereço de e-mail
- `validarSenha(senha)`: Valida se uma senha atende aos requisitos mínimos

### Funções de Manipulação do DOM
- `mostrarMensagem(mensagem, tipo)`: Exibe mensagens temporárias para o usuário
- `carregarDados(endpoint)`: Realiza requisições fetch e trata erros

### Funções de Formatação
- `formatarMoeda(valor)`: Formata valores para o padrão monetário brasileiro
- `formatarData(data)`: Formata datas no padrão brasileiro

### Funções de Navegação
- `redirecionar(pagina, parametros)`: Redireciona para outra página com parâmetros

### Funções de Interface
- `ensureDarkBackground()`: Garante que o fundo das seções permaneça escuro
- `fixTextVisibility()`: Ajusta a visibilidade e estilo de textos em seções específicas

### Carregamento e Inicialização
- `setupMenuToggle()`: Inicializa o menu mobile (redirecionamento para mobile-menu.js)
- `setupSmoothScroll()`: Configura rolagem suave para links internos
- `setupBackToTop()`: Inicializa o botão de voltar ao topo
- `initializeSubscriptionIndicators()`: Configuração dos indicadores para planos
- `initializeBarbersIndicators()`: Configuração dos indicadores para barbeiros

## mobile-menu.js
Implementação específica para o menu mobile.

### Funcionalidades
- Toggle do menu ao clicar no botão hamburger
- Fechamento do menu ao clicar em links
- Fechamento do menu ao clicar fora
- Ajustes responsivos para diferentes tamanhos de tela

### Comportamentos
- Aplicação imediata de estilos para evitar flashes visuais
- Transições suaves para abrir e fechar o menu
- Bloqueio do scroll da página quando o menu está aberto

## index.js
Funções específicas para a página inicial.

### Carrossel de Serviços
- Navegação com áreas de hover (desktop)
- Suporte a eventos de toque (mobile)
- Auto-scroll ao manter o mouse em áreas específicas
- Configurações responsivas

### Outros Controles
- Botão de voltar ao topo
- Suporte para diferentes tamanhos de tela

## scroll-animations.js
Implementação de animações baseadas no scroll da página.

### Tecnologias Utilizadas
- Intersection Observer API para detectar elementos no viewport
- Transições CSS para efeitos visuais

### Comportamentos
- Animações em cascata para elementos sequenciais
- Diferentes tipos de animação para diferentes seções
- Otimizações de performance para evitar travamentos

### Funções Principais
- `fixLayoutBeforeAnimations()`: Prepara o layout antes de iniciar animações
- `initAnimations()`: Configura as animações para diferentes grupos de elementos
- `observerCallback()`: Responde quando elementos entram no viewport

## Integração entre Arquivos
- `main.js` contém funções base utilizadas em todo o site
- `mobile-menu.js` é carregado em todas as páginas para garantir navegação consistente
- `index.js` contém código específico para a página inicial
- `scroll-animations.js` gerencia animações globais do site

## Boas Práticas Implementadas
- Separação de responsabilidades entre arquivos
- Nomes de funções descritivos
- Comentários explicativos em seções importantes
- Código modular e reutilizável
- Tratamento de erros para garantir robustez 