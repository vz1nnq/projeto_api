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

        if (id <= 0 || isNaN(id)) {
            return res.status(400).json({
                mensagem:'Por-favor, insira um id valido.'})
        }

        const resultado = await PessoaRepository.getPessoasByID(id);

        if (!resultado) {
            return res.status(404).json({
                mensagem:'Pessoa não encontrada.'})
        }

        res.json(resultado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({mensagem:'Erro interno.'});
    }
};

const criarPessoas = async (req, res) => {
    try{
        const {nome, email, telefone, cpf, senha} = req.body;
        // valida se todos os campos estao preenchidos
        if (!nome || !email || !telefone || !cpf || !senha) {
            return res.status(400).json({
                mensagem: 'Nome, email, telefone, CPF e senha são obrigatórios' });
        }
        // valida se o cpf tem 11 digitos
        if (cpf.length !== 11) {
            return res.status(400).json({
                mensagem:"CPF deve conter 11 digitos"
            });
        }


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
        //valida se o id é valido
        if (isNaN(id) || id <= 0) {
            return res.status(400).json({
                mensagem:"Esse id não é valido"
            });
        }

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