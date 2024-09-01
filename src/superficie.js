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
      let verificador = false;
      if(this.filas >= 0 && this.columnas >= 0)
        {
            verificador = true;
      }
      return verificador;
    }
  }

  export default Superficie;
  
  