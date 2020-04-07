import KnightMoveSetEngine from "../movement/KnightMoveSetEngine";

describe("Knight", () => {
  let moveSetEngine: KnightMoveSetEngine;
  beforeEach(() => {
    moveSetEngine = new KnightMoveSetEngine();
  });

  it("cannot move one up", () => {
    expect(moveSetEngine.canMoveTo(2, 2, 3, 2)).toBe(false);
  });

  it("moves two to the left and one down", () => {
    expect(moveSetEngine.canMoveTo(0, 2, 1, 0)).toBe(true);
  });

  it("moves one to the left and two down", () => {
    expect(moveSetEngine.canMoveTo(0, 2, 2, 1)).toBe(true);
  });

  it("moves two to the left and one up", () => {
    expect(moveSetEngine.canMoveTo(1, 2, 0, 0)).toBe(true);
  });

  it("moves one to the left and two up", () => {
    expect(moveSetEngine.canMoveTo(2, 2, 0, 1)).toBe(true);
  });

  it("moves two to the right and one down", () => {
    expect(moveSetEngine.canMoveTo(0, 0, 1, 2)).toBe(true);
  });

  it("moves one to the right and two down", () => {
    expect(moveSetEngine.canMoveTo(0, 0, 2, 1)).toBe(true);
  });

  it("moves two to the right and one up", () => {
    expect(moveSetEngine.canMoveTo(1, 0, 0, 2)).toBe(true);
  });

  it("moves one to the right and two up", () => {
    expect(moveSetEngine.canMoveTo(2, 0, 0, 1)).toBe(true);
  });
});

