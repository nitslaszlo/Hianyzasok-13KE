import Hianyzo from "../Hianyzo";

describe("Hianyzo osztály unit tesztek", () => {
    const tan1: Hianyzo = new Hianyzo("# 01 15", "Galagonya Alfonz OXXXXXX");
    const tan2: Hianyzo = new Hianyzo("# 01 16", "Alma Hedvig OOOOOIO");

    it("Hianyzo osztálypéldány ellenőrzése", async () => {
        expect(tan1).toBeInstanceOf(Hianyzo);
        expect(tan2).toBeInstanceOf(Hianyzo);
    });

    it("Igazolatlan hiányzások száma", async () => {
        expect(tan1.igazolatlanDb).toBe(0);
        expect(tan2.igazolatlanDb).toBe(1);
    });

    it("Igazolt hiányzások száma", async () => {
        expect(tan1.igazoltDb).toBe(6);
        expect(tan2.igazoltDb).toBe(0);
    });

    it("voltHiányzás() metódus teszje", async () => {
        expect(tan1.volt_hianyzas("hetfo", 1)).toBe(false);
        expect(tan1.volt_hianyzas("hetfo", 2)).toBe(true);
        expect(tan1.volt_hianyzas("kedd", 1)).toBe(false);
        expect(tan1.volt_hianyzas("kedd", 2)).toBe(false);
        expect(tan2.volt_hianyzas("kedd", 6)).toBe(true);
        expect(tan2.volt_hianyzas("kedd", 7)).toBe(false);
    });
});
