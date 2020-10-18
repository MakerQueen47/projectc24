class Pig {

    constructor(x,y){
            // constructor function is invoked everytime we create an object from 'this' class! 
        var options= {

            restitution:0.8,
            friction:0.3,
            density:1.0

        }

        this.body = BODIES.rectangle(x,y,50,50,options);
        WORLD.add(world, this.body);
        this.w = 50;
        this.h = 50;

    }

    display(){

      
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        strokeWeight(4);
        stroke("green");
        fill("green");
        rotate(angle);
        translate(pos.x,pos.y);
       
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();


    }



}