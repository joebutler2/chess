import Piece from "./pieces/Piece";
import NullPiece from "./pieces/NullPiece";

export default class RookMoveSetEngine {
  constructor(private pieces: Piece[][]) {
  }

  // This method is terrible: the cyclomatic complexity is too high,
  // there are duplicated statements, it's too long, a high number
  // of arguments too. Sadly at this time there is too much churn
  // to do anything about it. Also the remedy might be worst.
  //
  // It's looking like these arguments will be refactored into
  // their own object. Based on the body I could see another class
  // being created that has instance variables for these arguments.
  public canMoveTo(row: number, column: number, destRow: number, destColumn: number): boolean {
    const team = this.pieces[row][column].team;
    let iterable;
    let destination;
    if (column === destColumn) {
      destination = destRow;
      iterable = row > destRow
        ? new MoveUpIterable(row, column, destRow)
        : new MoveDownIterable(row, column, destRow);
    } else if (row === destRow) {
      destination = destColumn;
      iterable = column > destColumn
        ? new MoveLeftIterable(row, column, destColumn)
        : new MoveRightIterable(row, column, destColumn);
    } else {
      return false;
    }

    for (const {index, row: curRow, column: curColumn} of iterable) {
      if (index === destination && team !== this.pieces[curRow][curColumn].team) {
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
