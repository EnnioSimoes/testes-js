import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Ennio',
      profession: 'developer',
    };
    expect(queryString(obj)).toBe('name=Ennio&profession=developer');
  });

  it('should create a valid query string even when an array is passsed as value', () => {
    const obj = {
      name: 'Ennio',
      abilities: ['js', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=Ennio&abilities=js,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Ennio',
      abilities: {
        first: 'js',
        second: 'TDD',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query String to Object', () => {
  it('should convert a query to object', () => {
    const qs = 'name=Ennio&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Ennio',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Ennio';
    expect(parse(qs)).toEqual({
      name: 'Ennio',
    });
  });

  it('should convert a query string to an object taking care of comma separated value', () => {
    const qs = 'name=Ennio&abilities=js,TDD';

    expect(parse(qs)).toEqual({
      name: 'Ennio',
      abilities: ['js', 'TDD'],
    });
  });
});
