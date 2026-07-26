# Receitas de Minas 

Um aplicativo web moderno, responsivo e elegante desenvolvido em **Next.js** e **Tailwind CSS**. O projeto apresenta uma seleção de receitas tradicionais mineiras com uma paleta de cores personalizada inspirada em tons de terra, café e doce de leite.

---

## Funcionalidades

* **Listagem de Receitas:** Navegação fluida por pratos típicos.
* **Página de Detalhes Dinâmica:** Renderização assíncrona baseada em IDs (`app/receitas/[id]`).
* **Design 100% Responsivo:** Interface otimizada para celulares, tablets e computadores usando técnicas avançadas de Grid e Flexbox com Tailwind.
* **Componentes Lucide React:** Ícones minimalistas para navegação intuitiva.
* **Notificações em Tempo Real:** Feedback visual fluido usando Sonner ao realizar operações no sistema.

---

## Paleta de Cores (Identidade Visual)

A identidade visual foi completamente customizada para fugir dos padrões óbvios e trazer a sensação de um caderno de receitas antigo:
* **Fundo Aconchegante:** Tons suaves de creme (`bg-amber-50/30`)
* **Textos Rústicos:** Contraste marcante em marrom profundo (`text-amber-950`)
* **Detalhes Especiais:** Realces em tons de café e doce de leite (`bg-amber-100`, `text-amber-700`)

---

## Tecnologias Utilizadas

* [Next.js](https://nextjs.org/) (App Router & Componentes Assíncronos)
* [React](https://react.dev/) 
* [Tailwind CSS](https://tailwindcss.com/) (Estilização Utilitária & Responsividade)
* [TypeScript](https://www.typescriptlang.org/) (Tipagem Estática Segura)
* [Lucide React](https://lucide.dev/) (Biblioteca de Ícones)
* [Sonner](https://sonner.emilkowal.ski/) (Notificações em Toast)

---

## Backend e Integração com API

O projeto consome uma API REST para realizar as operações de leitura, criação, edição e exclusão (CRUD) das receitas.

* **Base do Backend:** API desenvolvida originalmente por Talles Morais.
* **Versão original da API:** [Repositório da API de Receitas](https://github.com/talles-morais/receitas-byron.git)
* **Versão Modificada com as receitas:** [Repositório da API de Receitas Mineiras](https://github.com/anacmeira/api-receitas-mineiras.git)
* **Repositório do Frontend (Site):** [Repositório do Site Receitas de Minas](https://github.com/anacmeira/Receitas.git)

---

## Como Executar o Projeto Localmente

Siga os passos abaixo para executar a API e o Frontend na sua máquina:

### Passo 1: Configurar e rodar a API (Backend)

1. Abra o terminal na sua máquina.
2. Clone o repositório da API:
   git clone https://github.com/anacmeira/api-receitas-mineiras.git
3. Entre na pasta da API:
   cd api-receitas-mineiras
4. Instale as dependências:
   npm install
5. Inicie o servidor da API:
   npm run dev

Atenção: Mantenha essa janela do terminal aberta rodando a API.

---

### Passo 2: Configurar e rodar o Site (Frontend)

Abra uma nova janela/aba do terminal (sem fechar a da API).

1. Clone o repositório do frontend do site:
   git clone https://github.com/anacmeira/Receitas.git
2. Entre na pasta do projeto:
   cd Receitas
3. Instale as dependências do projeto:
   npm install
4. Inicie o projeto do site:
   npm run dev

---

### Passo 3: Acessar a Aplicação

Com ambos os terminais executando os projetos, abra o seu navegador e acesse:

 http://localhost:3000
