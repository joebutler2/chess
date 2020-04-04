import Piece from "./Piece";

export default class NullPiece extends Piece {
  get icon(): string {
    return " ";
  }

  canMoveTo(): boolean {
    throw new Error("You should not be able to move this piece.");
  }
}
