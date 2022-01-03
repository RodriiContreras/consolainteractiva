require('colors');
const { guardarDatos,leerDatos } = require('./helper/guardarDatos');
const { menuInquirer,pausa,input,listadoUsuariosBorrar,mostrarListado, confirmar } = require('./helper/inquirer');
const {menu} = require('./helper/mensajes');
const Usuario = require('./models/usuario');
const Usuarios = require('./models/usuarios');



const app =async() =>{
    let opt = '0'; //valor de la seccion que tomemos
    const usuarios = new Usuarios();  // al ser llamada en la linea 17, genera un usuario
    const usuariosDB= leerDatos();
    if(usuariosDB){
        usuarios.cargarUsuarios(usuariosDB)
    }

    do{
        opt = await menuInquirer(); // imprime mi menu 
    
        switch (opt) {
            case '1':
               const nombre = await input('nombre :');
               usuarios.crearUsuario( nombre );
            break;

            case '2':
                
              usuarios.listadoCompleto();
            break;

            case '3':
             usuarios.listarTareasCompletadas(true);
            break;

            case '4':
            usuarios.listarTareasCompletadas(false);
            break;

            case '5':
           const ids=  await mostrarListado(usuarios.listadoArray)
           usuarios.usuariosCompletados(ids);
            break;

            case '6':
                const id= await listadoUsuariosBorrar(usuarios.listadoArray)
                if (id=== !0 ){
                    const ok = await confirmar('esta seguro?')
                    if(ok){ // si me pone que si, cambia a true 
                        usuarios.deletearUsuario(id);// busca por id el item que quiero borrar
                    }
                }
               
                break;
    }

        guardarDatos(usuarios.listadoArray);
        
        await pausa()
    }
    while( opt !=='0');
}
app()