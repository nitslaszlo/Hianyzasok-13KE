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
});
