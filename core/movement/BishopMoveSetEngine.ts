import Piece from "../pieces/Piece";
import DiagonalMovement from "./DiagonalMovement";
import MoveSetEngine from "./MoveSetEngine";

export default class BishopMoveSetEngine implements MoveSetEngine {
  constructor(private pieces: Piece[][]) {
  }

  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    return new DiagonalMovement(this.pieces, row, column, destRow, destColumn).execute();
  }
}

