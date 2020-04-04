import Knight from "./Knight";
import NullPiece from "./NullPiece";

describe("Knight", () => {
  let knight: Knight;
  beforeEach(() => {
    knight = new Knight();
  });


  it("cannot move one up", () => {
    expect(knight.canMoveTo(2, 2, 3, 2, new NullPiece())).toBe(false);
  });

  it("moves two to the left and one down", () => {
    expect(knight.canMoveTo(0, 2, 1, 0, new NullPiece())).toBe(true);
  });

  it("moves one to the left and two down", () => {
    expect(knight.canMoveTo(0, 2, 2, 1, new NullPiece())).toBe(true);
  });

  it("moves two to the left and one up", () => {
    expect(knight.canMoveTo(1, 2, 0, 0, new NullPiece())).toBe(true);
  });

  it("moves one to the left and two up", () => {
    expect(knight.canMoveTo(2, 2, 0, 1, new NullPiece())).toBe(true);
  });

  it("moves two to the right and one down", () => {
    expect(knight.canMoveTo(0, 0, 1, 2, new NullPiece())).toBe(true);
  });

  it("moves one to the right and two down", () => {
    expect(knight.canMoveTo(0, 0, 2, 1, new NullPiece())).toBe(true);
  });

  it("moves two to the right and one up", () => {
    expect(knight.canMoveTo(1, 0, 0, 2, new NullPiece())).toBe(true);
  });

  it("moves one to the right and two up", () => {
    expect(knight.canMoveTo(2, 0, 0, 1, new NullPiece())).toBe(true);
  });
});

