import Player from "../player";
import Square from "../square";
import Piece from "./piece";
export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let currentSquare = board.findPiece(this);
    console.log(this.player);
    if (this.player === Player.WHITE) {
      if (this.MoveCounter < 1) {
        return [
          Square.at(currentSquare.row + 1, currentSquare.col),
          Square.at(currentSquare.row + 2, currentSquare.col),
        ];
      }
      return [Square.at(currentSquare.row + 1, currentSquare.col)];
    }
    if (this.player === Player.BLACK) {
      if (this.MoveCounter < 1) {
        return [
          Square.at(currentSquare.row -1, currentSquare.col),
          Square.at(currentSquare.row - 2, currentSquare.col),
        ];
      } else {
        return [Square.at(currentSquare.row - 1, currentSquare.col)];
      }
    }
  }
}
