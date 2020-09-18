import firebase from 'firebase';




const firebaseConfig = {
  apiKey: "AIzaSyAcqRs25meuG_ARqdw35dLEQktsTWgRRtA",
  authDomain: "clone-by-raghib.firebaseapp.com",
  databaseURL: "https://clone-by-raghib.firebaseio.com",
  projectId: "clone-by-raghib",
  storageBucket: "clone-by-raghib.appspot.com",
  messagingSenderId: "362655215961",
  appId: "1:362655215961:web:8907a2d3bfecbfbf515c48",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db , auth};






