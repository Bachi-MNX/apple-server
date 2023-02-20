const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
  title: {
    type: String
  },
  img: {
    type: String
  },
  price: {
    type: String
  },
  inCart: {
    type: Boolean
  },
  qty: {
    type: Number
  }
})

const Product = mongoose.model("product", productsSchema)
module.exports = Product