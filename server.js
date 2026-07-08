const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const root = __dirname;

// Alle statischen Dateien zuerst
app.use(express.static(root));

// Jede URL ohne Dateiendung auf .html umbiegen
app.use((req, res, next) => {
    let urlPath = req.path;

    // Falls bereits eine Endung vorhanden ist, nichts tun
    if (path.extname(urlPath)) {
        return next();
    }

    // index
    if (urlPath === "/") {
        return res.sendFile(path.join(root, "index.html"));
    }

    // /t/rechtliches -> /t/rechtliches.html
    const htmlFile = path.join(root, urlPath + ".html");

    if (fs.existsSync(htmlFile)) {
        return res.sendFile(htmlFile);
    }

    // /foo -> /foo/index.html
    const indexFile = path.join(root, urlPath, "index.html");

    if (fs.existsSync(indexFile)) {
        return res.sendFile(indexFile);
    }

    next();
});

app.listen(3000, () => {
    console.log("Server läuft unter http://localhost:3000");
});