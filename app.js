//llamos al yargs
const argv = require('./config/yargs').argv
const colors = require('colors');

//llamos a por hacer
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion)
            //console.log('crear tarea');
        break;

    case 'listar':

        let listado = porHacer.getListado()

        for (let tarea of listado) {
            console.log('========Tarea por hacer========'.green);
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('==============================='.green);
        }
        //console.log('Muestra las tareas pendientes de ejecución');
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrartarea':
        let borrartarea = porHacer.borrarTarea(argv.descripcion);
        console.log(borrartarea);
        break

    default:
        console.log('Comando no reconocido');
}