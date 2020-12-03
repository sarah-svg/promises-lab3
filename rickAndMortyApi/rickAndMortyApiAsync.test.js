const { rickAndMortyApiAsync } = require('./rickAndMortyApiAsync');

describe("rickAndMortyApiAsync", () => {
    it("takes an id and returns that characters name", async () => {
       const actual = await rickAndMortyApiAsync(1);
       expect(actual).toEqual("Name: Rick Sanchez, Status: Alive, Species: Human");

    });
});
