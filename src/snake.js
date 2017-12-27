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
  getXCord:function() {
    return this.getHead()['x'];
  },
  getYCord:function() {
    return this.getHead()['y'];
  },
  isAtTopEnd:function() {
    return this.getYCord()==-1;
  },
  isAtBottomEnd:function(numberOfRows) {
    // alert(numberOfRows);
    return this.getYCord()==numberOfRows;
  },
  isAtLeftEnd:function() {
    return this.getXCord()==-1;
  },
  isAtRightEnd:function(numberOfCols) {
    return this.getXCord()==numberOfCols;
  }

}
