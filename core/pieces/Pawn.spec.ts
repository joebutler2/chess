import Pawn from "./Pawn";
import Bishop from "./Bishop";
import NullPiece from "./NullPiece";
import Team from "../Team";

describe("Pawn", () => {
  describe("canMoveTo", () => {
    describe("Black team", () => {
      let pawn: Pawn;
      beforeEach(() => {
        pawn = new Pawn(Team.Black);
      });

      it("moves down one space if it is empty", () => {
        expect(pawn.canMoveTo(1, 1, 2, 1, new NullPiece())).toBe(true);
      });

      it("moves down two spaces if it is empty and this is the first move", () => {
        expect(pawn.canMoveTo(1, 1, 3, 1, new NullPiece())).toBe(true);
      });

      it("moves down one space diagonally if there is an enemy in that spot.", () => {
        expect(pawn.canMoveTo(3, 1, 4, 2, new Bishop())).toBe(true);
      });

      it("does not move up by 2 spaces if it's not in the starting position", () => {
        expect(pawn.canMoveTo(1, 1, 2, 1, new NullPiece())).toBe(true);
        expect(pawn.canMoveTo(2, 1, 4, 1, new NullPiece())).toBe(false);
      });
    });

    describe("White team", () => {
      let pawn: Pawn;
      beforeEach(() => {
        pawn = new Pawn(Team.White);
      });

      it("moves up one space if it is empty", () => {
        expect(pawn.canMoveTo(6, 1, 5, 1, new NullPiece())).toBe(true);
      });

      it("moves up two spaces if it is empty and this is the first move", () => {
        expect(pawn.canMoveTo(6, 1, 4, 1, new NullPiece())).toBe(true);
      });

      it("moves up one space diagonally if there is an enemy in that spot.", () => {
        expect(pawn.canMoveTo(4, 1, 3, 2, new Bishop())).toBe(true);
      });

      it("does not move up by 2 spaces if it's not in the starting position", () => {
        expect(pawn.canMoveTo(6, 1, 5, 1, new NullPiece())).toBe(true);
        expect(pawn.canMoveTo(5, 1, 3, 1, new NullPiece())).toBe(false);
      });

    });
  });
});

