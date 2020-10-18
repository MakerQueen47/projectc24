class Ground{

    constructor(x,y,width,height){


        var options = {

            isStatic: true
        }
        this.body = BODIES.rectangle(x,y,width,height,options);
        WORLD.add(world,this.body);
        this.w = width;
        this.h = height;
    }

display(){

    rectMode(CENTER);
    var pos = this.body.position;
    fill("brown");
    rect(pos.x, pos.y, this.w, this.h);
}

}