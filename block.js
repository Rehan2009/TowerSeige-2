class Block{
    constructor(x, y, width, height) {
        var options = {
          //isStatic: true,
            'friction': 2

          
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 225;
        World.add(world, this.body);
      }
      reset(){
        if(keyCode === 32){
          this.Visiblity = 225;
        }
      }
      display(){
       
        if(this.body.speed < 3){
         push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, this.width, this.height);
        pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           pop();
         }
      }
    }