const checkGameOver = function(numberOfRows,numberOfCols){
  if(snake.isAtTopEnd()){
    alert("Game over");
  }else if(snake.isAtBottomEnd(numberOfRows)){
    alert("Game over");
  }else if(snake.isAtLeftEnd()){
    alert("Game over");
  }else if(snake.isAtRightEnd(numberOfCols)){
    alert("Game over");
  }
  // alert(JSON.stringify(snake.getBody()));
}
