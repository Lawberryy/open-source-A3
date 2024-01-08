import average from '../src/average';

describe('average()', () => {
  it('should return NaN if the data is not an array', () => {
    const data = 'foo';
    expect(average(data)).toBeNaN();
  });

  it('should return NaN if the data is not an array of finite numbers', () => {
    const data = ['foo', 1, 2];
    expect(average(data)).toBeNaN();
  });

  it('should return the average of an array of numbers', () => {
    const data = [1, 2, 3];
    expect(average(data)).toBe(2);
  });
});


/** test('calculates the average of an array of numbers', () => {
    const numbers = [1, 2, 3];
    const expectedAverage = 2;

    const result = average(numbers);

    expect(result).toBe(expectedAverage);
});

test('throws an error if input is not an array', () => {
    const numbers = 123;

    expect(() => {
        average(numbers);
    }).toThrow('Input must be an array');
});

test('throws an error if input array contains non-integer values', () => {
    const numbers = [1, 2, '3'];

    expect(() => {
        average(numbers);
    }).toThrow('Input array must contain only integers');
});


test('returns NaN for an empty array', () => {
    const numbers = [];
    const expectedAverage = NaN;

    const result = average(numbers);

    expect(result).toBe(expectedAverage);
});
**/