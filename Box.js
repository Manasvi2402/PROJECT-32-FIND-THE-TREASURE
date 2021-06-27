class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/Wooden box.jpg");
    this.Visibility = 255;
  }
  display(){
    if(this.body.speed < 6){
      super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
  score(){
    if(this.Visibility < 0 && this.Visibility > -1005){
      noStroke();
    textSize(30)
    fill("black")
    text("You win!! Now the treasure is yours.",500,100)
    }
  }

  
}
