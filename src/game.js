const Game = function(numberOfRows,numberOfCols){
  this.rows = numberOfRows;
  this.columns = numberOfCols;
  this.snake = {};
}

Game.prototype.createSnake = function(){
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();
  return new Snake(head,body);
}

Game.prototype.isOver = function(){
  let isVerticalWallsHit = snake.isAtTopEnd() || snake.isAtBottomEnd(this.rows);
  let isHorizontalWallsHit = snake.isAtLeftEnd() || snake.isAtRightEnd(this.columns);
  return isVerticalWallsHit || isHorizontalWallsHit;
}
