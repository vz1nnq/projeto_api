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

const criarProduto = async (req, res) => {
    try{
        const nome = req.body.nome;
        const preco = req.body.preco;
        const descricao = req.body.descricao;

        const resultado = await ProdutoRepository.criarProduto(nome, preco, descricao);

        res.json(resultado);

    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno'})
    }
};

const deletarProduto = async (req, res) => {
    try{
        const id = req.params.id;
        const resultado = await ProdutoRepository.deletarProduto(id);

        if (resultado === 0) {
            return res.status(404).json({mensagem:'Produto nao encontrado'});
        }

        res.status(200).json({mensagem:'Produto deletado com sucesso'})

    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno'})
    }
};

module.exports = {listarProdutos, listarProdutosByID, criarProduto, deletarProduto};