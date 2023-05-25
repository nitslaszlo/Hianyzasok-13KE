import fs from "fs"; //  https://nodejs.org/docs/latest-v14.x/api/fs.html
import http from "http"; //  https://nodejs.org/docs/latest-v14.x/api/http.html
import url from "url"; //  https://nodejs.org/docs/latest-v14.x/api/url.html
import Megoldás from "./Megoldas";
import Segéd from "./Seged";

export default class Content {
    public static content(req: http.IncomingMessage, res: http.ServerResponse): void {
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
        res.write("<meta charset='utf-8'>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = new url.URL(req.url as string, `http://${req.headers.host}/`).searchParams;

        const m: Megoldás = new Megoldás("naplo.txt");

        res.write(`2. feladat\nA naplóban ${m.bejegyzésekSzáma} bejegyzés van.\n`);
        res.write(`3. feladat\nAz igazolt hiányzások száma: ${m.osszIgazolt}, az igazolatlanoké ${m.osszIgazolatlan} óra.\n`);

        res.write("5. feladat\n");
        let iHónap = parseInt(params.get("ihonap") as string);
        if (isNaN(iHónap)) iHónap = 2;
        res.write(`<label>A hónap sorszáma=<input type='number' name='ihonap' value=${iHónap} style='max-width:100px;' onChange='this.form.submit();'></label>\n`);

        let iNap = parseInt(params.get("inap") as string);
        if (isNaN(iNap)) iNap = 3;
        res.write(`<label>A nap sorszáma=<input type='number' name='inap' value=${iNap} style='max-width:100px;' onChange='this.form.submit();'></label>\n`);
        res.write(`Azon a napon ${Segéd.hetNapja(iHónap, iNap)} volt.\n`);

        res.write("6. feladat\n");
        let iNapNeve = params.get("inapneve") as string;
        if (!iNapNeve || iNapNeve.length == 0) iNapNeve = "szerda";
        res.write(`<label>A nap neve=<input type='text' name='inapneve' value=${iNapNeve} style='max-width:100px;' onChange='this.form.submit();'></label>\n`);

        let iÓra = parseInt(params.get("iora") as string);
        if (isNaN(iÓra)) iÓra = 3;
        res.write(`<label>Az óra sorszáma=<input type='number' name='iora' value=${iÓra} style='max-width:100px;' onChange='this.form.submit();'></label>\n`);
        res.write(`Ekkor összesen ${m.megszamolHiányzások(iNapNeve, iÓra)} volt.\n`);

        res.write("7. feladat\n");
        res.write(`A legtöbbet hiányzó tanulók:  ${m.legtöbbetHiányzóTanulók.join(" ")}\n`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
