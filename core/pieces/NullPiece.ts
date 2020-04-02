import Piece from "./Piece";

export default class NullPiece extends Piece {
  get icon(): string {
    return " ";
  }
}
