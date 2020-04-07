import Piece from "./Piece";
import Bishop from "./Bishop";
import Rook from "./Rook";
import Team from "../Team";
import BishopMoveSetEngine from "../movement/BishopMoveSetEngine";
import {createNullPieces} from "../TestUtils";

describe("Bishop", () => {
  let pieces: Piece[][];
  let bishop: Bishop;
  let moveSetEngine: BishopMoveSetEngine;
  beforeEach(() => {
    pieces = createNullPieces();
    bishop = new Bishop(Team.Black);
    moveSetEngine = new BishopMoveSetEngine(pieces);
  });

  it("can move diagonally to the bottom right all the way to the corner of the board", () => {
    pieces[0][0] = bishop;
    expect(moveSetEngine.canMoveTo(0, 0, 7, 7)).toBe(true);
  });

  it("can move diagonally to the bottom right until it encounters a piece.", () => {
    pieces[0][0] = bishop;
    pieces[5][5] = new Rook(Team.Black);
    expect(moveSetEngine.canMoveTo(0, 0, 7, 7)).toBe(false);
    pieces[5][5] = new Rook(Team.White);
    expect(moveSetEngine.canMoveTo(0, 0, 7, 7)).toBe(false);
    expect(moveSetEngine.canMoveTo(0, 0, 5, 5)).toBe(true);
  });

  it("can move diagonally to the top right all the way to the corner of the board", () => {
    pieces[7][0] = bishop;
    expect(moveSetEngine.canMoveTo(7, 0, 0, 7)).toBe(true);
  });

  it("can move diagonally to the top right until it encounters a piece.", () => {
    pieces[7][0] = bishop;
    pieces[5][2] = new Rook(Team.Black);
    expect(moveSetEngine.canMoveTo(7, 0, 0, 7)).toBe(false);
    pieces[5][2] = new Rook(Team.White);
    expect(moveSetEngine.canMoveTo(7, 0, 0, 7)).toBe(false);
    expect(moveSetEngine.canMoveTo(7, 0, 5, 2)).toBe(true);
  });

  it("can move diagonally to the top left all the way to the corner of the board", () => {
    pieces[7][7] = bishop;
    expect(moveSetEngine.canMoveTo(7, 7, 0, 0)).toBe(true);
  });

  it("can move diagonally to the top left until it encounters a piece.", () => {
    pieces[7][7] = bishop;
    pieces[2][2] = new Rook(Team.Black);
    expect(moveSetEngine.canMoveTo(7, 7, 0, 0)).toBe(false);
    pieces[2][2] = new Rook(Team.White);
    expect(moveSetEngine.canMoveTo(7, 7, 0, 0)).toBe(false);
    expect(moveSetEngine.canMoveTo(7, 7, 2, 2)).toBe(true);
  });

  it("can move diagonally to the bottom left all the way to the corner of the board", () => {
    pieces[0][7] = bishop;
    expect(moveSetEngine.canMoveTo(0, 7, 7, 0)).toBe(true);
  });

  it("can move diagonally to the bottom left until it encounters a piece.", () => {
    pieces[0][7] = bishop;
    pieces[5][2] = new Rook(Team.Black);
    expect(moveSetEngine.canMoveTo(0, 7, 7, 0)).toBe(false);
    pieces[5][2] = new Rook(Team.White);
    expect(moveSetEngine.canMoveTo(0, 7, 7, 0)).toBe(false);
    expect(moveSetEngine.canMoveTo(0, 7, 5, 2)).toBe(true);
  });
});
