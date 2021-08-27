class Player {
  constructor() {
    this.size = 80;
    this.x = 50;
    this.y = height - this.size;
    this.velocity = 0;
    this.gravity = 0.5;
  }
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocity = -12;
    }
  }
  move() {
    this.velocity = this.velocity + this.gravity;
    this.y = this.y + this.velocity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size - 30,
      this.size - 30,

      currentObs.x,
      currentObs.y,
      currentObs.size - 30,
      currentObs.size - 30
    );

    return iscolliding;
  }
}
