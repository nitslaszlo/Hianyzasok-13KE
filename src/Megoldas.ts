import Hiányzó from "./Hianyzo";
import fs from "fs";

export default class Megoldás {
    #hiányzók: Hiányzó[] = [];

    public get bejegyzésekSzáma(): number {
        return this.#hiányzók.length;
    }

    get osszIgazolt(): number {
        let ossz: number = 0;
        for (const h of this.#hiányzók) {
            ossz += h.igazoltDb;
        }
        return ossz;
    }

    get osszIgazolatlan(): number {
        let ossz: number = 0;
        for (const h of this.#hiányzók) {
            ossz += h.igazolatlanDb;
        }
        return ossz;
    }

    get legtöbbetHiányzóTanulók(): string[] {
        const stat: Map<string, number> = new Map<string, number>();
        this.#hiányzók.forEach(e => {
            if (stat.has(e.név)) {
                const korábbiHiányzások: number = stat.get(e.név) as number;
                stat.set(e.név, korábbiHiányzások + e.hianyzasDb);
            } else {
                stat.set(e.név, e.hianyzasDb);
            }
        });

        const maxHiányzás: number = Math.max(...stat.values());
        const maxHiányzóTanulók: string[] = [];
        stat.forEach((value: number, key: string) => {
            if (value == maxHiányzás) maxHiányzóTanulók.push(key);
        });
        return maxHiányzóTanulók;
    }

    constructor(forrás: string) {
        let aktDátum: string = "";
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor: string = i.trim();
                if (aktSor[0] === "#") aktDátum = aktSor;
                else if (aktSor.length > 0) this.#hiányzók.push(new Hiányzó(aktDátum, aktSor));
            });
    }

    public megszamolHiányzások(napNeve: string, óraSorszáma: number): number {
        let hiányzásokDb: number = 0;
        this.#hiányzók.forEach(e => {
            hiányzásokDb += e.volt_hianyzas(napNeve, óraSorszáma) ? 1 : 0;
        });
        return hiányzásokDb;
    }
}
