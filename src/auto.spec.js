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
  });