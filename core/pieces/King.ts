import Piece from "./Piece";
import Team from "../Team";

export default class King extends Piece {
  get icon(): string {
    return this.team === Team.Black ? "♚" : "♔";
  }

  public canMoveTo(row: number, column: number, destRow: number, destColumn: number, targetPiece: Piece): boolean {
    targetPiece;
    const rowDelta = Math.abs(row - destRow);
    const columnDelta = Math.abs(column - destColumn);
    const validMoves = [1, 0];
    return validMoves.includes(rowDelta) &&
      validMoves.includes(columnDelta);
  }
}
