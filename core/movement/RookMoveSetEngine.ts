import Piece from "../pieces/Piece";
import DirectionalMovement from "./DirectionalMovement";
import MoveSetEngine from "./MoveSetEngine";

export default class RookMoveSetEngine implements MoveSetEngine {
  constructor(private pieces: Piece[][]) {
  }

  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    return new DirectionalMovement(this.pieces, row, column, destRow, destColumn).execute();
  }
}
