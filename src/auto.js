class auto {
    constructor(posX, posY, direccion){
        this.posX=posX;
        this.posY=posY;
        this.direccion = direccion;
    }
    ApuntarNorte(){
        this.direccion = "N";
    }
    ApuntarSur(){
        this.direccion = "S";
    }
    ApuntarEste(){
        this.direccion = "E";
    }
    ApuntarOeste(){
        this.direccion = "O";
    }
    GirarDerecha(){
        if(this.direccion === "N"){
            this.direccion = "E";
        }
    }
}
export default auto;