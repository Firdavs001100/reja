// // TASK F

function findDoublers(text) {
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] === text[j]) return true;
    }
  }
  return false;
}

console.log(findDoublers("heloo"));
console.log(findDoublers("helo"));

// // TASK E

// function toReverse(text) {
//     let textArr = text.split("");
//     textArr.reverse();
//     return textArr.join("");
// }

// console.log(toReverse("Mike Tyson"));

// // TASK D

// function checkEqual(a, b) {
//     if (a.length !== b.length) {
//         return false
//     }

//     let sortedA = a.split("").sort().join();
//     let sortedB = b.split("").sort().join();

//     if (sortedA === sortedB) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkEqual("martin", "tinram"));

// wrong logic
// function checkEqual(a, b) {
//     let isEqual = false;
//     for (let i=0; i < a.length; i++) {
//         for (let j=0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 isEqual = true;
//             } else {
//                 isEqual = false;
//             }
//         }
//     }

//     if (isEqual) {
//         return "Two inputs are equal";
//     } else {
//         return "Two inputs are NOT equal"
//     }
// };

// // TASK C
// const moment = require("moment");

// let time = moment().format("HH:mm:ss")
// class Shop {
//     constructor(item1Q, item2Q, item3Q) {
//         this.item1Q = item1Q;
//         this.item2Q = item2Q;
//         this.item3Q = item3Q;
//     }

//     qoldiq() {
//         console.log(`Soat ${time}: Sizning mahsulotlaringiz va ularning miqdori ⬇️ \nNon: ${this.item1Q}ta \nLagmon: ${this.item2Q}ta \nCola: ${this.item3Q}ta`);
//         console.log("=====");
//     }

//     qabul(item, quantity) {
//         switch (item) {
//             case "non":
//             case "Non":
//                 this.item1Q += quantity;
//                 console.log(`Sizda jami ${this.item1Q}ta 'Non' bo'ldi`);
//                 console.log("=====");
//                 break;
//             case "lagmon":
//             case "Lagmon":
//                 this.item2Q += quantity;
//                 console.log(`Sizda jami ${item2Q}ta 'Lagmon' bo'ldi`);
//                 console.log("=====");
//             case "cola":
//             case "Cola":
//                 this.item3Q += quantity;
//                 console.log(`Sizda jami ${item3Q}ta 'Cola' bo'ldi`);
//                 console.log("=====");
//             default:
//                 console.log("Iltimos to'g'ri argument kiriting! 1nchi argument hohlagan mahsulotingizga, 2nchisi esa shu mahsulotni miqdori");
//                 console.log("=====");
//                 break;
//         }
//     }

//     sotish(item, quantity) {
//         switch (item) {
//             case "non":
//             case "Non":
//                 if (this.item1Q > quantity) {
//                     this.item1Q -= quantity;
//                     console.log(`Sizda ${this.item1Q}ta 'Non' qoldi`);
//                     console.log("=====");
//                 } else {
//                     console.log(`Sizda faqat ${this.item1Q}ta 'Non' bor. Itlimos magazinni shu mahsulot bilan to'ldirib yana qayta urinib ko'ring`);
//                     console.log("=====");
//                 }
//                 break;
//             case "lagmon":
//             case "Lagmon":
//                 if (this.item2Q > quantity) {
//                     this.item2Q -= quantity;
//                     console.log(`Sizda ${this.item2Q}ta 'Lagmon' qoldi`);
//                     console.log("=====");
//                 } else {
//                     console.log(`Sizda faqat ${this.item2Q}ta 'Lagmon' bor. Itlimos magazinni shu mahsulot bilan to'ldirib yana qayta urinib ko'ring`);
//                     console.log("=====");
//                 }
//                 break;
//             case "cola":
//             case "Cola":
//                 if (this.item3Q > quantity) {
//                     this.item3Q -= quantity;
//                     console.log(`Sizda ${this.item3Q}ta 'Cola' qoldi`);
//                     console.log("=====");
//                 } else {
//                     console.log(`Sizda faqat ${this.item3Q}ta 'Cola' bor. Itlimos magazinni shu mahsulot bilan to'ldirib yana qayta urinib ko'ring`);
//                     console.log("=====");
//                 }
//                 break;
//             default:
//                 console.log("Iltimos to'g'ri argument kiriting! 1nchi argument hohlagan mahsulotingizga, 2nchisi esa shu mahsulotni miqdori");
//                 console.log("=====");
//                 break;
//         }
//     }
// }

// const shoppingCart = new Shop(3, 2, 9);
// shoppingCart.qoldiq();
// shoppingCart.qabul("asal", 2); // bu productimiz yo'q. Shunga deafultimizni ko'rsatadi bizga
// shoppingCart.qabul("Non", 4);
// shoppingCart.sotish("non", 4);
// shoppingCart.qoldiq();

// // TASK B

// function countDigits(text) {
//     let i = 0;
//     let count = 0;
//     while (i < text.length) {
//         if(text[i] >= "0" && text[i] <= "9") {
//             count++
//         }
//         i++
//     }

//     return count;
// }

// const result = countDigits("w1njib2o12b123j");
// console.log(result);

// const jack_ma_advice = [
//     "Learn and make mistakes.",
//     "Follow a good leader.",
//     "Take risks and try your own ideas.",
//     "Focus on your strengths.",
//     "Guide and train young people.",
//     "Relax and enjoy life."
// ]

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
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(13, 9, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });
