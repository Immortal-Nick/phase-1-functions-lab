// Code your solution in this file!
const headquarters = 42;

function distanceFromHqInBlocks(someValue) {
  // Returns the number of blocks given a value
  return Math.abs(someValue - headquarters);
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // There are 264 feet in a block
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400) {
      return (distance - 400) * 0.02;
    } else {
      return 0;
    }
  }