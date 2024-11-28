const calculator = require('./calculator');

test('Voir si la somme fonctionne bien', () => {
    expect(calculator.calc([1])).toBe(1);
    expect(calculator.calc([1,2])).toBe(3);
    expect(calculator.calc([1,2,3])).toBe(6);
    expect(calculator.calc([1,2,3,4,5,6])).toBe(21);
})

test('Voir si le matching fonctionne', () => {
    expect(calculator.matching([1, 2, 1, 3, 5])['1'])
    .toBe(2);
    expect(calculator.matching([1, 2, 1, 3, 5])['2'])
    .toBe(1);
    expect(calculator.matching([1, 2, 1, 3, 5])['6'])
    .toBe(undefined);
})