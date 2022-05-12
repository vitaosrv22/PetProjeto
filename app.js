// Carregando Módulos
const express = require('express')
const app = express()

// Configurações
app.use(express.static('public'));
app.set('views', __dirname + '/public/views');

// Ejs 
app.set('view engine', 'ejs')

// Rotas
require('./config/rotas.js')(app);

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando!")
})