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
        else if(this.direccion === "S"){
            this.direccion = "O";
        }
        else if(this.direccion === "E"){
            this.direccion = "S";
        }
        else if(this.direccion === "O"){
            this.direccion = "N";
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
    }
}
export default auto;