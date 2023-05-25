import Segéd from "../Seged";

describe("Segéd statikus osztály unit tesztek", () => {
    it("hetNapja() statikus metódus teszt", async () => {
        expect(Segéd.hetNapja(1, 5)).toBe("pentek");
        expect(Segéd.hetNapja(2, 3)).toBe("szombat");
        expect(Segéd.hetNapja(3, 27)).toBe("kedd");
        expect(Segéd.hetNapja(12, 27)).toBe("csutortok");
    });
});
