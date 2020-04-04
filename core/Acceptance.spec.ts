import {Game} from "./Game";
import {Board} from "./Board";
import Pawn from "./pieces/Pawn";
import Team from "./Team";

describe("Playing a Game of Chess", () => {
  let board: Board;
  beforeEach(() => {
    board = new Board();
  });

  it("should allow the white side to go first", () => {
    const game = new Game(board);
    game.player1Move("a2", "a3");
    game.player2Move("a7", "a6");
    game.player1Move("a3", "a4");
    game.player2Move("a6", "a5");
  });

  describe("guards against invalid moves", () => {
    it("should raise an error if a player moves when it's not their turn", () => {
      const game = new Game(board);
      expect(() => game.player2Move("a7", "a6")).
        toThrow("It is not Player 2's turn.");
      game.player1Move("a2", "a3");
      expect(() => game.player1Move("a3", "a4")).
        toThrow("It is not Player 1's turn.");
      game.player2Move("a7", "a6");
    });

    it("should raise an error if a player moves the wrong piece", () => {

    const game = new Game(board);
    expect(() => game.player1Move("a7", "a6")).
      toThrow("Player 1 can only move white pieces.");
    game.player1Move("a2", "a3");
    expect(() => game.player2Move("a3", "a4")).
      toThrow("Player 2 can only move black pieces.");
    });

    it("should raise an error if the player tries to move nothing, i.e. a NullPiece", () => {
      const game = new Game(board);
      expect(() => game.player1Move("a3", "a4")).
        toThrow("Player 1: there is no piece there.");
      game.player1Move("a2", "a3");
      expect(() => game.player2Move("a6", "a5")).
        toThrow("Player 2: there is no piece there.");
    });
  });

  it("should move the piece to the destination spot", () => {
    const game = new Game(board);
    game.player1Move("a2", "a3");
    expect(board.at("a3")).toBeInstanceOf(Pawn);
    expect(board.at("a3").team).toBe(Team.White);
    game.player2Move("a7", "a6");
    expect(board.at("a6")).toBeInstanceOf(Pawn);
    expect(board.at("a6").team).toBe(Team.Black);
  });

  it("should throw an error if the destination spot is not valid", () => {
    const game = new Game(board);
    // The pawn is trying to move up 3 spaces.
    expect(() => game.player1Move("a2", "a5")).
      toThrow("A Pawn cannot move there.");
  });
});

