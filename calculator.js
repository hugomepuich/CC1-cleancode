function hasNMatching(rolls, x) {
    rolls_count = MatchingDices(rolls);

    for (const key in rolls_count) {
        if (rolls_count[key] == x) {
            return true;
        }
    }

    return false;
}

function MatchingDices(rolls) {
    rolls_count = {};
    
    rolls.forEach((roll, index) => {
        if (rolls_count[roll] === undefined) {
            rolls_count[roll] = 1;
        } else {
            rolls_count[roll]++;
        }
    });

    return rolls_count;
}

function GrandSuite(rolls) {

    for (let i = 1; i < rolls.length; i++) {
        if (rolls[i] != rolls[i - 1] + 1) return false;
    }

    return true;
}

function Yams(rolls) {
    return rolls.filter((val) => val == rolls[0]).length == 5;
}

function CalculatePoints(rolls) {

    //const matching = MatchingDices(rolls);

    if (GrandSuite(rolls) && rolls.length == 5) {
        return 40;
    }

    // Full
    if (hasNMatching(rolls, 3) && hasNMatching(rolls, 2)) {
        return 30;
    }

    // Brelan
    if (hasNMatching(rolls, 3)) {
        return 28;
    }

    // Carré
    if (hasNMatching(rolls, 4)) {
        return 35;
    }


    const sum = rolls.reduce((a, b) => a + b, 0);
    return sum;
}

exports.calc = CalculatePoints;
exports.matching = MatchingDices;
exports.NMatching = hasNMatching;
exports.gs = GrandSuite;
exports.yams = Yams;