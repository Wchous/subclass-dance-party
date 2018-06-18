var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this);
  this.step = timeBetweenSteps
  this.timeBetweenSteps() = (top,left)

  //var oldStep = blinkyDancer.step;
  
};

 makeBlinkyDancer.protoype = Object.create(makeDancer.prototype);

  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
    // call the old version of step at the beginning of any call to this new version of step
    // oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  // };

  
  var newBlinky = new makeBlinkyDancer(top, left, timeBetweenSteps);