const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const output4 = document.querySelector("#output4");
const output5 = document.querySelector("#output5");
const output6 = document.querySelector("#output6");
const output7 = document.querySelector("#output7");
const output8 = document.querySelector("#output8");
const output9 = document.querySelector("#output9");
const output10 = document.querySelector("#output10");

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/post/comments") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
//             {
//               email: "hello@outlook.com",
//               commentBody: "Good going a lot to learn from you awesome"
//             },
//             {
//               email: "ram99@gmail.com",
//               commentBody: "Anyone from Vadodara here"
//             }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Commentes found."
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult1 = async (url) => {
//   try {
//     const { data } = await fakeFetch(url);
//     const listEmail = data.reduce(
//       (li, { email }) => li + `<li>${email}</li>`,
//       ""
//     );
//     output1.innerHTML = `<ol>${listEmail}</ol>`;
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// getResult1("https://example.com/post/comments");

// ----------------------------question 2 -----------------------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/winner-team") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: ["Jhon", "Raju", "Anjali", "Sakshi"]
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Users found."
//         });
//       }
//     }, 2000);
//   });
// };

// async function getResult2(url) {
//   try {
//     const result = await fakeFetch(url);
//     const {
//       data: { data: names }
//     } = result;
//     output2.innerHTML = `Congratulation to the members of winning team ${names.join()} great work keep it up`;
//   } catch (error) {
//     output2.innerHTML = error.message;
//   }
// }

// getResult2("https://example.com/winner-team");

// -----------------------Question 3 ----------------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/login") {
//         resolve({
//           status: 200,
//           data: {
//             auth: true
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Status not found"
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult3 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     const {
//       data: { auth }
//     } = result;
//     if (auth) output3.innerHTML = `Verified`;
//   } catch (error) {
//     output3.innerHTML = error.message;
//   }
// };

// getResult3("https://example.com/login");

// -----------------question 4 -----
// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/order/status/OR00A12") {
//         resolve({
//           status: 200,
//           data: {
//             order: {
//               orderId: "OR00A12",
//               status: "delivery pending",
//               userName: "Kajal Kumari"
//             }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No order found"
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult4 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     const {
//       data: {
//         order: { userName: name, status }
//       }
//     } = result;
//     output4.innerHTML = `Hello ${name} your order status is  ${status}.`;
//   } catch (error) {
//     output4.innerHTML = error.message;
//   }
// };

// getResult4("https://example.com/order/status/OR00A12");

// ---------------------question 5 ------------------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/photo") {
//         resolve({
//           status: 200,
//           data: {
//             photo: {
//               link: "https://source.unsplash.com/featured/300x201",
//               title: "Random Image"
//             }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No order found"
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult5 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     const {
//       data: {
//         photo: { link }
//       }
//     } = result;
//     // console.log(link);
//     output5.innerHTML = `<img src=${link} />`;
//   } catch (error) {
//     output5.innerHTML = error.message;
//   }
// };

// getResult5("https://example.com/photo");

// -------------------question 6 --------------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/productlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Shoes", price: 100, quantity: 2 },
//             { itemName: "Hat", price: 350, quantity: 1 },
//             { itemName: "Tshirt", price: 410, quantity: 5 }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Items list not found."
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult6 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     const { data } = result;
//     // console.log(data);
//     const totalPrice = data.reduce(
//       (acc, { price, quantity }) => acc + price * quantity,
//       0
//     );
//     output6.innerHTML = `Total Price : ${totalPrice} INR`;
//   } catch (error) {
//     output6.innerHTML = error.message;
//   }
// };

// getResult6("https://example.com/api/productlist");

// ---------------------- question 7 -------------
// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/users") {
//         reject({
//           status: 500,
//           message: "Internal Server Error"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult7 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     console.log(result);
//   } catch (error) {
//     if (error.status === 500) {
//       output7.innerHTML = `Oops. Unexpected Error. Please try again.`;
//       output7.style.color = "red";
//       console.error(error.message);
//     }
//   }
// };

// getResult7("https://example.com/api/users");

// ------------------- question 8 ---------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/allbooks") {
//         reject({
//           status: 400,
//           message: "Bad Request"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult8 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     console.log(result);
//   } catch (error) {
//     if (error.status === 400) {
//       output8.innerHTML = `Bad Request! Requested size too large.`;
//       output8.style.color = "red";
//       console.error(error.message);
//     }
//   }
// };

// getResult8("https://example.com/api/allbooks");

// ------------------------ question 9 ---------------

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!url === "https://example.com/welcome") {
//         reject({
//           status: 511,
//           message: "Network auth required"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             logged: true
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult9 = async (url) => {
//   try {
//     const result = await fakeFetch(url);
//     const {
//       data: { logged }
//     } = result;
//     if (logged) {
//       output9.innerHTML = `Welcome to the server.`;
//       output9.style.backgroundColor = "Green";
//     }
//   } catch (error) {
//     output9.innerHTML = ` Network auth required`;
//     output9.style.color = "red";
//     console.error(error.message);
//   }
// };

// getResult9("https://example.com/welcome");

// ------------------------ question 10-----------------

// const fakeFetch = (url, dimensions) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/getImage") {
//         resolve({
//           status: 200,
//           data: {
//             image: {
//               link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
//               title: "Random Image"
//             }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No photo of such dimension found"
//         });
//       }
//     }, 2000);
//   });
// };

// const getResult10 = async (url, dimensions) => {
//   try {
//     const result = await fakeFetch(url, dimensions);
//     const {
//       data: {
//         image: { link }
//       }
//     } = result;
//     // console.log(link);
//     output10.innerHTML = `<img src=${link}/>`;
//   } catch (error) {
//     output10.innerHTML = ` Network auth required`;
//   }
// };

// getResult10("https://example.com/getImage", [300, 260]);
