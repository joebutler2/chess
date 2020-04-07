import Piece from "../pieces/Piece";
import Team from "../Team";
import NullPiece from "../pieces/NullPiece";

export default class DirectionalMovement {
  private team: Team;
  private iterable?: Iterable<MovementIteratorResult>;
  private destination: number;

  // This constructor is weak, the cyclomatic complexity is fairly high,
  // there are a large number of statements, and there are too many arguments.
  constructor(private pieces: Piece[][],
    row: number, column: number, destRow: number, destColumn: number) {
      this.team = this.pieces[row][column].team;
      if (column === destColumn) {
        this.destination = destRow;
        this.iterable = row > destRow
          ? new MoveUpIterable(row, column, destRow)
          : new MoveDownIterable(row, column, destRow);
      } else if (row === destRow) {
        this.destination = destColumn;
        this.iterable = column > destColumn
          ? new MoveLeftIterable(row, column, destColumn)
          : new MoveRightIterable(row, column, destColumn);
      } else {
        this.destination = -1;
        this.iterable = undefined;
      }
  }

  public execute(): boolean {
    if (!this.iterable) {
      return false;
    }
    for (const {index, row: curRow, column: curColumn} of this.iterable) {
      if (index === this.destination && this.team !== this.pieces[curRow][curColumn].team) {
        return true;
      }
      if (!(this.pieces[curRow][curColumn] instanceof NullPiece)) {
        return false;
      }
    }
    return false;
  }
}

interface MovementIteratorResult {
  index: number;
  row: number;
  column: number;
}

class MoveLeftIterable implements Iterable<MovementIteratorResult> {
  constructor(private row: number,
              private index: number,
              private destColumn: number) {}

  public [Symbol.iterator]() {
    const {row, destColumn} = this;
    let {index} = this;
    return {
      next(): IteratorResult<MovementIteratorResult> {
        index--;
        return {
          done: index < destColumn,
          value: {index, row, column: index},
        };
      }
    }
  }
}

class MoveRightIterable implements Iterable<MovementIteratorResult> {
  constructor(private row: number,
              private index: number,
              private destColumn: number) {}

  public [Symbol.iterator]() {
    const {row, destColumn} = this;
    let {index} = this;
    return {
      next(): IteratorResult<MovementIteratorResult> {
        index++;
        return {
          done: index > destColumn,
          value: {index, row, column: index},
        };
      }
    }
  }
}

class MoveUpIterable implements Iterable<MovementIteratorResult> {
  constructor(private index: number,
              private column: number,
              private destRow: number) {}

  public [Symbol.iterator]() {
    const {column, destRow} = this;
    let {index} = this;
    return {
      next(): IteratorResult<MovementIteratorResult> {
        index--;
        return {
          done: index < destRow,
          value: {index: index, row: index, column: column},
        };
      }
    }
  }
}

class MoveDownIterable implements Iterable<MovementIteratorResult> {
  constructor(private index: number,
              private column: number,
              private destRow: number) {}

  public [Symbol.iterator]() {
    const {column, destRow} = this;
    let {index} = this;
    return {
      next(): IteratorResult<MovementIteratorResult> {
        index++;
        return {
          done: index > destRow,
          value: {index: index, row: index, column: column},
        };
      }
    }
  }
}
