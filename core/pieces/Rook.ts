import Piece from "./Piece";
import Team from "../Team";

export default class Rook extends Piece {
  get icon(): string {
    return this.team == Team.Black ? "♜" : "♖";
  }

  get moveSet(): string {
    return "RookMoveSetEngine";
  }
}
