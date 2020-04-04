import Piece from "./Piece";
import Team from "../Team";

export default class King extends Piece {
  get icon(): string {
    return this.team == Team.Black ? "♚" : "♔";
  }

  public canMoveTo(row: number, column: number, destRow: number, destColumn: number, targetPiece: Piece): boolean {
    return row + column + destRow + destColumn > 1 && !!targetPiece;
  }
}
