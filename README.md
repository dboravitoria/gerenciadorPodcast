# 🎧 Podcast Manager

Um app ao estilo Netflix para gerenciar e consumir **episódios de podcasts em vídeo**, organizados por categoria.

---

## 📌 Domínio

> **Podcasts em vídeo**  
A proposta é centralizar e categorizar episódios de diferentes podcasts, facilitando a descoberta e o acesso dos usuários a conteúdos de diversos temas.

---

## 📝 Descrição

Este projeto consiste em uma **API RESTful em Node.js puro (sem Express)**, que retorna uma lista de episódios de podcasts com suas informações principais.  
O objetivo é servir como base para um app visual onde os usuários possam explorar, assistir e filtrar conteúdos de acordo com seus interesses.

---

## 🚀 Features

- ✅ Listar episódios de podcasts por categoria  
  &nbsp;&nbsp;&nbsp;&nbsp;• Ex: `saúde`, `humor`, `fitness`, `mentalidade`, `tecnologia`
- 🔍 Filtrar episódios por nome do podcast

---



### 🧪 Como Rodar o Projeto

- git clone https://github.com/dboravitoria/gerenciadorPodcast
- cd gerenciadorPodcast
- npm install
- npx tsc
- npm run start

### 🔧 Variáveis de Ambiente
Crie um arquivo .env na raiz com o número da porta
    - PORT=3000

### 🗂️ Exemplo de podcast.json

```js
[
  {
    "title": "O começo de tudo",
    "podcastName": "Flow",
    "duration": "1h45min"
  },
  {
    "title": "Conversas aleatórias",
    "podcastName": "Inteligência Ltda",
    "duration": "2h15min"
  }
]

``