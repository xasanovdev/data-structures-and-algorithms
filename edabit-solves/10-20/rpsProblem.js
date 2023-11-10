function rps(p1, p2) {
  if (p1 === p2) return "It's a draw";

  if (p1 == 'Rock' && p2 == 'Scissors') {
    return 'The winner is p1';
  } else if (p2 == 'Rock' && p1 == 'Scissors') {
    return 'The winner is p2';
  } else if (p1 == 'Scissors' && p2 == 'Paper') {
    return 'The winner is p1';
  } else if (p2 == 'Scissors' && p1 == 'Paper') {
    return 'The winner is p2';
  } else if (p1 == 'Paper' && p2 == 'Rock') {
    return 'The winner is p1';
  } else if (p2 == 'Paper' && p1 == 'Rock') {
    return 'The winner is p2';
  }
}
