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
    public get LegelsoFuvar(): number {
        let elsoFuvar = 0;
        for (let i = 0; i < this.Fuvarok.length; i++) {
            if (this.Fuvarok[i].Getnap === 1 && this.Fuvarok[i].Getsorszam === 1) elsoFuvar = this.Fuvarok[i].Getut;
        }
        return elsoFuvar;
    }
    public get LegutolsoFuvar(): number {
        let utolsoFuvar = 0;
        for (let i = 0; i < this.Fuvarok.length; i++) {
            if (this.Fuvarok[i].Getnap === 7 && this.Fuvarok[i].Getsorszam === 8) utolsoFuvar = this.Fuvarok[i].Getut;
        }
        return utolsoFuvar;
    }
    public get Pihenonapok(): Array<number> {
        let darab = 0;
        const pihenok: number[] = [];
        for (let j = 1; j < 8; j++) {
            for (let i = 0; i < this.Fuvarok.length; i++) {
                if (this.Fuvarok[i].Getnap === j) {
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
    public get LegtobbFuvar(): number {
        let darab = 0;
        let max = 0;
        let legtobb = 0;
        for (let j = 1; j < 8; j++) {
            for (let i = 0; i < this.Fuvarok.length; i++) {
                if (this.Fuvarok[i].Getnap === j) {
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
    public get NapPerKilometer(): Array<string> {
        let megtettKm = 0;
        const napPerKm: string[] = [];
        for (let j = 1; j < 8; j++) {
            for (let i = 0; i < this.Fuvarok.length; i++) {
                if (this.Fuvarok[i].Getnap === j) {
                    megtettKm += this.Fuvarok[i].Getut;
                }
            }
            napPerKm.push(`${j}. nap: ${megtettKm} km`);
            megtettKm = 0;
        }
        return napPerKm;
    }
    public Fizetes(kilometer: number): number {
        let fizetes = 0;
        if (kilometer > 0 && kilometer < 3) {
            fizetes = 500;
        } else if (kilometer > 2 && kilometer < 6) {
            fizetes = 700;
        } else if (kilometer > 5 && kilometer < 11) {
            fizetes = 900;
        } else if (kilometer > 10 && kilometer < 21) {
            fizetes = 1400;
        } else if (kilometer > 20 && kilometer < 31) {
            fizetes = 2000;
        }
        return fizetes;
    }
    public FajlbaIras(): void {
        const dijazas: string[] = [];
        for (let i = 1; i < 8; i++) {
            for (let j = 1; j < 31; j++) {
                for (let k = 0; k < this.Fuvarok.length; k++) {
                    if (this.Fuvarok[k].Getnap === i && this.Fuvarok[k].Getsorszam === j) {
                        dijazas.push(`${this.Fuvarok[k].Getnap} ${this.Fuvarok[k].Getsorszam} ${this.Fuvarok[k].Getut} ${this.Fuvarok[k].Getfiz}\n`);
                    }
                }
            }
        }
        fs.writeFileSync("dijazas.txt", dijazas.join(""));
    }
    public get Bevetel(): number {
        let bevetel = 0;
        for (const i of this.Fuvarok) {
            bevetel += i.Getfiz;
        }
        return bevetel;
    }
}
