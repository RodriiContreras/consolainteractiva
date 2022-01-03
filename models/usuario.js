const {v4} = require('uuid');
class Usuario {
      id='';
      nombre='';
   
     constructor(nombre,completado){
         this.id=v4();
         this.nombre=nombre;
         this.completado=null;
         }
    }



module.exports=Usuario;