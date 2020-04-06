import fs from "fs";
import Fuvar from "./Fuvar";

export default class Megoldas {
    private Fuvarok: Fuvar[] = [];

    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this.Fuvarok.push(new Fuvar(aktSor));
            });
    }
    public get rendzettFuvarok(): Array<Fuvar> {
        const rendezettFuvarok: Fuvar[] = this.Fuvarok.sort(function (a, b) {
            if (a.nap > b.nap) return 1;
            if (a.nap < b.nap) return -1;
            if (a.sorszam > b.sorszam) return 1;
            if (a.sorszam < b.sorszam) return -1;
            return 0;
        });
        return rendezettFuvarok;
    }
    public get legelsoFuvar(): number {
        return this.rendzettFuvarok[0].ut;
    }
    public get legutolsoFuvar(): number {
        return this.rendzettFuvarok[this.rendzettFuvarok.length - 1].ut;
    }
    public get pihenonapok(): Array<number> {
        let darab = 0;
        const pihenok: number[] = [];
        for (let j = 1; j < 8; j++) {
            for (const i of this.rendzettFuvarok) {
                if (i.nap === j) {
                    darab++;
                }
            }
            if (darab === 0) {
                pihenok.push(j);
            }
            darab = 0;
        }
        return pihenok;
    }
    public get legtobbFuvar(): number {
        let darab = 0;
        let max = 0;
        let legtobb = 0;
        for (let j = 1; j < 8; j++) {
            for (const i of this.rendzettFuvarok) {
                if (i.nap === j) {
                    darab++;
                }
            }
            if (darab > max) {
                max = darab;
                legtobb = j;
            }
            darab = 0;
        }
        return legtobb;
    }
    public get napPerKilometer(): Array<string> {
        let megtettKm = 0;
        const napPerKm: string[] = [];
        for (let j = 1; j < 8; j++) {
            for (const i of this.rendzettFuvarok) {
                if (i.nap === j) {
                    megtettKm += i.ut;
                }
            }
            napPerKm.push(`${j}. nap: ${megtettKm} km`);
            megtettKm = 0;
        }
        return napPerKm;
    }
    public fizetes(kilometer: number): number {
        const fuvar: Fuvar = new Fuvar(`0 0 ${kilometer}`);
        return fuvar.fiz;
    }
    public fajlbaIras(): void {
        const dijazas: string[] = [];
        for (const i of this.rendzettFuvarok) {
            dijazas.push(`${i.nap} ${i.sorszam} ${i.ut} ${i.fiz}\n`);
        }
        fs.writeFileSync("dijazas.txt", dijazas.join(""));
    }
    public get bevetel(): number {
        let bevetel = 0;
        for (const i of this.Fuvarok) {
            bevetel += i.fiz;
        }
        return bevetel;
    }
}
