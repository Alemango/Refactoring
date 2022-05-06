const fs = require("fs");

class Reader{
    static readJsonFile(filePath){
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = Reader;