var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top
  this.left = left
  this.$node.append('<img src = "http://helloitscharlie.com/assets/img/year-of-the-black-girl/Solange.png" style="width:250px;height:auto">')
  this.step()


  //var oldStep = blinkyDancer.step;
  
};

  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
  
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
     //this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
     this.$node.toggle();
   };
  makeBlinkyDancer.prototype.lineUp = function() {

  };