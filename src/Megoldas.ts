import Hiányzó from "./Hianyzo";
import fs from "fs";

export default class Megoldás {
    #hiányzók: Hiányzó[] = [];

    public get bejegyzésekSzáma(): number {
        return this.#hiányzók.length;
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
}
