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
