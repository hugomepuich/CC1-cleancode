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

function CalculatePoints(rolls) {
    const sum = rolls.reduce((a, b) => a + b, 0);
    return sum;
}

exports.calc = CalculatePoints;
exports.matching = MatchingDices;