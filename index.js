const randomNumber = 3;
const randomTwo = 9;

if (randomNumber > 0) {
  console.log("Ye");
} else {
  console.log("No");
}

if (randomNumber > 5) {
  console.log("Winner");
} else if (randomNumber > 0 && randomNumber < 5) {
  console.log("Ok");
} else {
  console.log("Try again");
}

//  5.
if (randomNumber + randomTwo > 5) {
  console.log("Good scores!");
}

if (randomTwo || randomTwo < -9) {
  console.log("Minus nine!");
}

let message = null;
if (randomNumber + randomTwo < 0) {
  console.log("We have gone sub zero!");
}
