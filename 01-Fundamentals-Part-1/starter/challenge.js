
// //* Challenge 1#

// // const massMark = 78;
// // const heightMark = 1.69;

// // const massJohn = 92;
// // const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIJohn, BMIMark, markHigherBMI);

// //* Challenge 2#

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;

// // const massJohn = 85;
// // const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}



