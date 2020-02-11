var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(food){
  if (food === this.food) {
    console.log('Yum!');
    return true;
  } else {
    console.log('I can\'t eat this :(');
    return false;
  }
};