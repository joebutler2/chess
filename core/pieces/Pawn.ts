import Piece from "./Piece";
import NullPiece from "./NullPiece";
import Team from "../Team";

export default class Pawn extends Piece {
  private initialMove: boolean = true;
  get icon(): string {
    return this.team === Team.Black ? "♟" : "♙";
  }

  canMoveTo(row: number, column: number, destRow: number, destColumn: number, targetPiece: Piece): boolean {
    if (this.team === Team.White && destRow - row > 0) {
      return false;
    }
    if (this.team === Team.Black && destRow - row < 0) {
      return false;
    }
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
    } else if (this.isOpposingTeam(targetPiece)) {
      return rowDelta === 1 && columnDelta === 1;

    }
    return false;
  }

  private isOpposingTeam(targetPiece: Piece): boolean {
    return targetPiece.team !== this.team &&
      targetPiece.team !== Team.Null;
  }
}
