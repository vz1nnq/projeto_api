const PedidoRepository = require('../repositories/pedidoRepository');

const listarPedidos = async (req, res) => {
    try{
        const resultado = await PedidoRepository.getAllPedidos();
        res.json(resultado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    };
};

const listarPedidosByPessoaID = async (req, res) => {
    try{
        const pessoa_id = req.params.pessoa_id;

        // verifica se é numero e se é positivo
        if (isNaN(pessoa_id) || pessoa_id <= 0) {
            return res.status(400).json({
                mensagem:"Insira um id valido"});
        }

        const resultado = await PedidoRepository.getPedidosByPessoaId(pessoa_id);
        res.json(resultado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

const criarPedido = async (req, res) => {
    try{
        const {pessoa_id, produto_id, quantidade} = req.body;

        // verifica se todos os campos tão preenchidos
        if (!pessoa_id || !produto_id || !quantidade) {
            return res.status(400).json({
                mensagem: 'Todos os campos são obrigatórios'
            });
        }
        // verifica se pessoa_id e produto_id sao inteiros e positivos
        if (!Number.isInteger(pessoa_id) || !Number.isInteger(produto_id) || pessoa_id <= 0 || produto_id <= 0) {
            return res.status(400).json({
                mensagem:"Id invalido"
            });
        }

        const resultado = await PedidoRepository.createPedido(pessoa_id, produto_id, quantidade);
        
        res.json(resultado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

module.exports = {listarPedidos, listarPedidosByPessoaID, criarPedido};