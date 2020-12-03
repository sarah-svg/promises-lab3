const { fetchRickAndMorty } = require("./rickAndMortyApi");

describe("rickAndMorty", () => {
  it("takes an id and returns a promise that resolves to a character's name, status and species", async () => {
    const actual = await fetchRickAndMorty(1);
    expect(actual).toEqual("Name: Rick Sanchez, Status: Alive, Species: Human");
  });
});
