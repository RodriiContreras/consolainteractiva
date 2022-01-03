const Usuario = require("./usuario");



class Usuarios{
    _listado = {}; //

       get listadoArray(){//me convierte todo el array en llaves en un array en corchetes
           const listadoEnArray = [];
           Object.keys(this._listado).forEach(item =>{
               const usuario = this._listado[item];
                listadoEnArray.push(usuario);
           })
           return listadoEnArray
       }      
       
       constructor(){
        this._listado={};
      } 
      deletearUsuario(id = ''){
           if(this._listado[id]){
             delete this._listado[id];
           }
      }
        

      cargarUsuarios(usuarios=[]){
        usuarios.forEach(usuario =>{
            this._listado[usuario.id] = usuario;
        })
      }
    crearUsuario(nombre= ''){
        const usuario = new Usuario(nombre);

        this._listado[usuario.id] = usuario; 
    }

    usuariosCompletados (ids=[]){
      ids.forEach(id=>{
        const  usuario =this._listado[id]
       if(!usuario.completado){
         usuario.completado = new Date().toISOString()
       }
       if(!ids.includes(usuario.id)){
          const usuario = this._listado[id]
          usuario.completado=null;
       }
      })
    }

    listadoCompleto(){
        this.listadoArray.forEach((usuario,indice) =>{
          const indiceBien = `${indice + 1}.`.green;

          const {nombre,completado} = usuario;

          const estado = (completado) ? 'Confirmado'.green : 'Pendiente'.red

          console.log(`${indiceBien} ${nombre.yellow} :: ${estado} `)
        })
    }
    listarTareasCompletadas(completaado = true){
      let contador = 0;
      this.listadoArray.forEach((usuario) =>{
        const {nombre,completado} = usuario;
        const estado = (completado) ? 'Confirmado'.green : 'Pendiente'.red

        if(completaado){
          if(completado){
            contador += 1;
            console.log(`${(contador+ '.').green} ${nombre.yellow} ::${estado}`)
          }
        }
        else if (!completaado){
          if(!completado){
            contador += 1;
            console.log(`${(contador+ '.').green} ${nombre.yellow} ::${estado}`)
          }
        }
      })
    }


    

  
}



module.exports=Usuarios;