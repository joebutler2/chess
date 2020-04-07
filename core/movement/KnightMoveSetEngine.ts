import MoveSetEngine from "./MoveSetEngine";

export default class KnightMoveSetEngine implements MoveSetEngine {
  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    const isOneLeft = column - destColumn === 1;
    const isTwoLeft = column - destColumn === 2;
    const isOneRight = column - destColumn === -1;
    const isTwoRight = column - destColumn === -2;
    const isOneDown = row - destRow === -1;
    const isTwoDown = row - destRow === -2;
    const isOneUp = row - destRow === 1;
    const isTwoUp = row - destRow === 2;

    const isTwoLeftOneDown = isOneDown && isTwoLeft;
    const isOneLeftTwoDown = isTwoDown && isOneLeft;
    const isTwoLeftOneUp = isOneUp && isTwoLeft;
    const isOneLeftTwoUp = isTwoUp && isOneLeft;
    const isTwoRightOneDown = isTwoRight && isOneDown;
    const isOneRightTwoDown = isOneRight && isTwoDown;
    const isTwoRightOneUp = isTwoRight && isOneUp;
    const isOneRightTwoUp = isOneRight && isTwoUp;

    return isTwoLeftOneDown || isOneLeftTwoDown ||
      isTwoLeftOneUp || isOneLeftTwoUp || isTwoRightOneDown ||
      isOneRightTwoDown || isTwoRightOneUp || isOneRightTwoUp;
  }
}
