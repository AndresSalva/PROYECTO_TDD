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
  });