const fs = require('fs')
const archivo = './datos/archivo.json'
const guardarDatos =( data )=>{
   fs.writeFileSync( archivo,JSON.stringify(data));

}

const leerDatos = ()=>{
    if(!fs.existsSync(archivo)){
 return null
    }
    const info = fs.readFileSync(archivo,{encoding:'utf-8'})
    const data = JSON.parse(info)

    return data
}



module.exports =
{
    guardarDatos,
    leerDatos
}