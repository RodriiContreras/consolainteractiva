const inquirer = require('inquirer');
require('colors');

const opciones =[
    {
        type:'list',
        name:'opcion',
        message:'Que quiere hacer?',
        choices:[
            {
                value:'1',
                name:`${'1'.yellow}. Crear Usuario`
            },
            {
                value:'2',
                name:`${'2'.yellow}. Listar mis usuarios`
            },
            {
                value:'3',
                name:`${'3'.yellow}. Listar Usuarios Confirmados`
            },
            {
                value:'4',
                name:`${'4'.yellow}. Listar Usuarios Pendientes`
            },
            {
                value:'5',
                name:`${'5'.yellow}. Completar Usuarios`
            },
            {
                value:'6',
                name:`${'6'.yellow}. Borrar Usuario`
            },
            {
                value:'0',
                name:`${'0'.yellow}. Salir`
            }
        ]
    }
]
const input = async(msj) =>{
   const pregunta = 
   [{
       type:'input',
       name:'nombre',
       message:msj,
       validate(value){
           if (value.length === 0){
               return 'Ingrese un valor'
           }
           return true;
       }

   }]
 const {nombre}  = await  inquirer.prompt(pregunta)
 return nombre

}
const menuInquirer= async()=>{
 console.clear()
 console.log('==============================='.green);
 console.log('Seleccione una opción'.green)
 console.log('==============================='.green);
 const {opcion} = await inquirer.prompt(opciones);
 return opcion
}
const pausa =  async () =>{
     
    const pregunta1 = [
        {
            type:'input',
            name:`enter`,
            message:`Toque ${'ENTER'.red} para continuar.`
        }
    ]

    await inquirer.prompt(pregunta1);
}
const listadoUsuariosBorrar=  async (usuarios=[])=>{

    const choices = usuarios.map((usuario,i) =>{

        const idx = i + 1
        return{
            value:usuario.id,
            name: `${idx} ${usuario.nombre}`
        }
    })
    choices.unshift({
        value:'0',
        name:'0.Cancelar'
    })
    const preguntas = [
        {
            type:'list',
            name:'id',
            message:'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    
    
    return id;
}
const confirmar = async (mensaje)=>{
    const question =[
     {
         type:'confirm',
         name:'okey',
         mensaje
     }
    ];
    const {okey} = await inquirer.prompt(question);
    return okey
   }


   const mostrarListado=  async (usuarios=[])=>{

    const choices = usuarios.map((usuario,i) =>{

        const idx = i + 1
        return{
            value:usuario.id,
            name: `${idx} ${usuario.nombre}`,
            checked: (usuario.completado) ? true:false
        }
    })

    const preguntas = [
        {
            type:'checkbox',
            name:'ids',
            message:'Selecciones',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(preguntas);
    
    
    return ids;
}


module.exports={
    menuInquirer,
    pausa,
    listadoUsuariosBorrar,
    input,
    confirmar,
    mostrarListado
}