import {Game} from "./Game";
import {Board} from "./Board";
import Pawn from "./pieces/Pawn";
import Team from "./Team";
import GUI from "./GUI";

describe("Playing a Game of Chess", () => {
  let board: Board;
  let gui: GUI;
  beforeEach(() => {
    board = new Board();
    /* tslint:disable-next-line: no-empty */
    gui = {
      player1Wins: jest.fn(),
      player2Wins: jest.fn(),
    };
  });

  it("should allow the white side to go first", () => {
    const game = new Game(board, gui);
    game.player1Move("a2", "a3");
    game.player2Move("a7", "a6");
    game.player1Move("a3", "a4");
    game.player2Move("a6", "a5");
  });

  describe("guards against invalid moves", () => {
    it("should raise an error if a player moves when it's not their turn", () => {
      const game = new Game(board, gui);
      expect(() => game.player2Move("a7", "a6")).
        toThrow("It is not Player 2's turn.");
      game.player1Move("a2", "a3");
      expect(() => game.player1Move("a3", "a4")).
        toThrow("It is not Player 1's turn.");
      game.player2Move("a7", "a6");
    });

    it("should raise an error if a player moves the wrong piece", () => {

    const game = new Game(board, gui);
    expect(() => game.player1Move("a7", "a6")).
      toThrow("Player 1 can only move white pieces.");
    game.player1Move("a2", "a3");
    expect(() => game.player2Move("a3", "a4")).
      toThrow("Player 2 can only move black pieces.");
    });

    it("should raise an error if the player tries to move nothing, i.e. a NullPiece", () => {
      const game = new Game(board, gui);
      expect(() => game.player1Move("a3", "a4")).
        toThrow("Player 1: there is no piece there.");
      game.player1Move("a2", "a3");
      expect(() => game.player2Move("a6", "a5")).
        toThrow("Player 2: there is no piece there.");
    });

    it("should throw an error if the destination spot is not valid", () => {
      const game = new Game(board, gui);
      // The pawn is trying to move up 3 spaces.
      expect(() => game.player1Move("a2", "a5")).
        toThrow("A Pawn cannot move there.");
    });

    it("should throw an error if the destination is the player's own piece", ()  => {
      const game = new Game(board, gui);
      game.player1Move("a2", "a3");
      game.player2Move("a7", "a6");
      expect(() => game.player1Move("b1", "a3")).
        toThrow("You cannot move onto your own piece.");
    });
  });

  it("should move the piece to the destination spot", () => {
    const game = new Game(board, gui);
    game.player1Move("a2", "a3");
    expect(board.at("a3")).toBeInstanceOf(Pawn);
    expect(board.at("a3").team).toBe(Team.White);
    game.player2Move("a7", "a6");
    expect(board.at("a6")).toBeInstanceOf(Pawn);
    expect(board.at("a6").team).toBe(Team.Black);
  });

  it("should announce player 1 as the winner when the opposing King has been captured", () => {
    const game = new Game(board, gui);
    game.player1Move("e2", "e4");
    game.player2Move("e7", "e5");
    game.player1Move("e1", "e2");
    game.player2Move("e8", "e7");
    game.player1Move("e2", "e3");
    game.player2Move("e7", "e6");
    game.player1Move("e3", "f4");
    game.player2Move("e6", "f5");
    expect(gui.player1Wins).not.toHaveBeenCalled();
    game.player1Move("f4", "f5");
    expect(gui.player1Wins).toHaveBeenCalled();
  });

  it("should announce player 2 as the winner when the opposing King has been captured", () => {
    const game = new Game(board, gui);
    game.player1Move("e2", "e4");
    game.player2Move("e7", "e5");
    game.player1Move("e1", "e2");
    game.player2Move("e8", "e7");
    game.player1Move("e2", "e3");
    game.player2Move("e7", "e6");
    game.player1Move("e3", "f4");
    game.player2Move("e6", "f5");
    game.player1Move("c2", "c4");
    expect(gui.player2Wins).not.toHaveBeenCalled();
    game.player2Move("f5", "f4");
    expect(gui.player2Wins).toHaveBeenCalled();
  });
});

