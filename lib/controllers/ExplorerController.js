const ExplorerService = require('../services/ExplorerService');
const FizzBuzzService = require('../services/FizzBuzzService');
const Reader = require('../utils/Reader');

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('./data/explorers.json');
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernameByMission(mission){
        const explorers = Reader.readJsonFile('./data/explorers.json');
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile('./data/explorers.json');
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static fizzbuzzNumber(number){
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;