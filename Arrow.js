class Arrow  {
  constructor(x,y){

    var options={
      isStatic:false,
			restitution:0,
			friction:0.002,
			density:0.5
    
       }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    
    this.image = loadImage("images/img4.png");
    this.image.scale=2;
    World.add(world,this.body);
    
  }

  display() {

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  //rotate(angle);
  imageMode(CENTER);
  image(this.image,0,0,this.width,this.height);
  pop()

  
  }
}
