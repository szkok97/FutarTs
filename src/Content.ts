import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // 1. feladat: Olvassa be a tavok.txt állományban talált adatokat, s annak felhasználásával oldja meg a következő feladatokat!
        const megold: Megoldas = new Megoldas("tavok.txt");

        // 2. feladat Írja ki a képernyőre, hogy mekkora volt a hét legelső útja kilométerben! Figyeljen arra,
        // hogy olyan állomány esetén is helyes értéket adjon, amiben például a hét első napján
        // a futár nem dolgozott!
        res.write("2. feladat:");
        res.write(`<p>\t${megold.LegelsoFuvar}km volt a hét első fuvara.</p>`);

        // 3. feladat: Írja ki a képernyőre, hogy mekkora volt a hét utolsó útja kilométerben!
        res.write("3. feladat:");
        res.write(`<p>\t${megold.LegutolsoFuvar}km volt a hét utolsó fuvara.</p>`);

        // 4. feladat: Tudjuk, hogy a futár minden héten tart legalább egy szabadnapot. Írja ki a képernyőre,
        // hogy a hét hányadik napjain nem dolgozott a futár!
        res.write("4. feladat:");
        for (const item of megold.Pihenonapok) {
            res.write(`<p>\tA futár pihenőnapot tartott a(z): ${item}. napon</p>`);
        }

        // 5. feladat: Írja ki a képernyőre, hogy a hét melyik napján volt a legtöbb fuvar! Amennyiben több nap
        // is azonos, maximális számú fuvar volt, elegendő ezek egyikét kiírnia.
        res.write("5. feladat:");
        res.write(`<p>\t${megold.LegtobbFuvar}. napon volt a legtöbb fuvara.</p>`);

        //6. feladat: Számítsa ki és írja a képernyőre a mintának megfelelően, hogy az egyes napokon hány
        // kilométert kellett tekerni!
        res.write("6. feladat:");
        for (const item of megold.NapPerKilometer) {
            res.write(`<p>\t${item}</p>`);
        }

        // 7. feladat: Kérjen be a felhasználótól egy tetszőleges távolságot, és határozza meg, hogy mekkora
        // díjazás jár érte! Ezt írja a képernyőre!
        res.write("7. feladat:\n\t");
        const params = url.parse(req.url as string, true).query;
        let kilometer: number = parseInt(params.kilometer as string);
        if (isNaN(kilometer)) kilometer = 1;
        res.write(`Kérem a km-t: <input type='number' name='kilometer' value=${kilometer} style='width:3em;' onChange='this.form.submit();'>\n`);
        res.write(`\t${kilometer}km ${megold.Fizetes(kilometer)}Ft-ba kerül`);

        // 8. feladat: Határozza meg az összes rögzített út ellenértékét! Ezeket az értékeket írja ki
        // a dijazas.txt állományba nap szerint, azon belül pedig az út sorszáma szerinti
        // növekvő sorrendben az alábbi formátumban:
        megold.FajlbaIras;

        // 9. feladat: Határozza meg, és írja ki a képernyőre, hogy a futár mekkora összeget kap a heti
        // munkájáért!
        res.write("\n9. feladat:");
        res.write(`<p>\tA futár heti bevétele: ${megold.Bevetel}Ft volt<p>`);
        res.write("</pre></form></body></html>");
        res.end();
    }
}
