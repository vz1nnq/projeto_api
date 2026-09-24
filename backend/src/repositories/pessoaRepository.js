const pool = require('../config/db');

const getAllPessoas = async () => {
    const sql = 'SELECT * FROM pessoas'
    const resultado = await pool.query(sql);

    return resultado.rows;
};

const getPessoasByID = async (id) => {
    const sql = 'SELECT * FROM pessoas WHERE id = $1'
    const valores = [id]

    const resultado = await pool.query(sql, valores);
    return resultado.rows[0];
};

const criarPessoa = async (nome, email, telefone, cpf, senha) => {
    const sql = `INSERT INTO pessoas (nome, email, telefone, cpf, senha) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const valores = [nome, email, telefone, cpf, senha];

    const resultado = await pool.query(sql, valores);
    return resultado.rows[0]
};

const deletarPessoas = async (id) => {
    const sql = 'DELETE FROM pessoas WHERE id = $1';
    const valores = [id];

    const resultado = await pool.query(sql, valores)
    return resultado.rowCount
};

module.exports = {getAllPessoas, getPessoasByID, criarPessoa, deletarPessoas};