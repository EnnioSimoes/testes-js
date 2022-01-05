import { sum } from './calculator';

it('should sum 2 and 2 and return 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should convert strings in numbers and sum 2 and 2 and return 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error', () => {
  expect(() => {
    sum('', 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
