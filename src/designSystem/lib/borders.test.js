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

    expect(actual.borderTop).toBe('solid');
    expect(actual.borderRight).toBe('solid');
    expect(actual.borderBottom).toBe('solid');
    expect(actual.borderLeft).toBe('solid');
  });

  it('sets just `borderTop` when `top` is `true`', () => {
    const actual = border({
      top: true,
    });

    expect(actual.borderTop).toBe('solid');
    expect(actual.borderRight).toBeUndefined();
    expect(actual.borderBottom).toBeUndefined();
    expect(actual.borderLeft).toBeUndefined();
  });

  it('sets just `borderRight` when `right` is `true`', () => {
    const actual = border({
      right: true,
    });

    expect(actual.borderTop).toBeUndefined();
    expect(actual.borderRight).toBe('solid');
    expect(actual.borderBottom).toBeUndefined();
    expect(actual.borderLeft).toBeUndefined();
  });

  it('sets just `borderBottom` when `bottom` is `true`', () => {
    const actual = border({
      bottom: true,
    });

    expect(actual.borderTop).toBeUndefined();
    expect(actual.borderRight).toBeUndefined();
    expect(actual.borderBottom).toBe('solid');
    expect(actual.borderLeft).toBeUndefined();
  });

  it('sets just `borderLeft` when `left` is `true`', () => {
    const actual = border({
      left: true,
    });

    expect(actual.borderTop).toBeUndefined();
    expect(actual.borderRight).toBeUndefined();
    expect(actual.borderBottom).toBeUndefined();
    expect(actual.borderLeft).toBe('solid');
  });

  it('supports responsive values for `all`', () => {
    const actual = border({
      all: [null, false, true],
    });

    ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'].forEach(
      property => {
        expect(Array.isArray(actual[property])).toBe(true);
        expect(actual[property][0]).toBeNull();
        expect(actual[property][1]).toBe('none');
        expect(actual[property][2]).toBe('solid');
      }
    );
  });

  it('supports response values for `top`', () => {
    const actual = border({
      top: [null, false, true],
    });

    expect(Array.isArray(actual.borderTop)).toBe(true);
    expect(actual.borderTop[0]).toBeNull();
    expect(actual.borderTop[1]).toBe('none');
    expect(actual.borderTop[2]).toBe('solid');
  });

  it('supports response values for `right`', () => {
    const actual = border({
      right: [null, false, true],
    });

    expect(Array.isArray(actual.borderRight)).toBe(true);
    expect(actual.borderRight[0]).toBeNull();
    expect(actual.borderRight[1]).toBe('none');
    expect(actual.borderRight[2]).toBe('solid');
  });

  it('supports response values for `bottom`', () => {
    const actual = border({
      bottom: [null, false, true],
    });

    expect(Array.isArray(actual.borderBottom)).toBe(true);
    expect(actual.borderBottom[0]).toBeNull();
    expect(actual.borderBottom[1]).toBe('none');
    expect(actual.borderBottom[2]).toBe('solid');
  });

  it('supports response values for `left`', () => {
    const actual = border({
      left: [null, false, true],
    });

    expect(Array.isArray(actual.borderLeft)).toBe(true);
    expect(actual.borderLeft[0]).toBeNull();
    expect(actual.borderLeft[1]).toBe('none');
    expect(actual.borderLeft[2]).toBe('solid');
  });
});
