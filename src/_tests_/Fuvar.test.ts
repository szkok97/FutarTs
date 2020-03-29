import Fuvar from "../Fuvar";

describe("Fuvar osztály unit tesztek:", () => {
    const instance: Fuvar = new Fuvar("2 1 2 500");
    it("Fuvar osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Fuvar);
    });
    it("Fuvar napja", async () => {
        expect(instance.Getnap).toBe(2);
    });
    it("Fuvar sorszáma", async () => {
        expect(instance.Getsorszam).toBe(1);
    });
    it("Fuvar kilóméter", async () => {
        expect(instance.Getut).toBe(2);
    });
    it("Fuvar ára", async () => {
        expect(instance.Getfiz).toBe(500);
    });
});
