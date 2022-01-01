import { sum } from '../sum';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

test('should not be greater than 3', ()=>{
    let actual = sum(1,2);
    expect(actual).not.toBeGreaterThan(3);
});