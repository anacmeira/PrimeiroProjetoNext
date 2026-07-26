# Receitas de Minas 

Um aplicativo web moderno, responsivo e elegante desenvolvido em **Next.js**, **Tailwind CSS** e **TypeScript**. O projeto apresenta uma seleção de receitas tradicionais mineiras com uma paleta de cores personalizada inspirada em tons de terra, café e doce de leite, além de integrar uma API completa para gerenciamento das receitas.

---

## Funcionalidades

* **Listagem e Busca de Receitas:** Navegação fluida por pratos típicos com filtro por nome e categoria em tempo real.
* **Gerenciamento Completo (CRUD):** Criação, edição e exclusão de receitas diretamente na interface com modais interativos.
* **Notificações em Tempo Real:** Feedback visual moderno e fluido com a biblioteca **Sonner** para cada ação (sucesso ou erro ao salvar/deletar receitas).
* **Página de Detalhes Dinâmica:** Renderização assíncrona baseada nos IDs das receitas (`app/receitas/[id]`).
* **Design 100% Responsivo:** Interface otimizada para celulares, tablets e computadores usando técnicas avançadas de Grid e Flexbox com Tailwind.
* **Componentes Lucide React:** Ícones minimalistas para navegação e ações intuitivas.

---

## Paleta de Cores (Identidade Visual)

A identidade visual foi completamente customizada para trazer a sensação aconchegante de um caderno de receitas antigo:
* **Fundo Aconchegante:** Tons suaves de creme (`bg-amber-50/40`)
* **Textos Rústicos:** Contraste marcante em marrom profundo (`text-amber-950`)
* **Detalhes Especiais:** Realces em tons de café e doce de leite (`bg-amber-800`, `bg-amber-100/50`, `text-amber-700`)

---

## Tecnologias Utilizadas

* [Next.js](https://nextjs.org/) (App Router & Componentes de Cliente/Servidor)
* [React](https://react.dev/) 
* [Tailwind CSS](https://tailwindcss.com/) (Estilização Utilitária & Responsividade)
* [TypeScript](https://www.typescriptlang.org/) (Tipagem Estática Segura)
* [Axios](https://axios-http.com/) (Consumo e integração com a API)
* [Sonner](https://sonner.emilkow.com/) (Sistema de Notificações / Toasts)
* [Lucide React](https://lucide.dev/) (Biblioteca de Ícones)

---

## Backend e Integração com a API

O frontend consome uma API REST responsável pela persistência e gerenciamento dos dados das receitas.

- **Base da API:** Desenvolvida originalmente por Talles.
- **Versão Modificada:** https://github.com/anacmeira/api-receitas-mineiras.git

> **Nota:** As nossas receitas foram cadastradas diretamente na base de dados (`db.json`) desta API adaptada.

---

## Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

### 1. Iniciar o Backend (API)

Como o frontend consome a API para carregar, criar, editar e excluir receitas, é necessário que o backend esteja em execução:

```bash
# Clone o repositório da API
git clone [https://github.com/anacmeira/API-Receitas.git](https://github.com/anacmeira/API-Receitas.git)

# Acesse a pasta da API
cd API-Receitas

# Instale as dependências
npm install

# Inicie o servidor da API (geralmente roda na porta 3000 ou 3001)
npm run dev
