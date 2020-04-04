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
      let isMoveable = false;
      if (this.initialMove && rowDelta === 2) {
        isMoveable = true;
      }
      // I'm not a fan of tracking the initalMove here since
      // it is vulnerable to introducing a bug if we change
      // how this class is use.
      this.initialMove = false;
      return isMoveable || rowDelta === 1;
    } else if (targetPiece.team !== this.team) { // Any actual piece.
      return rowDelta === 1 && columnDelta === 1;

    }
    return false;
  }
}
