const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  getHeadXCord:function() {
    return this.getHead()['x'];
  },
  getHeadYCord:function() {
    return this.getHead()['y'];
  },
  isAtTopEnd:function() {
    return this.getHeadYCord()==-1;
  },
  isAtBottomEnd:function(numberOfRows) {
    return this.getHeadYCord()==numberOfRows;
  },
  isAtLeftEnd:function() {
    return this.getHeadXCord()==-1;
  },
  isAtRightEnd:function(numberOfCols) {
    return this.getHeadXCord()==numberOfCols;
  },
  isEatingItself:function() {
    return this.getBody().some(function(body){
      return (body.x==this.getHead()['x'] && body.y==this.getHead()['y']);
    })
  }

}
