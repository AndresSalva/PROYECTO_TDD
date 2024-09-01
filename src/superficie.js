class Superficie {
    constructor(filas, columnas) {
      this.filas = filas;
      this.columnas = columnas;
    }
  
    mostrarSuperficie() {
        return [this.filas, this.columnas];
    }

    validarSuperficie()
    {
      if(this.filas >= 0)
        {
            return true;
      }
      return false;
    }
  }

  export default Superficie;
  
  