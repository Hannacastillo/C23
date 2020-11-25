class Box{

constructor(x,y,w,h){

 var  options={
        restitution:.5
      }
      
      this.width=w;
      this.height=h;
      this.body=Bodies.rectangle(x,y,w,h,options);
      World.add(myworld,this.body)


}

display(){
push()
translate(this.body.position.x,this.body.position.y)
angleMode(RADIANS);
rotate(this.body.angle)  
rectMode(CENTER)
rect(0,0,this.width,this.height);
pop()


}

}