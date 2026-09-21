const ProdutoRepository = require('../repositories/produtoRepository');

const listarProdutos = async (req, res) => {
    try{
        const resultado = await ProdutoRepository.getAllProdutos();
        res.json(resultado);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

const listarProdutosByID = async (req, res) => {
    try{
        const id = req.params.id
        
        const resultado = await ProdutoRepository.getProdutoByID(id);
        res.json(resultado)
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Error'})
    }
};

module.exports = {listarProdutos, listarProdutosByID};