var Bee = function() {

  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

//have to specify prototype in order to pass the prototype to Bee.
//but what's happening with the fallthrough of multiple layers in the slides?
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

