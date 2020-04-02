import {Board} from "./Board";
import Bishop from "./pieces/Bishop";
import King from "./pieces/King";
import Knight from "./pieces/Knight";
import Pawn from "./pieces/Pawn";
import Queen from "./pieces/Queen";
import Rook from "./pieces/Rook";
import Team from "./Team";

describe("Board", () => {
  describe(".at(position)", () => {
    let board: Board;
    beforeAll(() => {
      board = new Board();
    });

    it("returns the piece at the specified position", () => {
      expect(board.at("a8")).toBeInstanceOf(Rook);
      expect(board.at("a7")).toBeInstanceOf(Pawn);
    });

    it("throws an error if column is invalid", () => {
      expect(() => {
        board.at("z1");
      }).toThrowError("Invalid column. Please pick from a, b, c, d, e, f, or h.");
    });

    it("throws an error if row is invalid", () => {
      expect(() => {
        board.at("a10");
      }).toThrowError("Invalid row. Please pick a number from 1 to 8.");
    });
  });

  describe("when initialized", () => {
    it("has all of the pieces in position for a new game", () => {
      const board: Board = new Board();
      expect(board.at("a7")).toBeInstanceOf(Pawn);
      expect(board.at("a7").team).toBe(Team.Black);
      expect(board.at("b7")).toBeInstanceOf(Pawn);
      expect(board.at("b7").team).toBe(Team.Black);
      expect(board.at("c7")).toBeInstanceOf(Pawn);
      expect(board.at("c7").team).toBe(Team.Black);
      expect(board.at("d7")).toBeInstanceOf(Pawn);
      expect(board.at("d7").team).toBe(Team.Black);
      expect(board.at("e7")).toBeInstanceOf(Pawn);
      expect(board.at("e7").team).toBe(Team.Black);
      expect(board.at("f7")).toBeInstanceOf(Pawn);
      expect(board.at("f7").team).toBe(Team.Black);
      expect(board.at("g7")).toBeInstanceOf(Pawn);
      expect(board.at("g7").team).toBe(Team.Black);
      expect(board.at("h7")).toBeInstanceOf(Pawn);
      expect(board.at("h7").team).toBe(Team.Black);

      expect(board.at("a8")).toBeInstanceOf(Rook);
      expect(board.at("a8").team).toBe(Team.Black);
      expect(board.at("b8")).toBeInstanceOf(Knight);
      expect(board.at("b8").team).toBe(Team.Black);
      expect(board.at("c8")).toBeInstanceOf(Bishop);
      expect(board.at("c8").team).toBe(Team.Black);
      expect(board.at("d8")).toBeInstanceOf(Queen);
      expect(board.at("d8").team).toBe(Team.Black);
      expect(board.at("e8")).toBeInstanceOf(King);
      expect(board.at("e8").team).toBe(Team.Black);
      expect(board.at("f8")).toBeInstanceOf(Bishop);
      expect(board.at("f8").team).toBe(Team.Black);
      expect(board.at("g8")).toBeInstanceOf(Knight);
      expect(board.at("g8").team).toBe(Team.Black);
      expect(board.at("h8")).toBeInstanceOf(Rook);
      expect(board.at("h8").team).toBe(Team.Black);

      expect(board.at("a2")).toBeInstanceOf(Pawn);
      expect(board.at("a2").team).toBe(Team.White);
      expect(board.at("b2")).toBeInstanceOf(Pawn);
      expect(board.at("b2").team).toBe(Team.White);
      expect(board.at("c2")).toBeInstanceOf(Pawn);
      expect(board.at("c2").team).toBe(Team.White);
      expect(board.at("d2")).toBeInstanceOf(Pawn);
      expect(board.at("d2").team).toBe(Team.White);
      expect(board.at("e2")).toBeInstanceOf(Pawn);
      expect(board.at("e2").team).toBe(Team.White);
      expect(board.at("f2")).toBeInstanceOf(Pawn);
      expect(board.at("f2").team).toBe(Team.White);
      expect(board.at("g2")).toBeInstanceOf(Pawn);
      expect(board.at("g2").team).toBe(Team.White);
      expect(board.at("h2")).toBeInstanceOf(Pawn);
      expect(board.at("h2").team).toBe(Team.White);

      expect(board.at("a1")).toBeInstanceOf(Rook);
      expect(board.at("a1").team).toBe(Team.White);
      expect(board.at("b1")).toBeInstanceOf(Knight);
      expect(board.at("b1").team).toBe(Team.White);
      expect(board.at("c1")).toBeInstanceOf(Bishop);
      expect(board.at("c1").team).toBe(Team.White);
      expect(board.at("d1")).toBeInstanceOf(Queen);
      expect(board.at("d1").team).toBe(Team.White);
      expect(board.at("e1")).toBeInstanceOf(King);
      expect(board.at("e1").team).toBe(Team.White);
      expect(board.at("f1")).toBeInstanceOf(Bishop);
      expect(board.at("f1").team).toBe(Team.White);
      expect(board.at("g1")).toBeInstanceOf(Knight);
      expect(board.at("g1").team).toBe(Team.White);
      expect(board.at("h1")).toBeInstanceOf(Rook);
      expect(board.at("h1").team).toBe(Team.White);
    });
  });
});
