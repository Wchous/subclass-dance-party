$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );


    $('body').append(dancer.$node);
    

    window.dancers.push(dancer)

    for(var i = 0; i<window.dancers.length;i++){
      if(window.dancers.length>2){
        if(window.dancers[i].left < window.dancers[i+1].left || window.dancers[i].top > window.dancers[i+1].top){
          window.dancers[i].$node.addClass('back')
      }
    }
    }

  });

  var jayZSound = new Audio('/Users/williamhoustoun/Desktop/HR/hratx35-subclass-dance-party/src/jayz_itsyoboy.wav')
  $('body').on('mouseover','.jayZ',function() {
    jayZSound.play()
  })  

  $('.lineUpButton').on('click', function(){
    
    //console.log(window.dancers)
    var yAxis = 50
    window.dancers.forEach(function(dancer,index){
      dancer.setPosition(yAxis, 50)
      yAxis += 150
    })
  })
});  


