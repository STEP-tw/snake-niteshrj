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
