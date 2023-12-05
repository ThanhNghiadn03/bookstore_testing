const mongoose = require('mongoose')
require('dotenv').config()

const connectMongoDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("Kết nối MongoDB thành công!")

    } catch (error) {
        console.log("Kết nối MongoDB thất bại!" + error)
    }
}

module.exports = connectMongoDB