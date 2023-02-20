const { authenticate } = require("passport");
const Product = require("../models/productModel")

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.send(err)
  }
};
 
const addToCart = async (req, res) => {
  await Product.updateOne(
    { _id: req.body.id },
    { $set: {inCart: true} }
  )
  .then(() => console.log(`changed`))
  .catch(err => console.log(err))
}
const getTotal = async (req, res) =>{
  try{

    totalPrice = []
    const total = await Product.find({})
    if(total){
      await total.map(prod => prod.inCart == true ? totalPrice.push(prod.price * prod.qty) : "")
    }
    res.json(totalPrice)

  }catch(err){
    console.log(err)
  }

}

const removeFromCart = async (req, res) => {
  await Product.updateOne(
    { _id: req.body.id },
    { $set: {inCart: false} }
  )
  .then(() => console.log(`changed`))
  .catch(err => console.log(err))
}

const getCart = async (req, res) => {
  try{
    const cart = await Product.find({inCart: true})
    res.json(cart)
  }catch(err){
    res.send(err)
  }
}

const updateQty = async (req, res) => {
  try{
    await Product.updateOne(
      {_id: req.body.id},
      {$set: {qty: req.body.qty }}
    )

  }catch(err){
    console.log(err)
  }
}
const clearCart = async (req, res) => {
  try{
    await Product.updateMany(
      {$set: {inCart: false }}
    )

  }catch(err){
    console.log(err)
  }
}


module.exports = {getTotal, getAllProducts, addToCart, getCart, removeFromCart, updateQty, clearCart}
