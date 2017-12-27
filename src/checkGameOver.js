const checkGameOver = function(){
  if(snake.isAtTopEnd()){
    alert("Game over");
  }else if(snake.isAtBottomEnd()){
    alert("Game over");
  }else if(snake.isAtLeftEnd()){
    alert("Game over");
  }else if(snake.isAtRightEnd()){
    alert("Game over");
  }
}
