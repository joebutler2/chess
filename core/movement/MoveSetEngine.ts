export default interface MoveSetEngine {
  canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean;
}
