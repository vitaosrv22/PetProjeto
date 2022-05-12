// Carregando Módulos
const express = require('express')
const app = express()
const routes = require('./src/routes/index.js');

// Configurações
app.use(express.static('public'));
app.set('views', __dirname + '/public/views');

// Ejs 
app.set('view engine', 'ejs')
app.use(routes);

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando!")
})