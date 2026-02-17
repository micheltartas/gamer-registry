# 🎮 Gamer Registry

Sistema simples CRUD para ensino de testes de software.

## Tecnologias
- Node.js
- Express
- PostgreSQL
- Bootstrap

## Como rodar

### Banco
Crie o banco:

CREATE DATABASE gamer_registry;

Execute:
schema.sql
seed.sql

---

### Backend

cd backend
npm install
node server.js

---

### Frontend
Abrir index.html no navegador.

## Estrutura do Projeto

gamer-registry/
│
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── routes/
│   │    ├── gamers.routes.js
│   │    └── games.routes.js
│   └── package.json
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── frontend/
│   ├── index.html
│   ├── gamers.html
│   ├── games.html
│   └── script.js
│
└── README.md
