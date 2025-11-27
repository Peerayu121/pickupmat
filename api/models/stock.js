const mysql = require("mysql2/promise");
const { query } = require("../db");

// CRUD Operation
const StockSchema = {
    getAll: async () => {
        return await query("SELECT * FROM stock");
    },

    getByUser_id: async (user_id) => {
        return await query("SELECT * FROM users WHERE user_id = ?", [user_id]);
    },

    // อาจจะใส่รูปภาพในภายหลัง
    create: async (StockAdd) => {
        const { Stock_id, Stock_name, price, quantity, Constructor, Create_At } = StockAdd;
        return await query(`INSERT INTO stock ( Stock_id, Stock_name, price, quantity, Constructor, Create_At) VALUES (?, ?, ?, ?, ?, ?)`, [Stock_id, Stock_name, price, quantity, Constructor, Create_At]);
    },

    delete: async (Stock_id) => {
        return await query("DELETE FROM stock WHERE Stock_id = ?", [Stock_id]);
    }
}

module.exports = StockSchema;