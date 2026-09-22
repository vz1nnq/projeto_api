const pool = require('../config/db');

const getAllProdutos = async ()=>{
    const sql = 'SELECT * FROM produtos';
    const resultado = await pool.query(sql);
    
    return resultado.rows;
}

const getProdutoByID = async (id)=> {
    const sql = 'SELECT * FROM produtos WHERE id = $1'
    const valores = [id];

    const resultado = await pool.query(sql, valores);
    return resultado.rows[0];
};

const criarProduto = async (nome, preco, descricao) => {
    const sql = `INSERT INTO produtos (nome, preco, descricao) VALUES ($1, $2, $3) RETURNING *`
    const valores = [nome, preco, descricao];

    const resultado = await pool.query(sql, valores);
    return resultado.rows[0];
};

const deletarProduto = async (id) => {
    const sql = 'DELETE FROM produtos WHERE id = $1';
    const valores = [id]

    const resultado = await pool.query(sql, valores);
    return resultado.rowsCount;
};

module.exports = {getAllProdutos, getProdutoByID, criarProduto, deletarProduto};