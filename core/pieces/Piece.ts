import Team from "../Team";

export default abstract class Piece {
  abstract get icon(): string;
  constructor(public team: Team = Team.Null) {}
  public abstract canMoveTo(row: number, column: number,
    destRow: number, destColumn: number, targetPiece: Piece): boolean;
}
