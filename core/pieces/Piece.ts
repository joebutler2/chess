import Team from "../Team";

export default abstract class Piece {
  abstract get icon(): string;
  constructor(public team?: Team) {}
}
