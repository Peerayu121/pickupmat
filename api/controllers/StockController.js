const StockSchema = require("../models/stock");

const getAllStock = async (req, res) => {
    try {
        const allStock = await StockSchema.getAll();
        res.status(200).json(allStock);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const addStock = async (req, res) => {
    try {
        const stockAdd = await StockSchema.create(req.body);
        res.status(200).json(stockAdd)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllStock, addStock }