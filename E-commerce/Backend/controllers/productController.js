const ProductModel = require('../models/productModel.js');

//Get Products API -/api/v1/proucts
exports.getProducts = (async(req,res,next)=>{
    const query = req.query.keyword?{ name : { 
        $regex : req.query.keyword,
        $options : 'i'
     }}:{}
    const products = await ProductModel.find(query);
    res.json({
        success : true,
        products
    })
})

//Get Single Products API -/api/v1/proucts/:id
exports.getSingleProduct =(async(req,res,next)=>{
    try {
        // console.log(req.params.id,'ID')
  const product = await ProductModel.findById(req.params.id)
    res.json({
        success : true,
       product
    })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'unable to get that product with that id'
        })
    }
   
})