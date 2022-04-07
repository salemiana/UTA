// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
var shout = "shout";
var shout = 'Shout';

function justShout() {
  console.log(shout + ', ' + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  
  var animal = 'Lions';
  console.log(animal);
  return;
}

function sayTigers() {
  var animal = 'Tigers';
  console.log('and ' + animal + ' and ');
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
var bears = 'Bears';

function sayBears() {
<<<<<<< HEAD
  //var bears = 'Panda';//
=======
  // var bears = 'Pandas';
>>>>>>> ba403eab9b4107dadd1475234d20c7a264775018
  console.log(bears + '! OH MY!');
  return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
<<<<<<< HEAD


function singAlong() {
  //console.log(sing + ',');//
  var sing = 'Sing';
  console.log(sing + ' ');
=======
// var sing = 'Sing';

function singAlong() {
  var sing = 'Sing';
  console.log(sing + ',');
>>>>>>> ba403eab9b4107dadd1475234d20c7a264775018
  var singASong = function() {
    console.log(sing + ' a Song.');
  };
  singASong();
}

singAlong();
