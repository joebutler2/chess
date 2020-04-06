import KingMoveSetEngine from "../movement/KingMoveSetEngine";

describe("King", () => {
  let moveSetEngine: KingMoveSetEngine;
  beforeEach(() => {
    moveSetEngine = new KingMoveSetEngine()
  });

  // It cannot move by two
  it("can move by one", () => {
    expect(moveSetEngine.canMoveTo(2, 2, 3, 2)).toBe(true);
    expect(moveSetEngine.canMoveTo(2, 2, 1, 2)).toBe(true);
    expect(moveSetEngine.canMoveTo(2, 2, 2, 1)).toBe(true);
    expect(moveSetEngine.canMoveTo(2, 2, 2, 3)).toBe(true);
  });

  it("cannot move by more than one", () => {
    expect(moveSetEngine.canMoveTo(2, 2, 4, 2)).toBe(false);
    expect(moveSetEngine.canMoveTo(2, 2, 0, 2)).toBe(false);
    expect(moveSetEngine.canMoveTo(2, 2, 2, 0)).toBe(false);
    expect(moveSetEngine.canMoveTo(2, 2, 2, 4)).toBe(false);
    expect(moveSetEngine.canMoveTo(2, 2, 3, 4)).toBe(false);
  });
});
