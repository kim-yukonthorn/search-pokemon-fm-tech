import { mockBulbasaur, mockCharmander, mockSquirtle } from "@/__mocks__/pokemon";

describe("Pokemon types", () => {
  it("Bulbasaur should have Grass type", () => {
    expect(mockBulbasaur.types).toContain("Grass");
  });

  it("Charmander should have Fire type", () => {
    expect(mockCharmander.types).toContain("Fire");
  });

  it("Squirtle should have Water type", () => {
    expect(mockSquirtle.types).toContain("Water");
  });
});
