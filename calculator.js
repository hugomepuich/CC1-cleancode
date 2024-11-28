function CalculatePoints(rolls) {
    const sum = rolls.reduce((a, b) => a + b, 0);
    return sum;
}

exports.calc = CalculatePoints;