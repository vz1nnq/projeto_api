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

module.exports = {getAllProdutos, getProdutoByID};