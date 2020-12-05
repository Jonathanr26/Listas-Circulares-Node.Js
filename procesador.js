const Proceso = require('./proceso').default

let Procesador = () =>{
    let inicio = null;
    let cola = null;
    let vacio = 0;
    let listo = 0;
    let tamaño = 0;

    const agregar = (nuevo) =>{
        if(inicio == null){
            inicio = nuevo;
            cola = nuevo;
            inicio.siguiente = nuevo;
        } else{
            nuevo.siguiente = inicio;
            cola.siguiente = nuevo;
            cola = nuevo;
        }
    }

    const avanzar = () =>{
        let numProceso = 1;
        for(let i = 0; i < 300; i++){
            let probability = Math.floor(Math.random() * (100-1)+1);
            if (inicio == null){
                vacio++;
            }
            if(probability < 39){
                let nuevo = new Proceso(numProceso);
                agregar(nuevo);
                numProceso++;
                tamaño++;
            }
            let aux = inicio;
            if(aux != null){
                if(aux.dado == 0){
                    eliminar(aux);
                    tamaño--;
                    listo++;
                }
                aux.dado--;
                aux = aux.siguiente;
            }
            imprimir();
        }
    }

    const buscar = (aux) =>{
        let actual = inicio;
        if(actual == aux){
            return cola;
        } else{
            while(actual.siguiente != aux && cola != aux){
                actual = inicio.siguiente;
            }
            return actual;
        }
    }

    const eliminar = (aux) =>{
        let anterior = buscar(aux);
        if(aux == inicio && aux == cola){
            inicio = null;
            cola = null;
        } else if(aux == inicio){
            inicio = aux.siguiente;
            cola.siguiente = inicio;
        } else if(aux == cola){
            anterior.siguiente = inicio;
            cola = anterior;
        } else{
            anterior.siguiente = aux.siguiente;
        }
    }

    const imprimir = () =>{
        console.log(
            `
            - proceso listo ${listo},
            - proceso pending ${tamaño},
            - dado vacio ${vacio}
            `
        )
    }
    return {avanzar:avanzar, imprimir:imprimir}
}

exports.default = Procesador;