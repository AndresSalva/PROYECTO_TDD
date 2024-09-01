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
    it("El autito deberia apuntar Este", () => {
      const autito = new auto();
      autito.ApuntarEste();
      expect(autito.direccion).toEqual("E");
    });
  });