const express = require('express');

const router = express.Router();
const ProdutoController = require('../controllers/produtoController');

router.get('/', ProdutoController.listarProdutos);
router.get('/:id', ProdutoController.listarProdutosByID);

module.exports = router;