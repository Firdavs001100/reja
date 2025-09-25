const jack_ma_advice = [
    "Learn and make mistakes.",
    "Follow a good leader.",
    "Take risks and try your own ideas.",
    "Focus on your strengths.",
    "Guide and train young people.",
    "Relax and enjoy life."
]

// // Callback funtions
// function give_an_advice(age, callback) {
//     if (typeof age !== "number") callback("Please, enter a number", null)
//     else if (age <= 20) callback(null, jack_ma_advice[0])
//     else if (age > 20 && age <= 30) callback(null, jack_ma_advice[1])
//     else if (age > 30 && age <= 40) callback(null, jack_ma_advice[2])
//     else if (age > 40 && age <= 50) callback(null, jack_ma_advice[3])
//     else if (age > 50 && age <= 60) callback(null, jack_ma_advice[3])
//     else {
//         setTimeout(() => {
//             callback(null, jack_ma_advice[4])
//         }, 5000)
//     }
// }

// console.log("start");
// give_an_advice(90, (err, data) => {
//     if (err) console.log("Error: ", err)
//     else console.log("Advice for your age: ", data);
// })
// console.log("stop")


// Async functions
// async function give_an_advice(age) {
//     if (typeof age !== "number") throw new Error("Please, enter a number", null)
//     else if (age <= 20) return jack_ma_advice[0]
//     else if (age > 20 && age <= 30) return jack_ma_advice[1]
//     else if (age > 30 && age <= 40) return jack_ma_advice[2]
//     else if (age > 40 && age <= 50) return jack_ma_advice[3]
//     else if (age > 50 && age <= 60) return jack_ma_advice[4]
//     else {
//         // return jack_ma_advice[5]
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(jack_ma_advice[5])
//             }, 1000)
//         })
//     }
// }


// Then and catch
// console.log("start");
// give_an_advice(90)
//     .then((data) => {
//         console.log("Advice for your age: ", data)
//     })
//     .catch((err) => {
//         console.log("Error: ", err)
//     })
// console.log("stop")


// async orqali multiple so'rash
// async function run() {
//     let advice = await give_an_advice(20)
//     console.log("Advice: ", advice)
//     advice = await give_an_advice(30)
//     console.log("Advice: ", advice)
//     advice = await give_an_advice(50)
//     console.log("Advice: ", advice)
//     advice = await give_an_advice(600)
//     console.log("Advice: ", advice)
// }

// run()

// function countLetter(a, text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === a) {
//       count++;
//     }
//   }
//   return count;
// }


// console.log(countLetter("e", "engineer")); 

// DEFINE
function qoldiqliBolish(a, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng emas!", null);
  } else {
    const c = a % b;
    callback(null, c);
  }
}

// CALL
qoldiqliBolish(13, 9, (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("data:", data);
    console.log("MANTIQLAR...");
  }
});