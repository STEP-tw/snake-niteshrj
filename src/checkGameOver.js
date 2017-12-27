const checkGameOver = function(numberOfRows,numberOfCols){
  if(snake.isAtTopEnd() || snake.isAtBottomEnd(numberOfRows)){
    alert("Game over");
  }else if(snake.isAtLeftEnd() || snake.isAtRightEnd(numberOfCols)){
    alert("Game over");
  }
}
