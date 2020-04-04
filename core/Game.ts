import Team from "./Team";
import {Board} from "./Board";

export class Game {
  // 1 represent Player 1's turn, and 2 for Player 2.
  // Funny that we don't even need a Player class yet.
  private turn: number = 1;
  private board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  public player1Move(targetPiece: string, destination: string): void {
    if (this.turn === 2) {
      throw new Error("It is not Player 1's turn.");
    }
    const targetTeam = this.board.at(targetPiece).team;
    if (targetTeam !== Team.White) {
      const message = targetTeam === Team.Black
        ? "Player 1 can only move white pieces."
        : "Player 1: there is no piece there.";
      throw new Error(message);
    }
    this.board.move(targetPiece, destination);
    this.turn = 2;
  }

  public player2Move(targetPiece: string, destination: string): void {
    if (this.turn === 1) {
      throw new Error("It is not Player 2's turn.");
    }
    const targetTeam = this.board.at(targetPiece).team;
    if (targetTeam !== Team.Black) {
      const message = targetTeam === Team.White
        ? "Player 2 can only move black pieces."
        : "Player 2: there is no piece there.";
      throw new Error(message);
    }
    this.board.move(targetPiece, destination);
    this.turn = 1;
  }
}

