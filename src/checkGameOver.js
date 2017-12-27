
const isEatingItself = function(){
  return snake.getBody().some(function(body){
    return (body.x==snake.getHead()['x'] && body.y==snake.getHead()['y']);
  })
}

const checkGameOver = function(numberOfRows,numberOfCols){
  let x = snake.getHead()['x'];
  let y = snake.getHead()['y'];
  // alert(x);
  if(snake.isAtTopEnd() || snake.isAtBottomEnd(numberOfRows)){
    alert("Game over");
  }else if(snake.isAtLeftEnd() || snake.isAtRightEnd(numberOfCols)){
    alert("Game over");
  }else if(isEatingItself()){
    alert("Game over");
  }
}
