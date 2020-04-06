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
  // being created that has instance variables for these arguments
  // and maybe using the Iterator Pattern (Gang of Four) so we can
  // swap out the iterator class depending on which direction the
  // player is moving.
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

class MoveLeftIterable implements Iterable<MovementIteratorResult> {
  constructor(private row: number,
              private index: number,
              private destColumn: number) {}

  public [Symbol.iterator](): MoveLeftIterator {
    return new MoveLeftIterator(this.row, this.index, this.destColumn);
  }
}

interface MovementIteratorResult {
  index: number;
  row: number;
  column: number;
}

class MoveLeftIterator implements Iterator<MovementIteratorResult> {
  constructor(private row: number,
              private index: number,
              private destColumn: number) {}

  public next(): IteratorResult<MovementIteratorResult> {
    this.index--;
    return {
      done: this.index < this.destColumn,
      value: {index: this.index, row: this.row, column: this.index},
    };
  }
}

class MoveRightIterable implements Iterable<MovementIteratorResult> {
  constructor(private row: number,
              private index: number,
              private destColumn: number) {}

  public [Symbol.iterator](): MoveRightIterator {
    return new MoveRightIterator(this.row, this.index, this.destColumn);
  }
}

class MoveRightIterator implements Iterator<MovementIteratorResult> {
  constructor(private row: number,
              private index: number,
              private destColumn: number) {}

  public next(): IteratorResult<MovementIteratorResult> {
    this.index++;
    return {
      done: this.index > this.destColumn,
      value: {index: this.index, row: this.row, column: this.index},
    };
  }
}

class MoveUpIterable implements Iterable<MovementIteratorResult> {
  constructor(private index: number,
              private column: number,
              private destRow: number) {}

  public [Symbol.iterator](): MoveUpIterator {
    return new MoveUpIterator(this.index, this.column, this.destRow);
  }
}

class MoveUpIterator implements Iterator<MovementIteratorResult> {
  constructor(private index: number,
              private column: number,
              private destRow: number) {}

  public next(): IteratorResult<MovementIteratorResult> {
    this.index--;
    return {
      done: this.index < this.destRow,
      value: {index: this.index, row: this.index, column: this.column},
    };
  }
}

class MoveDownIterable implements Iterable<MovementIteratorResult> {
  constructor(private index: number,
              private column: number,
              private destRow: number) {}

  public [Symbol.iterator](): MoveDownIterator {
    return new MoveDownIterator(this.index, this.column, this.destRow);
  }
}

class MoveDownIterator implements Iterator<MovementIteratorResult> {
  constructor(private index: number,
              private column: number,
              private destRow: number) {}

  public next(): IteratorResult<MovementIteratorResult> {
    this.index++;
    return {
      done: this.index > this.destRow,
      value: {index: this.index, row: this.index, column: this.column},
    };
  }
}
