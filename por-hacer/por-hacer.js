//paquetes necesarioa
const fs = require('fs');

//variables gobales (creo yo que sea eso)
let listadoPorHacer = [];

//Función que escribe las tareas en un archivo JSON
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('The file has been saved!', err);
    })
}

//Función que guarda el contenido de el archivo JSON en una variable para poder trabajar con ella
const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);
}

//Función que revide la descripción de las tareas
const crear = (descripcion) => {

    cargarDB();

    //aqui se crea un objeto con dos valores que son la 
    let porHAcer = {
        descripcion, // esto es lo mismo que descripcion: descripcion
        completado: false
    };

    listadoPorHacer.push(porHAcer);

    guardarDB()

    return porHAcer;

}


//Listar: Función que enumera los datos
const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrarTarea = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        let nuevolistado = listadoPorHacer.filter((tarea) => {
            return tarea.descripcion !== descripcion;
        })
        listadoPorHacer = nuevolistado;
        guardarDB();
        return ('Tarea borrada con exito');
    } else {
        return ('No se ha encontrado la tarea');
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}