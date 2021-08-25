class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.lives = ["green", "green", "green"];

    World.add(world, this.body);
  }

  showLives() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    scale(0.5);
    fill("white");
    text("PLAYER", 0, -400);

    scale(2);
    rectMode(CENTER);

    fill(this.lives[0]);
    rect(-50, -150, 50, 70);

    fill(this.lives[1]);
    rect(0, -150, 50, 70);

    fill(this.lives[2]);
    rect(50, -150, 50, 70);
    pop();
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
