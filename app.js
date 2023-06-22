console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  if(count < 0){
    for (let i = -1; i >= count; i-- ){
      if(i % 2 != 0){
        console.log(i);
      }
    }
  } else{
    for (let i = 1; i <= count; i++){
      if (i%2 != 0){
        console.log(i);
      }
    }
  }
}
            
  printOdds(10);
  printOdds(-10);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName,age){
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if(age < 16){
    console.log (belowSixteen);
  }
  else{
    console.log (aboveSixteen);
  }
      
}

checkAge ("Joe",12);
checkAge ("Joseph", 25);
checkAge ("Joey",78);
// Exercise 3
function checkPoint(x, y) {
  if (x === 0 && y === 0) {
    console.log("The point is at the origin (0, 0).");
  } else if (x === 0) {
    console.log(`(${x}, ${y}) y-axis.`);
  } else if (y === 0) {
    console.log(`(${x}, ${y}) x-axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) first quadrant.`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) second quadrant.`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) third quadrant.`);
  } else {
    console.log(`(${x}, ${y}) fourth quadrant.`);
  }
}
checkPoint(0, 0);  
checkPoint(3, 0);  
checkPoint(0, -2); 
checkPoint(2, -3); 