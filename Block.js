class Block{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
	
		this.image=loadImage("images/img2.png")
		this.body=Bodies.rectangle(x, y, 50, 50, options);
        this.width=100;
        this.height=50;
		World.add(world, this.body);
	}

	display()
	{
			
		push();
		//fill(255,0,255)
		imageMode(CENTER);
		//rectMode(CENTER);
		image(this.image,800,300,this.width,this.height);
		pop();
 }
}