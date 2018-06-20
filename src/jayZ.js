var jayZ = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this,top,left, timeBetweenSteps);
  //this.$node = $('<span class="jayZ"></span>');

  //this.setPosition(200,400)
  this.left = left
  this.top = top
  this.step();
  this.$node.append('<img src = "https://kenyatalk.s3.amazonaws.com/2017/07/172628_3488def8b6601537d317d219d4b756c5.png">')
  this.$node.addClass('jayZ');
  this.$node.mouseover(function() {
    this.sing()
  }.bind(this))

 this.counter = 0
};
  var jayZSound = new Audio('/Users/student/Desktop/hratx35-subclass-dance-party/src/jayz_itsyoboy.wav')

  jayZ.prototype = Object.create(makeDancer.prototype);

  jayZ.prototype.oldStep = makeDancer.prototype.step;
  
  jayZ.prototype.constructor = jayZ;

  jayZ.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
     this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
     //this.$node.css({'background-image': 'url(' + "https://kenyatalk.s3.amazonaws.com/2017/07/172628_3488def8b6601537d317d219d4b756c5.png" + ')'});
     this.$node.toggle();
   };
  jayZ.prototype.sing = function () {
    this.jayZSound.play()
  }
  jayZ.prototype.lineUp = function() {
    
  
  }  
