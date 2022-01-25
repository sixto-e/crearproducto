const pool = require("../utils/bd");

const TABLA_PRODUCTOS = "productos";
const TABLA_IMG = "productos_imagenes";

const get = async()=>{
        const query = "SELECT * FROM ??";
        const params = [TABLA_PRODUCTOS];
        return await pool.query(query, params)
}
const create = async(obj)=>{
       
      try{
        const query = "INSERT INTO ?? SET ?";
        const params = [TABLA_PRODUCTOS, obj];
        return await pool.query(query, params);
      } catch(e){console.log(e)
}
       
}

const createImg = async(obj)=>{
     try{ 
        const query = "INSERT INTO ?? SET ?";
        const params = [TABLA_IMG, obj];
        return await pool.query(query, params);

     }catch(e){
             console.log(e)
     }   
       
} 



module.exports = {get, create, createImg}