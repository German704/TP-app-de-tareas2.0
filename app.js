const {argv} = require("process");
const { listar, listarTareas, nuevaTarea, eliminarTarea, filtrarPorEstado, cambiarEstado } = require("./funcionesDeTareas");
const tareas = require("./data/tareas.json")


switch (argv[2]) {
    case "listar":   //muestra lista del tareas.json
        console.log(`\n    ========= T A R E A S =========\n`);
        listarTareas();
        console.log(" ");        
        break;

    case "agregar": //agrega nuevas tareas al json 
        titulo = argv[3];
        estado = argv[4].toLocaleLowerCase();
        console.log(`\nSe ha agregado su nueva tarea:\n------------------------------`);
        nuevaTarea(titulo, estado);
        console.log(" ");
        break;  

    case "eliminar": 
/*  elimina una tarea seleccionando la posicion de la misma, 
    para saber la pocicion de de la tarea a eliminar usar la accion "listar" 
    introducir enla terminal de la siguinte forma: 
    node app.js eliminar 1 ...(en este caso el nro 1 seria la posicion de la tarea a eliminar*/
        posicion = argv[3];
        eliminarTarea(posicion, 1);
        console.log(`\nSe ha eliminado una tarea\n`);
        break;

    case "estados": //muestra las tareas con el estado seleccionado
    /* si pone un estado no definido o que no exista aparecera un mensaje, 
    por ej si no existe una tarea con estado "terminado" le aparecera el 
    mensaje indicando que esta no se encuentra. */
        estado = argv[3];
        console.log(`\nLas tareas con estado "${argv[3]}" son:\n--------------------------------------`);
        filtrarPorEstado(estado); 
        console.log(" ");  
        break;

    case "nuevo_estado": 
    /* este sirve para modificar el estado sin afectar ala tarea solo cambia el 
    estado de la misma, para que funcione solo hay que pasar por terminal el 
    indice/poscion de la tarea/objeto a modificar y lo que quiere poner como estado:
    ej : node app.js nuevo_estado "hola buenas" "soltero" ...*/
        index = argv[3]
        estadoNuevo = argv[4];
        console.log(cambiarEstado(index, estadoNuevo)); 
        break;

    case undefined:
        console.log(`\nno ha seleccionado ninguna accion, las acciones disponibles son:\n \n- listar\n- agregar\n- eliminar\n- estados\n`);
        break;

    default:
        console.log(`\nMI NO ENTENDER\n`);
        break;
}
