
// задача 9
// function add(a, b, c) {
// return a+b+c;
// }
// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// задача 10
// function makeMessage (name, price) {

//    const message = `You picked ${name}, price per item is ${price} credits`;
//    makeMessage('Radar', 6150);

// //   return message;
// // };



// // задача 11
// // function calculateTotalPrice (orderedQuantity, pricePerItem) {

// //   const totalPrice = orderedQuantity*pricePerItem;
// //   return totalPrice;

// // };




// // function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

// //   const totalPrice= orderedQuantity*pricePerDroid+deliveryFee;

// //   const message= `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// //   console.log (message);
// //   console.log (totalPrice);

// //   return message;
// //   }



// // age = 8;
// // function checkAge(age) {
// //   if (age >= 18) { // Change this line

// //     return "You are an adult";
// //   }

// //   return "You are a minor";
// // }
// // console.log(checkAge(age));




// // function checkPassword(password) {
// //   const ADMIN_PASSWORD = "jqueryismyjam";

// //   if (password === ADMIN_PASSWORD) {
// //     return "Welcome!";
// //   }
// //   return "Access denied, wrong password!";
// //   }

// // console.log(checkPassword(password));




// // function createArrayOfNumbers(min, max) {
// //   const numbers = [];
// //   // Change code below this line
// //   for (let index = min; index <= max; index++) {
// //     numbers.push(index);
// //   }

// //   console.log(numbers);

// //   return numbers;
// // }

// // console.log(createArrayOfNumbers(1, 3));



// // function filterArray(numbers, value) {
// //   // Change code below this line






// //   function getCommonElements(array1, array2) {
// //     // Change code below this line
// //     const NewArray = [array1.includes.array2];
// //     for (let i = array1; i < array2; i++) {
// //       NewArray.push(i);
// //     }
// //     return NewArray;

// //   console.log(NewArray);
// // }



// // function makePizza(pizzaName, callback) {
// //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// //   callback(pizzaName);
// // }

// // makePizza("Royal Grand", function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// // });
// // // Change code below this line

// // makePizza("Ultracheese", function eatPizza(pizzaName) {
// //   console.log (`Eating pizza ${pizzaName}`)
// // });



// // const pizzaPalace = {
// //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// //   order(pizzaName,onSuccess,onError) {
// //  // Change code above this line
// //     if (this.pizzas.includes(pizzaName)) {
// //       return onSuccess(pizzaName);}
// //       return onError (`There is no pizza with a name ${pizzaName} in the assortment.`)
// //   },
// // };


// // // Callback for onSuccess
// // function makePizza(pizzaName) {
// //   return (`Your order is accepted. Cooking pizza ${pizzaName}.`)
// // }

// // // Callback for onError
// // function onOrderError(error) {
// //   return (`Error! ${error}`)
// // }

// // // Method calls with callbacks
// // pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);




// // Задача 7 4модуль 
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((number) => {
//     if (secondArray.indexOf(number) >= 0) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
// }
// // Change code above this line
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach((number) => {
//     console.log(number);
//     if (number % 2 === 0) {
//       console.log(number);
//       newArray.push(number + value);
//     }
//   });
//   return newArray;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));


// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const ageUser = users.filter((user) => {
//     return user <= maxAge && user >= minAge
//   });
//   return ageUser;
// };
// // Change code above this line

// console.log();

//   // Change code above this line

//   const dataOne = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

//   // Change code below this line
// const getFriends = (users) => {
//   let allFriends = [];
//   users.forEach((user) => {
//     allFriends = allFriends.concat(user.friends);
//   });

//   console.log(allFriends);

//   const uniqFriends = [];

//   allFriends.forEach((friend) => {
//     const indices = [];
//     let i = allFriends.indexOf(friend);
//     indices.push(i);
//     for(i; i < allFriends.length; i++) {
//       const newIndex = allFriends.indexOf(friend, i + 1);
//       if (newIndex > 0) {
//         indices.push(newIndex);
//       }
//     }

//     if (indices.length === 1) {
//       uniqFriends.push(friend);
//     }
//   })

//   return uniqFriends;
// };   
// // Change code above this line



// console.log(getFriends(dataOne));


// // // Change code below this line
// // const getUserWithEmail = (users, email) => {
// //  const emailUser= users.find(email => user.email===email) {
// //   emailUser.indexOf(email).push(name);

// //   return (emailUser);
// //  }
// // };
// // // Change code above this line



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getUserWithEmail = (users, email) => {
//   const emailUser = users.find(user => user.email === email);
//   console.log(emailUser);
//   return emailUser[0];
// };
// // Change code above th

// console.log(users, 'shereeanthony@kog.com')





// Задача 41 модуль 4
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = books.sort((a, b) => {
  a.author.localeCompare(b.author);
})


const sortedByReversedAuthorName = books.sort((firstAuthor, secondAuthor) => {
  secondAuthor.author.localeCompare(firstAuthor.author);
});


const sortedByAscendingRating = books;

const sortedByDescentingRating = books;