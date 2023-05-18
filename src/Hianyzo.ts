export default class Hianyzo {
    #név: string;
    #hónap: number;
    #nap: number;
    #mulasztások: string; // A napi hiányzást leíró minta O, I, X és N karakterekből áll

    constructor(dátumSor: string, adatsor: string) {
        let m: string[] = dátumSor.split(" ");
        this.#hónap = parseInt(m[1], 10);
        this.#nap = parseInt(m[2], 10);
        m = adatsor.split(" ");
        this.#név = `${m[0]} ${m[1]}`;
        this.#mulasztások = m[2];
    }
}
