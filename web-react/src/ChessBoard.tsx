import React from 'react';
import { Board, Piece, Game } from "core";

type Props = {
}
export default class ChessBoard extends React.Component<Props, {}> {
  private board: Board;
  private game: Game;
  private selectedPiece: Piece | null = null;
  private selectedPosition: string | null = null;
  private selectedTableCell: HTMLTableDataCellElement | null = null;
  private message: string = "";
  private currentPlayersTurn = 1;

  constructor(props: Props) {
    super(props);
    this.board = new Board();
    this.game = new Game(this.board);
    console.log(this.board.pieces);
  }

  render() {
    const backgroundClasses = ["black-bg", "white-bg"];
    let backgroundOffset = 0;
    const columnValues = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return (<>
      <div>{this.message}</div>
      <table className="chessboard"><tbody>
      {this.board.pieces.map((piecesRow: (Piece|null)[], rowIndex: number) => {
        // Alternate our offset between 1 and 0.
        backgroundOffset ^= 1;
        return (<tr>{
          piecesRow.map((piece: Piece | null, columnIndex: number) => {
            const position = `${columnValues[columnIndex]}${8 - rowIndex}`
            return <td className={[
                backgroundClasses[(columnIndex + backgroundOffset) % 2],
                `position-${position}`
              ].join(" ")}
              onClick={event => this.selectPiece(event, piece, position)}>
                {piece?.icon ? piece.icon : 'foo'}
              </td>
          })
        }</tr>);
      })}
    </tbody></table></>);
  }

  private selectPiece(event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
                      piece: Piece | null,
                      position: string
                    ) {
    if (!this.selectedPiece) {
      this.selectedPiece = piece;
      this.selectedPosition = position;
      this.selectedTableCell = event.currentTarget;
      event.currentTarget.className += " selected";
    } else {
      this.selectedTableCell!.className = this.selectedTableCell!.className.replace("selected", "");
      this.moveForPlayer(this.selectedPosition!, position);
      this.selectedPiece = null;
      this.selectedPosition = null;
      this.selectedTableCell = null;
    }
    this.forceUpdate();
  }

  private moveForPlayer(targetPosition: string, destinationPosition: string) {
    try {
      if (this.currentPlayersTurn === 1) {
        this.game.player1Move(targetPosition!, destinationPosition);
        this.currentPlayersTurn = 2;
      } else {
        this.game.player2Move(targetPosition!, destinationPosition);
        this.currentPlayersTurn = 1;
      }
    } catch(error) {
      this.message = error.message;
    }
  }
}

