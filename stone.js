class Stone{
    constructor(x, y) {
        var options = {
            'friction': 2,
            'density' : 0.5
          
        }
        this.body = Bodies.rectangle(x, y,15,15, options);
        this.image = loadImage("polygon.png");
        this.width = 15;
        this.height = 15;
        World.add(world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imagemode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //rect(0,0,this.width,this.height);
        pop();
      }
}