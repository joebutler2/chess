import Piece from "../pieces/Piece";
import MoveSetEngine from "./MoveSetEngine";
import DirectionalMovement from "../movement/DirectionalMovement";
import DiagonalMovement from "../movement/DiagonalMovement";

export default class QueenMoveSetEngine implements MoveSetEngine {
  constructor(private pieces: Piece[][]) {}

  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    if (row === destRow || column === destColumn) {
      return new DirectionalMovement(this.pieces, row, column, destRow, destColumn).execute();
    } else {
      return new DiagonalMovement(this.pieces, row, column, destRow, destColumn).execute();
    }
  }
}

