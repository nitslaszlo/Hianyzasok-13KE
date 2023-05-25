import Megoldas from "../Megoldas";

describe("Megoldás osztály unit tesztek", () => {
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

    it("MegszámolHiányzás() metódus tesztje", async () => {
        expect(mego1.megszamolHiányzások("szerda", 3)).toBe(49);
    });

    it("Legtöbbet hiányzó tnulók", async () => {
        expect(mego1.legtöbbetHiányzóTanulók).toStrictEqual(["Kivi Adrienn", "Jujuba Ibolya"]);
    });
});
