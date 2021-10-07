import Piece from "./piece";
export default class Pawn extends Piece {
  // <- looks like inheritance
  constructor(player) {
    super(player); // search this up
  }
  // uses a method (cutout) to create a pawn instance

  getAvailableMoves(board) {
    return new Array(0); // the range of movement the pawn can do should be put here
  }
}
