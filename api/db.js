//database layer

const mysql = require('mysql2/promise');

const connectDb = async () => {
    try {
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'pickup'
        })
        console.log("Database connected success ");
        return conn;

    } catch (error) {
        console.error("Database connected failed: ", error);
        throw error;
    }
}

//ในภายภาคหน้าจะแก้ไขเป็น connection pool
const query = async (sql, param = []) => {
    const conn = await connectDb();
    try {
        const [result] = await conn.query(sql, param);
        await conn.end();
        return result;
    } catch (error) {
        await conn.end();
        throw error;
    }
}

module.exports = { connectDb, query }; 