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
    if (this.board.at(targetPiece).team !== Team.White) {
      throw new Error("Player 1 can only move white pieces.");
    }
    this.board.move(targetPiece, destination);
    this.turn = 2;
  }

  public player2Move(targetPiece: string, destination: string): void {
    if (this.turn === 1) {
      throw new Error("It is not Player 2's turn.");
    }
    if (this.board.at(targetPiece).team !== Team.Black) {
      throw new Error("Player 2 can only move black pieces.");
    }
    this.board.move(targetPiece, destination);
    this.turn = 1;
  }
}

