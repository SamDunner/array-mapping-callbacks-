var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(object){
  var newObject = {};
  newObject = Math.sqrt(Math.pow(object.x, 2) + Math.pow(object.y, 2));
  return newObject;
});
console.log(result);

//assert.equal(result, [5, 13, 17]);
//This assertion wasn't working properly


/*
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
  var result = input.map(function(squareRoot, num) {
    var assert = [];
    var object = {};
    Math.pow(assert[object.key], 2) = assert;
  });


    function squareRoot(num) {
      return Math.sqrt(num);
  }

assert.equal(result, [5, 13, 17], squareRoot);

// var assert = [];
  //Math.sqrt
  //return assert
  */