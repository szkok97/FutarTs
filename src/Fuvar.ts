export default class Fuvar {
    private _nap: number;
    private _sorszam: number;
    private _ut: number;
    private _fizetes: number;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._nap = parseInt(m[0]);
        this._sorszam = parseInt(m[1]);
        this._ut = parseInt(m[2]);
        this._fizetes = this.fizetesMegallapitas(this._ut);
    }
    public get nap(): number {
        return this._nap;
    }
    public get sorszam(): number {
        return this._sorszam;
    }
    public get ut(): number {
        return this._ut;
    }
    public get fiz(): number {
        return this._fizetes;
    }
    public fizetesMegallapitas(utHossza: number): number {
        let fizu = 0;
        if (utHossza > 0 && utHossza < 3) {
            fizu = 500;
        } else if (utHossza > 2 && utHossza < 6) {
            fizu = 700;
        } else if (utHossza > 5 && utHossza < 11) {
            fizu = 900;
        } else if (utHossza > 10 && utHossza < 21) {
            fizu = 1400;
        } else if (utHossza > 20 && utHossza < 31) {
            fizu = 2000;
        }
        return fizu;
    }
}
