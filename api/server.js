//setup web application


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

app.use(cors());

const db = require('./db');



app.get('/api', (req, res) => {
    res.send("hello server.js");
})

app.get('/api/users', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users");
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

const stockRoutes = require('./routes/route');
app.use('/api/stock', stockRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});