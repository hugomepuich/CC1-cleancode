const calculator = require('./calculator');

// Sum (cas par défaut)
test('Voir si la somme fonctionne bien', () => {
    expect(calculator.calc([1])).toBe(1);
    expect(calculator.calc([1,2])).toBe(3);
    expect(calculator.calc([1,2,3])).toBe(6);
    expect(calculator.calc([1,2,3,4,5,6])).toBe(21);
});

// Matching
test('Voir si le matching fonctionne', () => {
    expect(calculator.matching([1, 2, 1, 3, 5])['1'])
    .toBe(2);
    expect(calculator.matching([1, 2, 1, 3, 5])['2'])
    .toBe(1);
    expect(calculator.matching([1, 2, 1, 3, 5])['6'])
    .toBe(undefined);
});


// N Matching
test('Voir si le NMatching fonctionne', () => {
    expect(calculator.NMatching([1, 1, 1, 1, 1], 5)).toBe(true);
    expect(calculator.NMatching([1, 1, 1, 1, 1], 4)).toBe(false);

    expect(calculator.NMatching([1, 2, 1], 2)).toBe(true);
    expect(calculator.NMatching([1, 2, 1, 3, 5], 2)).toBe(true);
    expect(calculator.NMatching([1, 2, 1, 3, 5], 3)).toBe(false);
    expect(calculator.NMatching([1, 2, 1, 2, 1], 3)).toBe(true);
});

// Brelan
test('Voir si le Brelan fonctionne', () => {
    expect(calculator.calc([1, 1, 1, 2, 3])).toBe(28);
    expect(calculator.calc([1, 2, 1, 6, 1])).toBe(28);
});

// Carré
test('Voir si le Carré fonctionne', () => {
    expect(calculator.calc([1, 1, 1, 1, 6])).toBe(35);
    expect(calculator.calc([1, 4, 4, 4, 4])).toBe(35);
});

// Full
test('Voir si le full fonctionne', () => {
    expect(calculator.calc([1,1,1,2,2])).toBe(30);
    expect(calculator.calc([3,3,5,5,5])).toBe(30);
});