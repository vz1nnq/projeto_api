const express = require('express');
const cors = require('cors');
const ProdutosRoutes = require('./routes/produtoRoutes');
const PessoaRoutes = require('./routes/pessoaRoutes');
const PedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/produtos', ProdutosRoutes);
app.use('/pessoas', PessoaRoutes);
app.use('/pedidos', PedidoRoutes);

module.exports = app;   