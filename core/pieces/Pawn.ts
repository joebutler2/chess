import Piece from "./Piece";
import Team from "../Team";

export default class Pawn extends Piece {
  // Having this be public breaks the idea of
  // "Information Hiding" but as long as manipulation of
  // it is limited to the PawnMoveSetEngine I can live
  // with it.
  public initialMove: boolean = true;

  get icon(): string {
    return this.team === Team.Black ? "♟" : "♙";
  }

  get moveSet(): string {
    return "PawnMoveSetEngine";
  }
}
