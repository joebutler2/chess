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
    if (column === destColumn) {
      const iterable = row > destRow
        ? new MoveUpIterable(row, destRow)
        : new MoveDownIterable(row, destRow);
      for (const i of iterable) {
        if (i === destRow && team !== this.pieces[i][column].team) {
          return true;
        }
        if (!(this.pieces[i][column] instanceof NullPiece)) {
          return false;
        }
      }
    } else if (row === destRow) {
      if (column > destColumn) { // Moving Left.
        for (let i = column - 1; i >= destColumn; i--) {
          if (i === destColumn && team !== this.pieces[row][i].team) {
            return true;
          }
          if (!(this.pieces[row][i] instanceof NullPiece)) {
            return false;
          }
       }
      } else { // Moving Right.
        for (let i = column + 1; i <= destColumn; i++) {
          if (i === destColumn && team !== this.pieces[row][i].team) {
            return true;
          }
          if (!(this.pieces[row][i] instanceof NullPiece)) {
            return false;
          }
        }
      }
    }
    return false;
  }
}

class MoveUpIterable implements Iterable<number> {
  constructor(private index: number, private destRow: number) {}

  public [Symbol.iterator](): MoveUpIterator {
    return new MoveUpIterator(this.index, this.destRow);
  }
}

class MoveUpIterator implements Iterator<number> {
  constructor(private index: number, private destRow: number) {}

  public next(): IteratorResult<number> {
    this.index--;
    return {
      done: this.index < this.destRow,
      value: this.index,
    };
  }
}

class MoveDownIterable implements Iterable<number> {
  constructor(private index: number, private destRow: number) {}

  public [Symbol.iterator](): MoveDownIterator {
    return new MoveDownIterator(this.index, this.destRow);
  }
}

class MoveDownIterator implements Iterator<number> {
  constructor(private index: number, private destRow: number) {}

  public next(): IteratorResult<number> {
    this.index++;
    return {
      done: this.index > this.destRow,
      value: this.index,
    };
  }
}

