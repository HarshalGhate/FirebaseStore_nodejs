
var admin = require("firebase-admin");

var serviceAccount = require("./fir-store-acdf7-firebase-adminsdk-lx49a-ad7e835d22.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


//   firebase.initializeApp(firebaseConfig)
  const db=admin.firestore()
  const User=db.collection('User')

 module.exports=User;
