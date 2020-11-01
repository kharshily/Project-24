class Ground {

    constructor(x,y) {
        
        var options = {
        'isStatic':true
        }

        this.body = Bodies.rectangle(x,y,700,10,options);
        World.add(world,this.body);
    }
    
    display() {
    fill("yellow")
    rect(350,190,800,10);
    }
}