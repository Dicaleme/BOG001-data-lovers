import {searchData, sortData, filterTank, filterAssassin, filterFighter, 
  filterMage, filterMarksman, filterSupport, filterEveryone} from  '../src/data.js';

//Tanks//
describe('filterTank', () => {
  it('Should be a function', () => {
    expect(typeof filterTank).toBe('function');
  });

  it('Should filter characters who´s rol are "Tank" ', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = 'Tank';
    const output = [
      { tags: 'Tank' },      
    ];
    expect(filterTank(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Assassins//
describe('filterAssassin', () => {
  it('Should be a function', () => {
    expect(typeof filterAssassin).toBe('function');
  });

  it('Should filter characters who´s rol are "Assassins" ', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = 'Assassin';
    const output = [
      { tags: 'Assassin' },
      
    ];
    expect(filterAssassin(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Fighter//
describe('filterFighter', () => {
  it('Should be a function', () => {
    expect(typeof filterFighter).toBe('function');
  });

  it('Should filter characters who´s rol are "Fighter" ', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = 'Fighter';
    const output = [
      { tags: 'Fighter' },
      
    ];
    expect(filterFighter(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Mages//
describe('filterMage', () => {
  it('Should be a function', () => {
    expect(typeof filterMage).toBe('function');
  });

  it('Should filter characters who´s rol are "Mages" ', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = 'Mage';
    const output = [
      { tags: 'Mage' },
      
    ];
    expect(filterMage(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Marksman//
describe('filterMarksman', () => {
  it('Should be a function', () => {
    expect(typeof filterMarksman).toBe('function');
  });

  it('Should filter characters who´s rol are "Marksman" ', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = 'Marksman';
    const output = [
      { tags: 'Marksman'},
      
    ];
    expect(filterMarksman(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Supports//
describe('filterSupport', () => {
  it('Should be a function', () => {
    expect(typeof filterSupport).toBe('function');
  });

  it('Should filter characters who´s rol are "Supports" ', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = 'Support';
    const output = [
      { tags: 'Support' },
      
    ];
    expect(filterSupport(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Everyone//
describe('filterEveryone', () => {
  it('Should be a function', () => {
    expect(typeof filterEveryone).toBe('function');
  });

  it('Should filter all characters', () => {
    const searchCharactersRol = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
    ];
    const userInput = [] 
    const output = [
      { tags: 'Assassin' },
      { tags: 'Fighter' },
      { tags: 'Mage' },
      { tags: 'Tank' },
      { tags: 'Support' },
      { tags: 'Marksman'},
      
    ];
    expect(filterEveryone(searchCharactersRol, userInput)).toEqual(output);
  });
});

//Search Characters by name//
describe('searchData', () => {
  it('Should be a function', () => {
    expect(typeof searchData).toBe('function');
  });
  
  it('Should filter characters who´s name starts with letter "a" ', () => {
    const searchCharactersNames =[
      {name: 'Aatrox'},
      {name: 'Zyra'},
      {name: 'Diana'},
      {name: 'Volibear'},
      {name: 'Anivia'},
      {name: 'Teemo'},
      {name: 'Azir'},
    ];
    const userInput = 'a';
    const outPut =[
      {name: 'Aatrox'},
      {name: 'Anivia'},
      {name: 'Azir'},
    ];
    expect(searchData(searchCharactersNames, userInput)).toEqual(outPut);
  });
});

//Sort Characters by alphabetical order asc a-z//
describe('sortData', () => {
  it('Should be a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Should sort characters who´s name starts with letter "a-z" ', () => {
    const sortCharactersNames =[
      {name: 'Braum'},
      {name: 'Zyra'},
      {name: 'Caitlyn'},
      {name: 'Volibear'},
      {name: 'Aatrox'},
      {name: 'Teemo'},
      {name: 'Diana'},
    ];
    const userInput = 'asc';
    const outPut = [
      {name: 'Aatrox'},      
      {name: 'Braum'},
      {name: 'Caitlyn'},
      {name: 'Diana'},
      {name: 'Teemo'},
      {name: 'Volibear'},
      {name: 'Zyra'},
    ]
    expect(sortData(sortCharactersNames, userInput)).toEqual(outPut);
  });
});


