class Proceso {
    constructor(nuevo){
        this.nuevo = nuevo;
        this.dado = Math.floor(Math.random() * (15 - 3)) + 3
        this.siguiente = null
    }
  }
  
exports.default = Proceso;