
const fetch = require('node-fetch');


jest.mock('node-fetch');


describe('manyCharacters', () => {
  it('takes an array of ids and returns a promise that resolves with an array of characters', async() => {
    fetch.mockResolvedValue({
      json: () => Promise.resolve([
        'Name: Morty Smith, Status: Alive, Species: Human',
        'Name: Beth Smith, Status: Alive, Species: Human',
        'Name: Abadango Cluster Princess, Status: Alive, Species: Alien',
        'Name: Adjudicator Rick, Status: Dead, Species: Human',
      ])
    });

  });
});
