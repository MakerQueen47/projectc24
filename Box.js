class Box {

    constructor(x,y,width,height){
            // constructor function is invoked everytime we create an object from 'this' class! 
        var options= {

            restitution:0.8,
            friction:1.0,
            density:1.0

        }

        this.body = BODIES.rectangle(x,y,width,height,options);
        WORLD.add(world, this.body);
        this.w = width;
        this.h = height;

    }

    display(){

      
        var angle = this.body.angle;
        var pos = this.body.position;

       push();
       strokeWeight(4);
       stroke("green");
       rotate(angle);
        translate(pos.x,pos.y);
     
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();


    }



}