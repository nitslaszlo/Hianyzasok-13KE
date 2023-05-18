export default class Hianyzo {
    #név: string;
    #hónap: number;
    #nap: number;
    #mulasztások: string;

    get igazolatlanDb(): number {
        return this.#megszamol("I");
    }

    get igazoltDb(): number {
        return this.#megszamol("X");
    }

    constructor(dátumSor: string, adatsor: string) {
        let m: string[] = dátumSor.split(" ");
        this.#hónap = parseInt(m[1], 10);
        this.#nap = parseInt(m[2], 10);
        m = adatsor.split(" ");
        this.#név = `${m[0]} ${m[1]}`;
        this.#mulasztások = m[2];
    }

    #megszamol(ch: string) {
        let db = 0;

        for (const mulasztas of this.#mulasztások) {
            if (mulasztas == ch) {
                db++;
            }
        }
        return db;
    }
}
