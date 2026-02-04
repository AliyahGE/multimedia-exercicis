export class Multimedia {
    #views = 0;

    constructor(titol, durada) {
        this.titol = titol;
        this.durada = durada;
    }

    play() {
        console.log("Reproduint...");
        this.#views += 1;
    }

    getViews() {
        return this.#views;
    }
    
    #calcularCostServer() {
       return this.durada * 0.01;
    }
}

export class Pelicula extends Multimedia {

    constructor(titol, durada, any, costFix) {
        super(titol, durada);
        this.any = any;
        this.costFix = costFix;
    }
    
    calcularRoyalties(){
        return this.getViews * this.costFix;
    }
}

export class Serie extends Multimedia {

    constructor(titol, durada, nombreEpisodis) {
        super(titol, durada);
        this.nombreEpisodis = nombreEpisodis;
    }

    play() {
        super.play();
        return "Marató de" + this.titol + "iniciada";
    }

    calcularRoyalties() {
        return (this.getViews() * this.nombreEpisodis) * 0.05;
    }
}     

export class Usuari {
    mylist = [];

    afegirALlista(item) {
        this.mylist.push(item);
    }

    tempsTotalConsumit() {
        let minuts = 0;

        for (const item of this.mylist) {
            minuts += item.durada;
            return minuts / 60;
        }
    }
}
