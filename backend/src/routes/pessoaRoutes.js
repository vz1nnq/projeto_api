const express = require('express');
const router = express.Router();

const PessoasController = require('../controllers/pessoaController');

router.get('/', PessoasController.listarPessoas);
router.get('/:id', PessoasController.listarPessoasByID);
router.post('/', PessoasController.criarPessoas);
router.delete('/:id', PessoasController.deletarPessoas);

module.exports = router;