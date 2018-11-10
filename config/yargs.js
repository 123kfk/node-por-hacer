/* Configuración del yargs

Configuración de comandos

comando crear,
    --descripción -d

comando actualizar
    --descripción -d
    --completado -d

    --help
*/

const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si la tarea se ha completado o no. Por defecto TRUE'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea nueva', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrartarea', 'Borrar la tarea indicada en la descripción del comando', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}