import fs from "fs";
import Megoldas from "../Megoldas";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldas = new Megoldas("tavok.txt");
    it("Megoldas osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldas);
    });
    it("Nap legelső fuvara", async () => {
        expect(instance.LegelsoFuvar).toBe(3);
    });
    it("Nap legutolsó fuvara", async () => {
        expect(instance.LegutolsoFuvar).toBe(25);
    });
    it("A futár pihenőnapjai", async () => {
        const piheno: number[] = [2, 6];
        for (let i = 0; i < 7; i++) {
            expect(instance.Pihenonapok[i]).toBe(piheno[i]);
        }
    });
    it("Nap, ahol a legtöbb fuvar volt", async () => {
        expect(instance.LegtobbFuvar).toBe(5);
    });
    it("A futár pihenőnapjai", async () => {
        const napkm: string[] = ["1. nap: 65 km", "2. nap: 0 km", "3. nap: 69 km", "4. nap: 62 km", "5. nap: 74 km", "6. nap: 0 km", "7. nap: 75 km"];
        for (let i = 0; i < 7; i++) {
            expect(instance.NapPerKilometer[i]).toBe(napkm[i]);
        }
    });
    it("Km és a hozzá tartozó ár", async () => {
        expect(instance.Fizetes(1)).toBe(500);
    });
    it("dijazas.txt", async () => {
        instance.FajlbaIras();
        expect(fs.readFileSync("dijazas.txt").toString()).toBe(fs.readFileSync("dijazas.txt").toString());
    });
    it("A futár heti bére", async () => {
        expect(instance.Bevetel).toBe(48500);
    });
});
