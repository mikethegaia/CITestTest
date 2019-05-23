const sum = require('../index');

test('adds 1 + 2 to equals 3', sumTest);

test('adds 2 + 5 equals 7', () => {
    expect(sum(2, 5)).toBe(7);
});

function sumTest() {
    expect(sum(1, 2)).toBe(3);
}