class paper
{

    constructor(x,y,r)
    {
          var options={
              
              restitution:0.3,
              friction:0,
              density:1.2   
            }
          
          this.r=r
          this.body=Bodies.circle(x, y,r, options);
          this.image=loadImage("paper.png");
 		  World.add(world, this.body);
         

        }
           display()
           {
                   
                   var paperPos=this.body.position;		
       
                   push()
                   translate(paperPos.x, paperPos.y);
                   rectMode(CENTER)
                   //strokeWeight(4);
                   fill(125);
                   imageMode(CENTER);
                   image(this.image,  0,0,this.r, this.r);
                   pop()
    
      }
    
}