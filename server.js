require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productsRoutes = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')

connectDB();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin: "http://localhost:3000",
  Credential: true
}))

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "SERVER RUNNING..." });
});




app.use("/", productsRoutes);


app.listen(process.env.PORT);