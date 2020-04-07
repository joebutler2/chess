import Pawn from "./Pawn";
import Bishop from "./Bishop";
import Piece from "./Piece";
import Team from "../Team";
import PawnMoveSetEngine from "../movement/PawnMoveSetEngine";
import {createNullPieces} from "../TestUtils";

describe("Pawn", () => {
  describe("canMoveTo", () => {
    describe("Black team", () => {
      let pawn: Pawn;
      let moveSetEngine: PawnMoveSetEngine;
      let pieces: Piece[][];
      beforeEach(() => {
        pawn = new Pawn(Team.Black);
        pieces = createNullPieces();
      });

      it("moves down one space if it is empty", () => {
        pieces[1][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(1, 1, 2, 1)).toBe(true);
      });

      it("cannot move up", () => {
        pieces[2][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(2, 1, 1, 1)).toBe(false);
      });

      it("moves down two spaces if it is empty and this is the first move", () => {
        pieces[1][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(1, 1, 3, 1)).toBe(true);
      });
      // It cannot move up.

      it("moves down one space diagonally if there is an enemy in that spot.", () => {
        pieces[3][1] = pawn;
        pieces[4][2] = new Bishop(Team.White);
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(3, 1, 4, 2)).toBe(true);
      });

      it("does not move down one space diagonally if there is no enemy in that spot.", () => {
        pieces[3][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(3, 1, 4, 2)).toBe(false);
      });

      it("does not move up by 2 spaces if it's not in the starting position", () => {
        pieces[3][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(1, 1, 2, 1)).toBe(true);
        expect(moveSetEngine.canMoveTo(2, 1, 4, 1)).toBe(false);
      });

    });

    describe("White team", () => {
      let moveSetEngine: PawnMoveSetEngine;
      let pawn: Pawn;
      let pieces: Piece[][];
      beforeEach(() => {
        pawn = new Pawn(Team.White);
        pieces = createNullPieces();
      });

      it("moves up one space if it is empty", () => {
        pieces[6][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(6, 1, 5, 1)).toBe(true);
      });

      it("cannot move down", () => {
        pieces[5][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(5, 1, 6, 1)).toBe(false);
      });

      it("moves up two spaces if it is empty and this is the first move", () => {
        pieces[6][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(6, 1, 4, 1)).toBe(true);
      });

      it("moves up one space diagonally if there is an enemy in that spot.", () => {
        pieces[4][1] = pawn;
        pieces[3][2] = new Bishop(Team.Black);
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(4, 1, 3, 2)).toBe(true);
      });

      it("does not move up one space diagonally if there is no enemy in that spot.", () => {
        pieces[5][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(5, 1, 4, 2)).toBe(false);
      });

      it("does not move up by 2 spaces if it's not in the starting position", () => {
        pieces[6][1] = pawn;
        moveSetEngine = new PawnMoveSetEngine(pieces);
        expect(moveSetEngine.canMoveTo(6, 1, 5, 1)).toBe(true);
        expect(moveSetEngine.canMoveTo(5, 1, 3, 1)).toBe(false);
      });

    });
  });
});

