const express = require('express');
const cors = require('cors');
const ProdutosRoutes = require('./routes/produtoRoutes');
const PessoaRoutes = require('./routes/pessoaRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/produtos', ProdutosRoutes)
app.use('/pessoas', PessoaRoutes)

module.exports = app;   