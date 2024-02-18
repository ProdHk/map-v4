import mongoose from "mongoose"

async function DbConnection() {

    try {
        const key = "mongodb+srv://admin:{246813579aA}@jlemara.ope5jcj.mongodb.net/jlemara_erp"
        await mongoose.connect(key)
        console.log("🔥 Conectado ao banco de dados 🗄️")
    } catch (error) {
        console.log("⚠️ Não foi possivel conectar ao banco de dados ⚠️")

    }
}

export default DbConnection

