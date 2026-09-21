const express = require('express');
const cors = require('cors');
const ProdutosRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/produtos', ProdutosRoutes)

module.exports = app;   