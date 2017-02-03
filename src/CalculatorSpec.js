import Calculator from './Calculator';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const sum = Calculator.add(5, 2);
    expect(sum).toBe(7);
  });

  it('should substract two numbers', () => {
    const sub = Calculator.sub(5, 2);
    expect(sub).toBe(3);
  });
});
