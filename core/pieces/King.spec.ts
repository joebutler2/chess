import King from "./King";
import NullPiece from "./NullPiece";

describe("King", () => {
  let king: King;
  beforeEach(() => {
    king = new King();
  });

  // It cannot move by two
  it("can move by one", () => {
    expect(king.canMoveTo(2, 2, 3, 2, new NullPiece())).toBe(true);
    expect(king.canMoveTo(2, 2, 1, 2, new NullPiece())).toBe(true);
    expect(king.canMoveTo(2, 2, 2, 1, new NullPiece())).toBe(true);
    expect(king.canMoveTo(2, 2, 2, 3, new NullPiece())).toBe(true);
  });

  it("cannot move by more than one", () => {
    expect(king.canMoveTo(2, 2, 4, 2, new NullPiece())).toBe(false);
    expect(king.canMoveTo(2, 2, 0, 2, new NullPiece())).toBe(false);
    expect(king.canMoveTo(2, 2, 2, 0, new NullPiece())).toBe(false);
    expect(king.canMoveTo(2, 2, 2, 4, new NullPiece())).toBe(false);
    expect(king.canMoveTo(2, 2, 3, 4, new NullPiece())).toBe(false);
  });
});
