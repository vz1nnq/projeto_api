const express = require('express');
const router = express.Router();

const PedidoController = require('../controllers/pedidoController');

router.get('/', PedidoController.listarPedidos);
router.get('/pessoa/:pessoa_id', PedidoController.listarPedidosByPessoaID);
router.post('/', PedidoController.criarPedido);

module.exports = router;