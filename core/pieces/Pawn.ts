import Piece from "./Piece";
import Team from "../Team";

export default class Pawn extends Piece {
  get icon(): string {
    return this.team == Team.Black ? "♟" : "♙";
  }
}
