import Fuvar from "../Fuvar";

describe("Fuvar osztály unit tesztek:", () => {
    const instance: Fuvar = new Fuvar("2 1 2 500");
    it("Fuvar osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Fuvar);
    });
    it("Fuvar napja", async () => {
        expect(instance.nap).toBe(2);
    });
    it("Fuvar sorszáma", async () => {
        expect(instance.sorszam).toBe(1);
    });
    it("Fuvar kilóméter", async () => {
        expect(instance.ut).toBe(2);
    });
    it("Fuvar ára", async () => {
        expect(instance.fiz).toBe(500);
    });
    it("Fuvar ára", async () => {
        expect(instance.fizetesMegallapitas(2)).toBe(500);
    });
});
