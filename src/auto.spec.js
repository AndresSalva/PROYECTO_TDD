import auto from "./auto";
describe("Verificar clase auto", () => {
    it("Deberia verificar que la clase se creo correctamente", () => {
      const autito = new auto();
      expect(autito instanceof auto).toEqual(true);
    });
    it("El autito deberia apuntar Norte", () => {
      const autito = new auto();
      autito.ApuntarNorte();
      expect(autito.direccion).toEqual("N");
    });
    it("El autito deberia apuntar Sur", () => {
      const autito = new auto();
      autito.ApuntarSur();
      expect(autito.direccion).toEqual("S");
    });
    it("El autito deberia apuntar Oeste", () => {
      const autito = new auto();
      autito.ApuntarOeste();
      expect(autito.direccion).toEqual("O");
    });
    it("El autito apuntando al norte, si gira a la derecha, deberia apuntar al este", () => {
      const autito = new auto();
      autito.ApuntarNorte();
      autito.GirarDerecha();
      expect(autito.direccion).toEqual("E");
    });
    it("El autito apuntando al sur, si gira a la derecha, deberia apuntar al oeste", () => {
      const autito = new auto();
      autito.ApuntarSur();
      autito.GirarDerecha();
      expect(autito.direccion).toEqual("O");
    });
    it("El autito apuntando al este, si gira a la derecha, deberia apuntar al sur", () => {
      const autito = new auto();
      autito.ApuntarEste();
      autito.GirarDerecha();
      expect(autito.direccion).toEqual("S");
    });
    it("El autito apuntando al oeste, si gira a la derecha, deberia apuntar al norte", () => {
      const autito = new auto();
      autito.ApuntarOeste();
      autito.GirarDerecha();
      expect(autito.direccion).toEqual("N");
    });
    it("El autito apuntando al norte, si gira a la izquierda, deberia apuntar al oeste", () => {
      const autito = new auto();
      autito.ApuntarNorte();
      autito.GirarIzquierda();
      expect(autito.direccion).toEqual("O");
    });
    it("El autito apuntando al este, si gira a la izquierda, deberia apuntar al norte", () => {
      const autito = new auto();
      autito.ApuntarEste();
      autito.GirarIzquierda();
      expect(autito.direccion).toEqual("N");
    });
    it("El autito apuntando al oeste, si gira a la izquierda, deberia apuntar al sur", () => {
      const autito = new auto();
      autito.ApuntarOeste();
      autito.GirarIzquierda();
      expect(autito.direccion).toEqual("S");
    });
    it("El autito apuntando al sur, si gira a la izquierda, deberia apuntar al este", () => {
      const autito = new auto();
      autito.ApuntarSur()
      autito.GirarIzquierda();
      expect(autito.direccion).toEqual("E");
    });
    it("La funcion en girar derecha solo acepta N/S/E/O, Si no deberia retornar falso", () => {
      const autito = new auto(1,2,"d");
      expect(autito.GirarDerecha()).toEqual(false);
    });
    it("La funcion en girar izquierda solo acepta N/S/E/O, Si no deberia retornar falso", () => {
      const autito = new auto(1,2,"p");
      expect(autito.GirarIzquierda()).toEqual(false);
    });
    it("Si el autito avanza al norte entonces deberia subir una posicion en y", () => {
      const autito = new auto(1,2,"N");
      expect(autito.Avanzar()).toEqual("1,3N");
    });
    it("Si el autito NO avanza al norte entonces deberia dar falso", () => {
      const autito = new auto(1,2,"a");
      expect(autito.Avanzar()).toEqual(false);
    });
    it("Si el autito avanza al este entonces deberia subir una posicion en x", () => {
      const autito = new auto(1,2,"E");
      expect(autito.Avanzar()).toEqual("2,2E");
    });
    it("Si el autito avanza al sur entonces deberia bajar una posicion en y", () => {
      const autito = new auto(1,2,"S");
      expect(autito.Avanzar()).toEqual("1,1S");
    });
    it("Si el autito avanza al oeste entonces deberia bajar una posicion en x", () => {
      const autito = new auto(2,2,"O");
      expect(autito.Avanzar()).toEqual("1,2O");
    });
    it("Deberia mostrar la posicion del auto", () => {
      const autito = new auto(2,2,"O");
      expect(autito.mostrarPosicion()).toEqual("2,2O");
    });
    it("Deberia mostrar la posicion del auto", () => {
      const autito = new auto(2,2,"O");
      expect(autito.mostrarPosicion()).toEqual("2,2O");
    });
    it("El comando que se puede ingresar es A/I/D, sino deberia dar false", () => {
      const autito = new auto(2,2,"O");
      expect(autito.validarMovimiento("M")).toEqual(false);
    });
    it("El comando que se puede ingresar es A/I/D, deberia mostrar true", () => {
      const autito = new auto(2,2,"O");
      expect(autito.validarMovimiento("A")).toEqual(true);
    });
    it("Se respalda el autito con una copia", () => {
      const autito = new auto(2,2,"O");
      const copia = new auto(3,3,"N");
      autito.respaldarAutito(copia)
      expect(autito.mostrarPosicion()).toEqual("3,3N");
    });
  });