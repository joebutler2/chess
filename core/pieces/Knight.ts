import Piece from "./Piece";
import Team from "../Team";

export default class Knight extends Piece {
  get icon(): string {
    return this.team === Team.Black ? "♞" : "♘";
  }

  get moveSet(): string {
    return "KnightMoveSetEngine";
  }
}

