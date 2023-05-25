import Segéd from "./Seged";

export default class Hianyzo {
    #név: string;
    #hónap: number;
    #nap: number;
    #mulasztások: string;

    get név(): string {
        return this.#név;
    }

    get igazolatlanDb(): number {
        return this.#megszamol("I");
    }

    get igazoltDb(): number {
        return this.#megszamol("X");
    }

    get hianyzasDb(): number {
        return this.igazolatlanDb + this.igazoltDb;
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

    volt_hianyzas(nap: string, óra: number): boolean {
        const óraIndexe: number = óra - 1;
        return nap === Segéd.hetNapja(this.#hónap, this.#nap) && (this.#mulasztások[óraIndexe] === "X" || this.#mulasztások[óraIndexe] === "I");
    }
}
