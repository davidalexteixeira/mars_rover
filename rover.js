
var myRover = {
  position: [0,0],
  direction: 'N'
};

function command(string){

for(var i = 0; i < string.length; i++) {

 if(string[i] == 'f'){
    moveRover(myRover);
    outOfBounds(myRover);
 }
 if(string[i] == 'b'){
   moveBackward(myRover);
   outOfBounds(myRover);
 }
 if(string[i] == 'r'){
  turnRight(myRover);
}
 if(string[i] == 'l'){
  turnLeft(myRover);
    }
  }
 console.log("Curiosity's new position: " + "[" + myRover.position[0] + "," + myRover.position[1] + "]" + " and facing: " + myRover.direction);
}

function moveRover(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

}

function moveBackward(rover){
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
}

function turnRight(rover){
  if(myRover.direction == 'N') {
    myRover.direction = 'E';
  }else if (myRover.direction == 'E'){
    myRover.direction = 'S';
  }else if(myRover.direction == 'S') {
    myRover.direction = 'W';
  }else if(myRover.direction == 'W'){
    myRover.direction = 'N';
  }
}

function turnLeft(rover) {
  if(myRover.direction == 'N') {
    myRover.direction = 'W';
  }else if(myRover.direction == 'W') {
    myRover.direction = 'S';
  }else if(myRover.direction == 'S'){
    myRover.direction = 'E';
  }else if(myRover.direction == 'E'){
    myRover.direction = 'N';
  }
}

function outOfBounds(rover) {

  if(myRover.position[0] === -1){
    myRover.position[0] = 100;
  }
  if(myRover.position[0] > 100){
    myRover.position[0] = 0;
  }
  if(myRover.position[1] === -1){
    myRover.position[1] = 100;
  }
  if(myRover.position[1] > 100){
    myRover.position[1] = 0;
  }
}

command('blbbbbbffffffffffrrfffffffrrrrrffffffflfffffff');
