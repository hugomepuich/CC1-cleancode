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

function calculatePoints(rolls, skip_to_sum = false) {

    if (!skip_to_sum) {
        if (hasNMatching(rolls, 5)) {
            return { "points": 50, 'figure': 'Y' };
        }

        if (GrandSuite(rolls) && rolls.length == 5) {
            return { "points": 40, 'figure': 'G' }
        }

        // Full
        if (hasNMatching(rolls, 3) && hasNMatching(rolls, 2)) {
            return { "points": 30, 'figure': 'F' }
        }

        // Carré
        if (hasNMatching(rolls, 4)) {
            return { "points": 35, 'figure': 'C' }
        }

        // Brelan
        if (hasNMatching(rolls, 3)) {
            return { "points": 28, 'figure': 'B' }
        }
    }
    const sum = rolls.reduce((a, b) => a + b, 0);
    return { "points": sum, 'figure': undefined };
}

// J'crois qu'il y avait pas besoin de ça en fait j'ai mal compris tant pis
function CalculatePoints(rolls) {
    if (Array.isArray(rolls)) {
        if (Array.isArray(rolls[0]) == Array) {
            const points = [];
            let figures = {
                'B': 0,
                'C': 0,
                'F': 0,
                'G': 0,
                'Y': 0
            }

            rolls.forEach((roll) => {
                const res = calculatePoints(roll);
                if (res.figure != undefined) {
                    const figure = res.figure;
                    if (figures[figure] == 0) {
                        figures[figure]++;
                        points += res.points;
                    }
                    else {
                        points += calculatePoints(roll, skip_to_sum=true)
                    }
                }
                else {
                    points += res.points;
                }
            })
            return points;
        }
        const pts = calculatePoints(rolls);
        console.log(pts);
        return pts.points;
    }
    return 0;
}

exports.calc = CalculatePoints;
exports.matching = MatchingDices;
exports.NMatching = hasNMatching;
exports.gs = GrandSuite;
exports.yams = Yams;