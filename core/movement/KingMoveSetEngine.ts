import MoveSetEngine from "./MoveSetEngine";

export default class KingMoveSetEngine implements MoveSetEngine {
  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    const rowDelta = Math.abs(row - destRow);
    const columnDelta = Math.abs(column - destColumn);
    const validMoves = [1, 0];
    return validMoves.includes(rowDelta) &&
      validMoves.includes(columnDelta);
  }
}
