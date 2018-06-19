var baby = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="baby"></span>');
  
  this.step()
  this.$node.append('<img src = "https://kenyatalk.s3.amazonaws.com/2017/07/173063_6bf339daa16d73ce19d0e0bf9e6e0cca.png">');
  //this.$node.removeClass('dancer');
  this.$node.addClass('baby');

  //var oldStep = blinkyDancer.step;
  //this.attr = $('#baby');
};

  baby.prototype = Object.create(makeDancer.prototype);

  baby.prototype.oldStep = makeDancer.prototype.step;
  
  baby.prototype.constructor = baby;

  baby.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
     this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
     this.$node.toggle();
   };
  baby.prototype.lineUp = function() {

  }
