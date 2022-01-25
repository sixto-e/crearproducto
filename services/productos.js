const {create, createImg} = require('./../models/productos');
const {imgFile} = require('./../utils/fileHandles');

const createProducto = async(body, file)=>{
    try{
        const {insertId : idProducto} = await create(body);
        const uid = imgFile(file);
        const obj = {idProducto, uid};
        const {insertId : idFile} = await createImg(obj);
        return idFile;
    }catch(e){
        console.error(e)
    }
}

module.exports = {createProducto};