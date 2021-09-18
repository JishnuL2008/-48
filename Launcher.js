class Launcher{
    constructor(body, anchor){
      var options={
        bodyA:body,
        pointB:anchor,
        stiffness:0.04,
        length:0
        
    }
        this.bodyA=body;
        this.pointB=anchor;
        this.launcher=Constraint.create(options);
        this.launcher1=loadImage("images/sling3.png")
        World.add(world,this.launcher);
        }
        attach(body)
        {
        this.launcher.bodyA=body;
    
        }
        fly()
        {
         this.launcher.bodyA=null;
        }


            display(){
                if(this.launcher.bodyA){
                    var pointA=this.launcher.bodyA.position;  
                    var pointB=this.pointB;
                    push();
                    strokeWeight(1);
                    if(pointA.x<200){
                    line(pointA.x-25,pointA.y,pointB.x+15,pointB.y+80);
                    line(pointA.x-25,pointA.y,pointB.x+15,pointB.y+170);
                    image(this.launcher1,pointA.x-25,pointA.y-10,5,15);
                    }
                    else{
                    line(pointA.x-25,pointA.y,pointB.x+15,pointB.y+80);
                    line(pointA.x-25,pointA.y,pointB.x+15,pointB.y+170);
                    image(this.launcher1,pointA.x-25,pointA.y,10,5,15);
                    }
                    pop();
                
        }
    }
}
    
