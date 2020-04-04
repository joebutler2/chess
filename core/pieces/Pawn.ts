import Piece from "./Piece";
import NullPiece from "./NullPiece";
import Team from "../Team";

export default class Pawn extends Piece {
  private initialMove: boolean = true;
  get icon(): string {
    return this.team === Team.Black ? "♟" : "♙";
  }

  canMoveTo(row: number, column: number, destRow: number, destColumn: number, targetPiece: Piece): boolean {
    const rowDelta = Math.abs(destRow - row);
    const columnDelta = Math.abs(destColumn - column);
    if (targetPiece instanceof NullPiece && column === destColumn) {
      if (this.initialMove && rowDelta === 2) {
        this.initialMove = false;
        return true;
      }
      return rowDelta === 1;
    } else if (targetPiece.team !== this.team) { // Any actual piece.
      return rowDelta === 1 && columnDelta === 1;

    }
    return false;
  }
}
