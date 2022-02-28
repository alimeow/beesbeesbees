var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.forage = function() {
    this.treasureChest.push('I am too old, let me play cards instead');
};





RetiredForagerBee.prototype = Object.create(Grub.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;


// RetiredForagerBee.prototype.forage = function() {
//   this.treasureChest.push('I am too old, let me play cards instead');
// };