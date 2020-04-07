import Piece from "../pieces/Piece";
import NullPiece from "../pieces/NullPiece";
import Pawn from "../pieces/Pawn";
import Team from "../Team";
import MoveSetEngine from "./MoveSetEngine";

export default class PawnMoveSetEngine implements MoveSetEngine {
  constructor(private pieces: Piece[][]) {}

  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    const piece: Pawn = this.pieces[row][column] as Pawn;
    const targetPiece: Piece = this.pieces[destRow][destColumn];
    if (piece.team === Team.White && destRow - row > 0) {
      return false;
    }
    if (piece.team === Team.Black && destRow - row < 0) {
      return false;
    }
    const rowDelta = Math.abs(destRow - row);
    const columnDelta = Math.abs(destColumn - column);
    if (targetPiece instanceof NullPiece && column === destColumn) {
      let isMoveable = false;
      if (piece.initialMove && rowDelta === 2) {
        isMoveable = true;
      }
      // I'm not a fan of tracking the initalMove here since
      // it is vulnerable to introducing a bug if we change
      // how this class is use.
      piece.initialMove = false;
      return isMoveable || rowDelta === 1;
    } else if (this.isOpposingTeam(piece.team, targetPiece)) {
      return rowDelta === 1 && columnDelta === 1;

    }
    return false;
  }

  private isOpposingTeam(team: Team, targetPiece: Piece): boolean {
    return targetPiece.team !== team &&
      targetPiece.team !== Team.Null;
  }
}
