


require('colors');

const menu =()=>{
    return new Promise ((res,rechazado)=>{
        console.clear()

    
        console.log(`${'1.'.yellow} Crear un Usuario`);
        console.log(`${'2.'.yellow} Listar mis usuarios`);
        console.log(`${'3.'.yellow} Listar Usuarios Confirmados`);
        console.log(`${'4.'.yellow} Listar Usuarios Pendientes`);
        console.log(`${'5.'.yellow} Completar Usuarios`);
        console.log(`${'6.'.yellow} Borrar Usuario`);
        console.log(`${'0.'.yellow} Salir`);
    
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question('Seleccione una Opcion : ',(opt)=>{
        readline.close();
        res(opt)
        })
    })
}

const pausa = ()=>{
    return new Promise ((res)=>{
        
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question(`Presione ${'ENTER'.red}` ,(opt)=>{
            readline.close();
            res()
            })
    })
}

module.exports= {
    menu,
    pausa
}