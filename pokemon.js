class pokemon {
  constructor(hp, atk, def, spatk, spdef, spd, frontSprite, backSprite) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spatk = spatk;
    this.spdef = spdef;
    this.spd = spd;
    this.backSprite = loadImage(backSprite);
    this.frontSprite = loadImage(frontSprite);
    this.owned = false;
    this.active = false;
    this.orderCaught = null;
  }
  drawEnemy() {
    image(this.frontSprite, 300, -25, this.frontSprite.width * 3, this.frontSprite.height * 3);
  }
  drawActive() {
    if (this.active == true) {
      image(this.backSprite, 0, 165, this.backSprite.width * 3, this.backSprite.height * 3)
    }
  }
}
