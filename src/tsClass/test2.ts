class Point {
  readonly x: number = 0;
  y: number = 0;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point(1, 2);

