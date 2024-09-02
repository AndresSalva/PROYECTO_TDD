class auto {
    constructor(posX, posY, direccion){
        this.posX=posX;             //fila
        this.posY=posY;             //columnas
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
        else if(this.direccion === "S"){
            this.direccion = "O";
        }
        else if(this.direccion === "E"){
            this.direccion = "S";
        }
        else if(this.direccion === "O"){
            this.direccion = "N";
        }
        else{
            return false;
        }
    }
    GirarIzquierda(){
        if(this.direccion === "N"){
            this.direccion = "O";
        }
        else if(this.direccion === "S"){
            this.direccion = "E";
        }
        else if(this.direccion === "E"){
            this.direccion = "N";
        }
        else if(this.direccion === "O"){
            this.direccion = "S";
        }
        else{
            return false;
        }
    }
    Avanzar(){
        if(this.direccion === "N")
        {
            this.posY++;
        }
        else if(this.direccion === "E"){
            this.posX++;
        }
        else if(this.direccion === "S"){
            this.posY--;
        }
        else if(this.direccion === "O"){
            this.posX--;
        }
        else {
            return false;
        }
        let resultado = this.posX + "," + this.posY + this.direccion;
        return resultado;
    }
    mostrarPosicion(){
        return this.posX +","+ this.posY + this.direccion;
    }
    Avanza_o_Gira(movimiento){
        if(movimiento === "A"){
            this.Avanzar();
        }
        else if(movimiento === "D"){
            this.GirarDerecha();
        }
        else{
            this.GirarIzquierda();
        }
    }
    validarMovomientos(movimiento){
        if (movimiento !== "A" && movimiento !== "I" && movimiento !== "D") {
            return "El movimiento no es valido";
        }
        this.Avanza_o_Gira(movimiento);
        return true;
    }
}
export default auto;