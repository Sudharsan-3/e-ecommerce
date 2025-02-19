const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase')

dotenv.config({path: path.join(__dirname,'config','config.env')})
const products = require('./routes/product');
const orders = require('./routes/order');
connectDatabase();
app.use(express.json())
app.use(cors());

app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
    console.log(`Your server is runningg on port ${process.env.PORT} as an ${process.env.NODE_ENV}`)
})
