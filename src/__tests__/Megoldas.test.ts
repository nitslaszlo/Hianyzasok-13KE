import Megoldas from "../Megoldas";

describe("Hianyzo osztály unit tesztek", () => {
    const mego1: Megoldas = new Megoldas("naplo.txt");

    it("osztálypéldány ellenőrzése", async () => {
        expect(mego1).toBeInstanceOf(Megoldas);
    });

    it("bejegyzések száma", async () => {
        expect(mego1.bejegyzésekSzáma).toBe(139);
    });

    it("OsszIgazolatlan hiányzás", async () => {
        expect(mego1.osszIgazolatlan).toBe(18);
    });

    it("OsszIgazolat hiányzás", async () => {
        expect(mego1.osszIgazolt).toBe(788);
    });
});
