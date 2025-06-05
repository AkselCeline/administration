const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/scrape", async (req, res) => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto("https://consulat-paris-algerie.fr/etat-civil/acte-naissance-12s/", {
            waitUntil: "networkidle2",
        });
        await page.screenshot({ path: "screenshot.png" });
        const data = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("p")).map(p => p.textContent.trim());
        });

        await browser.close();
        res.json({ info: data });
        console.log("Données extraites :", data);

    } catch (error) {
        console.error("Erreur lors du scraping :", error);
        res.status(500).json({ error: "Impossible de récupérer les données" });
    }
});

app.listen(5000, () => {
    console.log("Serveur en cours d'exécution sur http://localhost:5000");
});
