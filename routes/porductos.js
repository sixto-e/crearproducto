var express = require('express');
var router = express.Router();
const multer = require("multer");
const config =  {dest : `./public/tmp`}
const upload = multer(config)
const service = require('./../services/productos');
const {get} = require('./../models/productos');

const all = async(req,res)=>{
    const products = await get();
    console.log(products);
    res.render('productos', {products})
}
 
const create = async(req,res)=>{
    console.log(req.file);
    const idFile = await service.createProducto(req.body, req.file);
    res.redirect('/productos');
}


router.get('/', all)
router.get('/create', (req,res)=>res.render('agregarProducto'))
router.get('/create', upload.single("imagen"), create);

module.exports = router;
