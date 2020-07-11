import { border } from './borders';

describe('border', () => {
  it('sets the border width and color', () => {
    const actual = border({});

    expect(typeof actual.borderWidth).toBe('number');
    expect(typeof actual.borderColor).toBe('string');
  });

  it('sets all border properties when `all` is `true`', () => {
    const actual = border({
      all: true,
    });

    expect(typeof actual.borderTop).toBe('string');
    expect(typeof actual.borderRight).toBe('string');
    expect(typeof actual.borderBottom).toBe('string');
    expect(typeof actual.borderLeft).toBe('string');
  });

  it('sets just `borderTop` when `top` is `true`', () => {
    const actual = border({
      top: true,
    });

    expect(typeof actual.borderTop).toBe('string');
    expect(actual.borderRight).toBeUndefined();
    expect(actual.borderBottom).toBeUndefined();
    expect(actual.borderLeft).toBeUndefined();
  });

  it('sets just `borderRight` when `right` is `true`', () => {
    const actual = border({
      right: true,
    });

    expect(actual.borderTop).toBeUndefined();
    expect(typeof actual.borderRight).toBe('string');
    expect(actual.borderBottom).toBeUndefined();
    expect(actual.borderLeft).toBeUndefined();
  });

  it('sets just `borderBottom` when `bottom` is `true`', () => {
    const actual = border({
      bottom: true,
    });

    expect(actual.borderTop).toBeUndefined();
    expect(actual.borderRight).toBeUndefined();
    expect(typeof actual.borderBottom).toBe('string');
    expect(actual.borderLeft).toBeUndefined();
  });

  it('sets just `borderLeft` when `left` is `true`', () => {
    const actual = border({
      left: true,
    });

    expect(actual.borderTop).toBeUndefined();
    expect(actual.borderRight).toBeUndefined();
    expect(actual.borderBottom).toBeUndefined();
    expect(typeof actual.borderLeft).toBe('string');
  });
});
