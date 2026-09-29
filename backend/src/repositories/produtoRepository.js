const pool = require('../config/db');

// mostrar todos os produtos
const getAllProdutos = async ()=>{
    const sql = 'SELECT * FROM produtos';
    const resultado = await pool.query(sql);
    
    return resultado.rows;
}
// mostra produto com aquele id
const getProdutoByID = async (id)=> {
    const sql = 'SELECT * FROM produtos WHERE id = $1'
    const valores = [id];

    const resultado = await pool.query(sql, valores);
    return resultado.rows[0];
};
// cria um produto
const criarProduto = async (nome, preco, descricao) => {
    const sql = `INSERT INTO produtos (nome, preco, descricao) VALUES ($1, $2, $3) RETURNING *`
    const valores = [nome, preco, descricao];

    const resultado = await pool.query(sql, valores);
    return resultado.rows[0];
};
// atualizar produto ja existente
const updateProduto = async (id, nome, preco, descricao) => {
    const sql = 'UPDATE produtos SET nome = $1, preco = $2, descricao = $3 WHERE id = $4 RETURNING *';
    const resultado = await pool.query(sql, [nome, preco, descricao, id]);
    return resultado; 
};
// apagar um produto
const deletarProduto = async (id) => {
    const sql = 'DELETE FROM produtos WHERE id = $1 RETURNING *';
    const valores = [id]

    const resultado = await pool.query(sql, valores);
    return resultado.rowsCount;
};
// exportando todas as funções
module.exports = {getAllProdutos, getProdutoByID, criarProduto, updateProduto, deletarProduto};