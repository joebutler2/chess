import NullPiece from "../pieces/NullPiece";
import Team from "../Team";
import Piece from "../pieces/Piece";

export default class DiagonalMovement {
  private team: Team;
  private iterable?: Iterable<DiagonalMovementIteratorResult>;

  // This constructor is weak, the cyclomatic complexity is fairly high,
  // there are a large number of statements, and there are too many arguments.
  constructor(private pieces: Piece[][],
    row: number, column: number, destRow: number, destColumn: number) {
    this.team = pieces[row][column].team;
    if (row < destRow && column < destColumn) {
      this.iterable = new MoveBottomRightIterable(row, column, destRow, destColumn);
    } else if (row > destRow && column < destColumn) {
      this.iterable = new MoveTopRightIterable(row, column, destRow, destColumn);
    } else if (row > destRow && column > destColumn) {
      this.iterable = new MoveTopLeftIterable(row, column, destRow, destColumn);
    } else if (row < destRow && column > destColumn) {
      this.iterable = new MoveBottomLeftIterable(row, column, destRow, destColumn);
    }
  }

  public execute(): boolean {
    if (!this.iterable) {
      return false;
    }
    for (const {row, column, lastIteration} of this.iterable) {
      if (lastIteration && this.team !== this.pieces[row][column].team) {
        return true;
      }
      if (!(this.pieces[row][column] instanceof NullPiece)) {
        return false;
      }
    }
    return false;
  }

}

interface DiagonalMovementIteratorResult {
  row: number;
  column: number;
  lastIteration: boolean;
}

class MoveBottomRightIterable implements Iterable<DiagonalMovementIteratorResult> {
  constructor(private row: number,
              private column: number,
              private destRow: number,
              private destColumn: number) {}

  public [Symbol.iterator]() {
    const {destRow, destColumn} = this;
    let {row, column} = this;
    return {
      next(): IteratorResult<DiagonalMovementIteratorResult> {
        row++;
        column++;
        const lastIteration = column === destColumn && row === destRow;
        return {
          done: column > destColumn && row > destRow,
          value: {row, column, lastIteration},
        };
      }
    }
  }
}

class MoveBottomLeftIterable implements Iterable<DiagonalMovementIteratorResult> {
  constructor(private row: number,
              private column: number,
              private destRow: number,
              private destColumn: number) {}

  public [Symbol.iterator]() {
    const {destRow, destColumn} = this;
    let {row, column} = this;
    return {
      next(): IteratorResult<DiagonalMovementIteratorResult> {
        row++;
        column--;
        const lastIteration = column === destColumn && row === destRow;
        return {
          done: column < destColumn && row > destRow,
          value: {row, column, lastIteration},
        };
      }
    }
  }
}

class MoveTopRightIterable implements Iterable<DiagonalMovementIteratorResult> {
  constructor(private row: number,
              private column: number,
              private destRow: number,
              private destColumn: number) {}

  public [Symbol.iterator]() {
    const {destRow, destColumn} = this;
    let {row, column} = this;
    return {
      next(): IteratorResult<DiagonalMovementIteratorResult> {
        row--;
        column++;
        const lastIteration = column === destColumn && row === destRow;
        return {
          done: column > destColumn && row < destRow,
          value: {row, column, lastIteration},
        };
      }
    }
  }
}

class MoveTopLeftIterable implements Iterable<DiagonalMovementIteratorResult> {
  constructor(private row: number,
              private column: number,
              private destRow: number,
              private destColumn: number) {}

  public [Symbol.iterator]() {
    const {destRow, destColumn} = this;
    let {row, column} = this;
    return {
      next(): IteratorResult<DiagonalMovementIteratorResult> {
        row--;
        column--;
        const lastIteration = column === destColumn && row === destRow;
        return {
          done: column < destColumn && row < destRow,
          value: {row, column, lastIteration},
        };
      }
    }
  }
}

