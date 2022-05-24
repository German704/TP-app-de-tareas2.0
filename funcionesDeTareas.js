let tareas = require("./data/tareas.json");
let {writeFileSync} = require("fs")
let guardarJson = (datos) => writeFileSync("./data/tareas.json", JSON.stringify(datos, null, 3), "utf-8");

module.exports = {
    listar: tareas,
    listarTareas: () => {
        tareas.forEach( (tarea, i) => {
            console.log(`${i}. ${tarea.titulo} // ${tarea.estado}`)});
    },
    nuevaTarea: (titulo, estado) => {
        let masTarea = {
            titulo,
            estado
        };
        tareas.push(masTarea);
        guardarJson(tareas);
        for(let i = 0; i < 1; i++){
            console.log(`*. ${masTarea.titulo} // ${masTarea.estado}`)}
        // return masTarea; 
    },
    eliminarTarea: (posicion, num1) => {
    tareas.splice(posicion, 1) 
    guardarJson(tareas);
    },
    filtrarPorEstado: (estado) => {
        let tareasFiltradas = tareas.filter( filtrar => filtrar.estado.toLocaleLowerCase() === estado.toLocaleLowerCase());
            if(tareasFiltradas[0] === undefined){
                console.log(`Actualmente no tienes tareas en estado "${estado.toLocaleLowerCase()}"`)
            };
        tareasFiltradas.forEach( (tarea, i) => {
        return console.log(`${i+1}. ${tarea.titulo} // ${tarea.estado}`)});
    },
    cambiarEstado: (index, estadoNuevo) => {

        if(tareas[index].estado){
            tareas[index].estado = estadoNuevo;
        }
        guardarJson(tareas);
        return (`Se ha actualizado su estado a "${estadoNuevo}"`)
    }
}


