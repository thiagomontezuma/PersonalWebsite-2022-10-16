// Set the configuration for your app
// TODO: Replace with your project's config object
// var config = {
//   apiKey: 'AIzaSyDWeOPt1Rm-MuBhQRIzrVt0v-65OUZ7IzQ',
//   authDomain: 'personalwebsite-154a1.firebaseapp.com',
//   databaseURL: 'https://personalwebsite-154a1.firebaseio.com',
//   storageBucket: 'personalwebsite-154a1.appspot.com'
// };
// firebase.initializeApp(config);

// Get a reference to the database service
// var database = firebase.database();

// // Get Form
// const form = document.querySelector('.form');

// // Get all Inputs
// const inputName = form.querySelector('#formName');
// const inputEmail = form.querySelector('#formEmail');
// const inputMessage = form.querySelector('#formMessage');

// // Create a Function to Push to Firebase Database
// function firebasePush(name, email, message) {
//   //push itself
//   var mailsRef = firebase.database().ref('contactForm').push().set({
//     name: name.value,
//     email: email.value,
//     message: message.value
//   });
// }

// //push on form submit
// if (form) {
//   form.addEventListener('submit', function (evt) {
//     evt.preventDefault();
//     firebasePush(inputName, inputEmail, inputMessage);

//     //shows alert if everything went well.
//     return alert('Data Successfully Sent to Database');
//   });
// }
