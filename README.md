# 🔢 Super Contador

> Aplicação web para exercitar **Lógica de Algoritmos** e estruturas de repetição (`for`).

Este projeto é um contador inteligente que permite ao usuário gerar sequências numéricas personalizadas. Ele é capaz de realizar contagens progressivas e regressivas, além de validar os dados de entrada para evitar erros de execução.

## Tecnologias Utilizadas

- **HTML5** (Semântica e inputs)
- **CSS3** (Layout responsivo com Flexbox)
- **JavaScript** (Lógica condicional e laços de repetição)

## Funcionalidades

- [x] **Contagem Progressiva:** Conta do início ao fim com incremento positivo (ex: 0 a 10, passo 1).
- [x] **Contagem Regressiva:** Identifica automaticamente quando o início é maior que o fim e realiza a subtração (ex: 10 a 0, passo -1).
- [x] **Validação de Segurança:**
    - Bloqueia a execução se o "Passo" for zero (o que causaria um loop infinito).
    - Preenche valores padrão caso os campos estejam vazios.
- [x] **Feedback Visual:** Utiliza emojis (👉 e 🏁) inseridos via JavaScript (Unicode) para melhorar a experiência do usuário.

## Aprendizados e Destaques do Código

O maior desafio deste projeto foi lidar com as diferentes possibilidades de entrada do usuário:

1. **Lógica de Loop (`for`):** Utilizei a estrutura `for` permitindo que a variável de controle seja incrementada (`cont = cont + passo`) de forma dinâmica.
2. **Controle de Fluxo (`if/else`):** Implementei verificações para decidir se a contagem deve somar ou subtrair, dependendo se o valor inicial é maior ou menor que o final.
3. **Unicode no JS:** Aprendi a manipular strings inserindo emojis diretamente pelo código (`\u{1F449}`) para dar feedback visual a cada iteração.

## Como rodar o projeto

1. Clone este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Defina um início, um fim e um passo (ex: Início 0, Fim 20, Passo 2) e clique em "Contar".

---
Desenvolvido por **Fabio** durante estudos de Lógica de Programação.
