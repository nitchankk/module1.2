// 5.
// Instruction:
// - Create class Elevator with the following specifications:
// Class Elevator:

// Constructor
// • Constructor(maxFloor, minFloor): This initializes the properties 
// 'maxFloor', 'minFloor' and set 'currentFloor' to 0


// Properties
// • currentFloor: The floor where the elevator currently is. , type number
// • maxFloor: The highest floor the elevator can go to. , type number
// • minFloor: The lowest floor the elevator can go to , type number


// Methods
// • goUp(): Increases currentFloor by 1, but not above maxFloor.
// • goDown(): Decreases currentFloor by 1, but not below minFloor.
// • goToFloor(floor): Takes a floor number and sets currentFloor to that 
// floor if it's within range.
// • displayFloor(): Prints the current floor to the console.

class Elevator {
  constructor(maxFloor, minFloor) {
    this.maxFloor = maxFloor;
    this.minFloor = minFloor;
    this.currentFloor = 0;
  }

  goUp() {
    if (this.currentFloor === this.maxFloor) {
      this.currentFloor
    } else this.currentFloor++;
  }

  goDown() {
    if (this.currentFloor === this.minFloor) {
      this.currentFloor
    } else this.currentFloor--;
  }

  goToFloor(floor) {
    if (floor >= this.minFloor && floor <= this.maxFloor) {
      this.currentFloor = floor;
    }
  }

  displayFloor() {
    console.log(this.currentFloor)
  }
}

// Example usage:
const elevator = new Elevator(20, 1);

elevator.displayFloor(); // Output: Current floor: 0

elevator.goToFloor(10);
elevator.goUp();
elevator.displayFloor(); // Output: Current floor: 11

elevator.goDown();
elevator.displayFloor(); // Output: Current floor: 10
elevator.goToFloor(5);
elevator.displayFloor(); // Output: Current floor: 5