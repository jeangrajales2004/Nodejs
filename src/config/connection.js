const mongoose = require('mongoose')
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USUARIOBD}:${process.env.PASSBD}@adso2846458.9nfzy.mongodb.net/${process.env.BD}`

mongoose.connect(URI)

module.exports = mongoose;