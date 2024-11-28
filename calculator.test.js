const calculator = require('./calculator');

test('Voir si la somme fonctionne bien', () => {
    expect(calculator.calc([1,2,3,4,5,6])).toBe(21);
})