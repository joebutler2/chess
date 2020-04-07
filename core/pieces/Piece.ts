import Team from "../Team";

export default abstract class Piece {
  abstract get icon(): string;
  abstract get moveSet(): string;
  constructor(public team: Team = Team.Null) {}
}
