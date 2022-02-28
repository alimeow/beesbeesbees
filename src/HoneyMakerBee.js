var HoneyMakerBee = function() {
  // this.age = new Grub.age = 10;
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';

  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};

HoneyMakerBee.prototype.constructor = HoneyMakerBee;