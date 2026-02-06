import { Pelicula } from "./models.js";

const KEY = 'streamflix_db_v1';

export class StreamService {
    guardarCataleg(llistaMultimedia) {
        let cataleg = JSON.stringify(llistaMultimedia);
        localStorage.setItem(KEY, cataleg);
        console.log(`Dades guardades: ${llistaMultimedia.length} item.`);
    }

    carregarCataleg() {
        X = tipo

        const catalegJSON = localStorage.getItem(KEY);

        if (X.tipo == "peli") 
            new (Pelicula)[{titol}, {durada}, {any}, {costFix}];
        if (X.tipo == "serie") 
            new (Serie)[{titol}, {durada}, {nombreEpisodis}];

        return JSON.parse(catalegJSON);
    }
}