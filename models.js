class Multimedia {
    #views = 0;

    constructor(titol, durada) {
        this.titol = titol;
        this.durada = durada;
    }

    play() {
        console.log("Reproduint...");
        this.#views += 1;
    }

    get_views() {
        return this.#views;
    }
    
    #calcularCostServer() {
       return this.durada * 0.01;
    }
}
class Peli extends Multimedia {

    constructor(titol, durada, any, costFix) {
        super(titol, durada);
        this.any = any;
        this.costFix = costFix;
    }
    
    calcularRoyalties(){
        return this.get_views * this.costFix;
    }
}

class Serie extends Multimedia {

    constructor(titol, durada, nombre_episodis) {
        super(titol, durada);
        this.nombre_episodis = nombre_episodis;
    }

    play() {
        super.play();
        return "Marató de" + this.titol + "iniciada";
    }

    calcularRoyalties() {
        return this.get_views() * this.nombre_episodis * 0.05;
    }
}     
