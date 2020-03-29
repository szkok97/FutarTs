export default class Fuvar {
    private nap: number;
    private sorszam: number;
    private ut: number;
    private fizetes: number;

    constructor(sor: string) {
        let fizu = 0;
        const m: string[] = sor.split(" ");
        this.nap = parseInt(m[0]);
        this.sorszam = parseInt(m[1]);
        this.ut = parseInt(m[2]);
        if (parseInt(m[2]) > 0 && parseInt(m[2]) < 3) {
            fizu = 500;
        } else if (parseInt(m[2]) > 2 && parseInt(m[2]) < 6) {
            fizu = 700;
        } else if (parseInt(m[2]) > 5 && parseInt(m[2]) < 11) {
            fizu = 900;
        } else if (parseInt(m[2]) > 10 && parseInt(m[2]) < 21) {
            fizu = 1400;
        } else if (parseInt(m[2]) > 20 && parseInt(m[2]) < 31) {
            fizu = 2000;
        }
        this.fizetes = fizu;
    }
    public get Getnap(): number {
        return this.nap;
    }
    public get Getsorszam(): number {
        return this.sorszam;
    }
    public get Getut(): number {
        return this.ut;
    }
    public get Getfiz(): number {
        return this.fizetes;
    }
}
