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

        if (!pessoa_id || !produto_id || !quantidade) {
            return res.status(400).json({
                mensagem: 'Todos os campos são obrigatórios'
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