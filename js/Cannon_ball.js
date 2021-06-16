class Cannon_ball {
    constructor(x, y) {
        var cannon_ball_ops = {
            restitution: 1,
            friction: 0.5,
            density: 1,
            isStatic: true
        }
        this.r = 30
    this.body = Bodies.circle(x, y, this.r, cannon_ball_ops);
    World.add(world, this.body);
    this.image = loadImage("assets/cannonball.png")
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
        pop()
    }
    shoot() {
            var velocity = p5.Vector.fromAngle(cannon.angle)
            velocity.mult(20)
            Matter.Body.setStatic(this.body, false)
            Matter.Body.setVelocity(this.body, {x:velocity.x, y:velocity.y})
    }
}