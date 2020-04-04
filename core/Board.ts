import Bishop from "./pieces/Bishop";
import King from "./pieces/King";
import Knight from "./pieces/Knight";
import Pawn from "./pieces/Pawn";
import Piece from "./pieces/Piece";
import NullPiece from "./pieces/NullPiece";
import Queen from "./pieces/Queen";
import Rook from "./pieces/Rook";
import Team from "./Team";

export class Board {
  public pieces: (Piece)[][];
  constructor() {
    // Workaround for enums in Typescript, not sure why it can't refer to the value directly.
    const black: Team = Team.Black;
    const white: Team = Team.White;
    this.pieces = [
      [new Rook(black), new Knight(black), new Bishop(black), new Queen(black), new King(black), new Bishop(black),
        new Knight(black), new Rook(black)],
      [new Pawn(black), new Pawn(black), new Pawn(black), new Pawn(black), new Pawn(black), new Pawn(black),
        new Pawn(black), new Pawn(black)],

        [new NullPiece(), new NullPiece(),  new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece()],
        [new NullPiece(), new NullPiece(),  new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece()],
        [new NullPiece(), new NullPiece(),  new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece()],
        [new NullPiece(), new NullPiece(),  new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece(), new NullPiece()],

      [new Pawn(white), new Pawn(white), new Pawn(white), new Pawn(white), new Pawn(white), new Pawn(white),
        new Pawn(white), new Pawn(white)],
      [new Rook(white), new Knight(white), new Bishop(white), new Queen(white), new King(white), new Bishop(white),
        new Knight(white), new Rook(white)],
    ];
  }

  public at(position: string): Piece {
    const [row, column] = this.convertToIndexes(position);
    return this.pieces[row][column];
  }

  // TODO: refactor these arguments to be an object,
  // would enable us to refactor to the momento pattern.
  public move(targetPiece: string, destination: string): void {
    const [row, column] = this.convertToIndexes(targetPiece);
    const piece: Piece = this.pieces[row][column];
    const [destRow, destColumn] = this.convertToIndexes(destination);
    // On the fence about this throwing an error,
    // it is not an exceptional case. This is plain validation.
    // Leave it as is for now since it's simple.
    if (piece.canMoveTo(row, column, destRow, destColumn, this.pieces[destRow][destColumn])) {
      // Will need to add logic for handling objects.
      // Doing the simplest thing that could work at the moment
      // which most likely will have bugs or at least create
      // unnecessary objects.
      this.pieces[row][column] = new NullPiece();
      this.pieces[destRow][destColumn] = piece;
    } else {
      throw new Error(`A ${piece.constructor.name} cannot move there.`);
    }
  }

  private convertToIndexes(position: string): number[] {
    const [rawColumn, rawRow, ...overfill] = position.toLowerCase().split("");
    const row = 8 - parseInt(rawRow, 10);
    if (row < 0 || row > 8 || overfill.length > 0 ) {
      // Not completely accurate but a good enough assumption.
      throw new Error("Invalid row. Please pick a number from 1 to 8.");
    }
    if (!["a", "b", "c", "d", "e", "f", "g", "h"].includes(rawColumn)) {
      throw new Error("Invalid column. Please pick from a, b, c, d, e, f, or h.");
    }
    const column = rawColumn.charCodeAt(0) - 97;
    return [row, column];
  }
}
