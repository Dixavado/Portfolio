const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Configurar o diretório de visualizações e o mecanismo de visualização EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configurar o diretório estático para arquivos públicos
app.use(express.static(path.join(__dirname, 'views/public')));

// Definir as rotas
app.get('/', (req, res) => {
  res.render('index', { title: 'Meu Website' });
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
