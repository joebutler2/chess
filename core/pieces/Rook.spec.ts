import Rook from "./Rook";
import Team from "../Team";
import Pawn from "./Pawn";
import Piece from "./Piece";
import RookMoveSetEngine from "../movement/RookMoveSetEngine";
import {createNullPieces} from "../TestUtils";

describe("Rook", () => {
  let pieces: Piece[][];
  let rook: Rook;
  let moveSetEngine: RookMoveSetEngine;
  beforeEach(() => {
    pieces = createNullPieces();
    rook = new Rook(Team.Black);
    moveSetEngine = new RookMoveSetEngine(pieces);
  });

  it("move all the way left until it encounters the end of the board", () => {
    pieces[0][7] = rook;
    expect(moveSetEngine.canMoveTo(0, 7, 0, 0)).toBe(true);
  });

  it("move all the way left until it encounters a piece", () => {
    pieces[0][7] = rook;
    pieces[0][5] = new Pawn(Team.Black);
    expect(moveSetEngine.canMoveTo(0, 7, 0, 0)).toBe(false);
    pieces[0][5] = new Pawn(Team.White);
    expect(moveSetEngine.canMoveTo(0, 7, 0, 0)).toBe(false);
    expect(moveSetEngine.canMoveTo(0, 7, 0, 5)).toBe(true);
  });

  it("move all the way right until it encounters the end of the board", () => {
    pieces[0][0] = rook;
    expect(moveSetEngine.canMoveTo(0, 0, 0, 7)).toBe(true);
  });

  it("move all the way right until it encounters a piece", () => {
    pieces[0][0] = rook;
    pieces[0][5] = new Pawn(Team.Black);
    expect(moveSetEngine.canMoveTo(0, 0, 0, 7)).toBe(false);
    pieces[0][5] = new Pawn(Team.White);
    expect(moveSetEngine.canMoveTo(0, 0, 0, 7)).toBe(false);
    expect(moveSetEngine.canMoveTo(0, 0, 0, 5)).toBe(true);
  });

  it("move all the way up until it encounters a piece", () => {
    pieces[7][0] = rook;
    pieces[5][0] = new Pawn(Team.Black);
    expect(moveSetEngine.canMoveTo(7, 0, 0, 0)).toBe(false);
    pieces[5][0] = new Pawn(Team.White);
    expect(moveSetEngine.canMoveTo(7, 0, 0, 0)).toBe(false);
    expect(moveSetEngine.canMoveTo(7, 0, 5, 0)).toBe(true);
  });

  it("move all the way up until it encounters the end of the board", () => {
    pieces[7][0] = rook;
    expect(moveSetEngine.canMoveTo(7, 0, 0, 0)).toBe(true);
  });

  it("move all the way down until it encounters the end of the board", () => {
    pieces[0][0] = rook;
    expect(moveSetEngine.canMoveTo(0, 0, 7, 0)).toBe(true);
  });

  it("move all the way down until it encounters a piece", () => {
    pieces[0][0] = rook;
    pieces[5][0] = new Pawn(Team.Black);
    expect(moveSetEngine.canMoveTo(0, 0, 7, 0)).toBe(false);
    pieces[5][0] = new Pawn(Team.White);
    expect(moveSetEngine.canMoveTo(0, 0, 7, 0)).toBe(false);
    expect(moveSetEngine.canMoveTo(0, 0, 5, 0)).toBe(true);
  });

});
