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
            return this.posX + "," + this.posY + this.direccion;
        }
        else if(this.direccion === "E"){
            this.posX++;
            return this.posX + "," + this.posY + this.direccion;
        }
        else if(this.direccion === "S"){
            this.posY--;
            return this.posX + "," + this.posY + this.direccion;
        }
        else {
            return false
        }
    }

}
export default auto;