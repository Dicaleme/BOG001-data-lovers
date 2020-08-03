import {searchData, sortData, dataFilter,filterAssassin,filterFighter,filterMage,filterMarksman,filterSupport,filterEveryone} from  '../src/data.js';


describe('searchData', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });

  it('returns `example`', () => {
    expect(searchData()).toBe('searchData');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
