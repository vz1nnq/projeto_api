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
        // se o id é valido e positivo
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensagem:"Insira um id valido"
            });
        }

        const resultado = await ProdutoRepository.getProdutoByID(id);
        // valida se o produto foi encontrado ou retornou null/undefined
        if (!resultado) {
            return res.status(404).json({
                mensagem:"Produto não encontrado"
            })
        }

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

        // validar se nome e preco foram preenchidos
        if (!nome) {
            return res.status(400).json({
                mensagem:"O campo nome deve ser preenchido"
            });
        }

        if (!preco) {
            return res.status(400).json({
                mensagem:"O campo nome deve ser preenchido"
            });
        }
        //validar se preco é um numero valido e positivo
        if (isNaN(preco) || preco < 0) {
            return res.status(400).json({
                mensagem:"Preço invalido"
            });
        }
        // valida se nome é vazio ou cheios de espaços em branco
        if (!nome || nome.trim().length === 0) {
            return res.status(400).json({
                mensagem: "Nome não pode ser vazio ou conter apenas espaços"
            });
        }

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
        // validar se o id é valido e maior que 0
        if (!Number.isInteger(id) || id < 0) {
            return res.status(400).json({
                mensagem:"Insira um id valido"
            });
        }

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