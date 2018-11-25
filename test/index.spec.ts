import { joinString, joinClassName } from '../src';

describe('joinString', () => {
  test('use comma as delimiter', () => {
    const joinFn = joinString(', ');
    expect(joinFn('Malcolm', 'Eric', 'John')).toBe('Malcolm, Eric, John');
  });

  test('use - as delimiter', () => {
    const joinFn = joinString('-');
    expect(joinFn('Malcolm', 'Eric', 'John')).toBe('Malcolm-Eric-John');
  });

  test('boolean, undefined, null, "" are excluded from result', () => {
    const joinFn = joinString(', ');
    expect(joinFn('x', false, true, 'y', undefined, null, 'z', '')).toBe('x, y, z');
  });
});

describe('joinClassName', () => {
  test('boolean, undefined, null, "" are excluded from result', () => {
    expect(
      joinClassName(
        'button',
        false,
        true,
        'button--primary',
        undefined,
        null,
        'button--raised',
        ''
      )
    ).toBe('button button--primary button--raised');
  });
});
