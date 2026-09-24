const PessoaRepository = require('../repositories/pessoaRepository');

const listarPessoas = async (req, res) => {
    try{
        const resultado = await PessoaRepository.getAllPessoas();
        res.json(resultado);

    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

const listarPessoasByID = async (req, res) => {
    try{
        const id = req.params.id;
        const resultado = await PessoaRepository.getPessoasByID(id);
        res.json(resultado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

const criarPessoas = async (req, res) => {
    try{
        const {nome, email, telefone, cpf, senha} = req.body;
        const resultado = await PessoaRepository.criarPessoa(nome, email, telefone, cpf, senha);
        res.json(resultado)
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

const deletarPessoas = async (req, res) => {
    try{
        const id = req.params.id;
        const resultado = await PessoaRepository.deletarPessoas(id);
        
        if (resultado === 0) {
            return res.status(404).json({mensagem:'Pessoa não encontrada'});
        }

        res.status(200).json({mensagem:'Pessoa deletada com sucesso!'});
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

module.exports = {listarPessoas, listarPessoasByID, criarPessoas, deletarPessoas};