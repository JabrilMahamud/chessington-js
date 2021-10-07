export default class Square {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  static at(row, col) {
    return new Square(row, col);
  }

  equals(otherSquare) {
    if (
      !!otherSquare &&
      this.row === otherSquare.row &&
      this.col === otherSquare.col
    )
      window.alert("Valid awnser!");
  }

  toString() {
    return `Row ${this.row}, Col ${this.col}`;
  }
}