var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

function House(x,y,floors){
    this.x=x;
    this.y=y;
    this.floors=floors;
    this.houseWidth=300;
    this.houseHeight=500;
    this.floorHeight=this.houseHeight/this.floors;
    this.windowWidth=this.houseWidth/10;
    this.windowHeight=(this.houseHeight/this.floors)/3;
}
House.prototype.draw=function(){
    ctx.fillRect(this.x, this.y, this.houseWidth,this.houseHeight);
    for(var floor=1;floor<=this.floors;floor++){
        ctx.clearRect(this.x+this.x/5,this.y+((this.windowHeight*floor)/3),this.windowWidth,this.windowHeight)
    }
}
var h=new House(100, 100, 4);
h.draw();