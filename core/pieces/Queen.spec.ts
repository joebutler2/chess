import Team from "../Team";
import Piece from "./Piece";
import Queen from "./Queen";
import QueenMoveSetEngine from "../movement/QueenMoveSetEngine";
import {createNullPieces} from "../TestUtils";

describe("Queen", () => {
  let moveSetEngine: QueenMoveSetEngine;
  let pieces: Piece[][];
  let queen: Queen;
  beforeEach(() => {
    pieces = createNullPieces();
    queen = new Queen(Team.Black);
    moveSetEngine = new QueenMoveSetEngine(pieces);
  });

  it("can move directionally", () => {
    pieces[3][3] = queen;
    expect(moveSetEngine.canMoveTo(3, 3, 0, 3)).toBe(true);
    expect(moveSetEngine.canMoveTo(3, 3, 3, 0)).toBe(true);
    expect(moveSetEngine.canMoveTo(3, 3, 3, 7)).toBe(true);
    expect(moveSetEngine.canMoveTo(3, 3, 7, 3)).toBe(true);
  });

  it("can move diagonally", () => {
    pieces[4][4] = queen;
    expect(moveSetEngine.canMoveTo(4, 4, 0, 0)).toBe(true);
    expect(moveSetEngine.canMoveTo(4, 4, 7, 7)).toBe(true);
    expect(moveSetEngine.canMoveTo(4, 4, 1, 7)).toBe(true);
    expect(moveSetEngine.canMoveTo(4, 4, 7, 1)).toBe(true);
  });
});

