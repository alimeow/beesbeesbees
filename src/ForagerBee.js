var ForagerBee = function() {
  // new Grub
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Grub.prototype);

ForagerBee.prototype.forage = function(val) {
  this.treasureChest.push(val);
};

ForagerBee.prototype.constructor = ForagerBee;