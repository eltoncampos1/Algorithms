function catAndMouse(x, y, z) {
  while (true) {
    if (x < z) {
      x++;
    } else {
      x--;
    }

    if (y < z) {
      y++;
    } else {
      y--;
    }

    if (x === z && y === z) {
      return "Mouse C";
    } else if (x === z) {
      return "Cat A";
    } else if (y === z) {
      return "Cat B";
    }
  }
}
