const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};

module.exports = conn;
