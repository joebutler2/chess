import Piece from "./Piece";
import Team from "../Team";

export default class Queen extends Piece {
  get icon(): string {
    return this.team == Team.Black ? "♛" : "♕";
  }
}
