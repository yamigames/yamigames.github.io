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

    expect(actual.borderTopStyle).toBe('solid');
    expect(actual.borderRightStyle).toBe('solid');
    expect(actual.borderBottomStyle).toBe('solid');
    expect(actual.borderLeftStyle).toBe('solid');
  });

  it('sets just `borderTopStyle` when `top` is `true`', () => {
    const actual = border({
      top: true,
    });

    expect(actual.borderTopStyle).toBe('solid');
    expect(actual.borderRightStyle).toBeUndefined();
    expect(actual.borderBottomStyle).toBeUndefined();
    expect(actual.borderLeftStyle).toBeUndefined();
  });

  it('sets just `borderRightStyle` when `right` is `true`', () => {
    const actual = border({
      right: true,
    });

    expect(actual.borderTopStyle).toBeUndefined();
    expect(actual.borderRightStyle).toBe('solid');
    expect(actual.borderBottomStyle).toBeUndefined();
    expect(actual.borderLeftStyle).toBeUndefined();
  });

  it('sets just `borderBottomStyle` when `bottom` is `true`', () => {
    const actual = border({
      bottom: true,
    });

    expect(actual.borderTopStyle).toBeUndefined();
    expect(actual.borderRightStyle).toBeUndefined();
    expect(actual.borderBottomStyle).toBe('solid');
    expect(actual.borderLeftStyle).toBeUndefined();
  });

  it('sets just `borderLeftStyle` when `left` is `true`', () => {
    const actual = border({
      left: true,
    });

    expect(actual.borderTopStyle).toBeUndefined();
    expect(actual.borderRightStyle).toBeUndefined();
    expect(actual.borderBottomStyle).toBeUndefined();
    expect(actual.borderLeftStyle).toBe('solid');
  });

  it('supports responsive values for `all`', () => {
    const actual = border({
      all: [null, false, true],
    });

    ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'].forEach(
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

    expect(Array.isArray(actual.borderTopStyle)).toBe(true);
    expect(actual.borderTopStyle[0]).toBeNull();
    expect(actual.borderTopStyle[1]).toBe('none');
    expect(actual.borderTopStyle[2]).toBe('solid');
  });

  it('supports response values for `right`', () => {
    const actual = border({
      right: [null, false, true],
    });

    expect(Array.isArray(actual.borderRightStyle)).toBe(true);
    expect(actual.borderRightStyle[0]).toBeNull();
    expect(actual.borderRightStyle[1]).toBe('none');
    expect(actual.borderRightStyle[2]).toBe('solid');
  });

  it('supports response values for `bottom`', () => {
    const actual = border({
      bottom: [null, false, true],
    });

    expect(Array.isArray(actual.borderBottomStyle)).toBe(true);
    expect(actual.borderBottomStyle[0]).toBeNull();
    expect(actual.borderBottomStyle[1]).toBe('none');
    expect(actual.borderBottomStyle[2]).toBe('solid');
  });

  it('supports response values for `left`', () => {
    const actual = border({
      left: [null, false, true],
    });

    expect(Array.isArray(actual.borderLeftStyle)).toBe(true);
    expect(actual.borderLeftStyle[0]).toBeNull();
    expect(actual.borderLeftStyle[1]).toBe('none');
    expect(actual.borderLeftStyle[2]).toBe('solid');
  });
});
