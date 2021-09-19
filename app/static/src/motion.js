var viewBoxMove = function(dx, dy, ev, x, y) {
    var tdx, tdy;
    var snapInvMatrix = this.transform().diffMatrix.invert();
    snapInvMatrix.e = snapInvMatrix.f = 0;
    tdx = snapInvMatrix.x( dx,dy ); tdy = snapInvMatrix.y( dx,dy );
    this.transform( "t" + [ tdx, tdy ] + this.data('origTransform')  );

}

var move = function(dx,dy) {
      this.attr({
        transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
      });
}
var start = function() {
        this.data('origTransform', this.transform().local);
}
var stop = function() {}

var isRDraggable = function(snapObj) {
  snapObj.drag(viewBoxMove, start, stop);
}

var isDraggable = function(snapObj) {
  snapObj.drag(move, start, stop);
}

var listenDrags = function(snapObjArray,isResponsive = true) {
  for (var i = 0; i < snapObjArray.length; i++) {
    if(isResponsive){
      isRDraggable(snapObjArray[i]);
    }else{
      isDraggable(snapObjArray[i]);
    }
  }
}
