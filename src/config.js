module.exports = {
  firebaseConfig: {
    apiKey:
      process.env.REACT_APP_API_KEY ||
      "AIzaSyA8APb_6Vbc8PjfJ9t1gsAy4HxZ5c7iS40",
    authDomain:
      process.env.REACT_APP_AUTH_DOMAIN ||
      "react-firebase-auth-790f9.firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECT_ID || "react-firebase-auth-790f9",
    storageBucket:
      process.env.REACT_APP_STORAGE_BUCKET ||
      "react-firebase-auth-790f9.appspot.com",
    messagingSenderId:
      process.env.REACT_APP_MESSAGING_SENDER_ID || "962127514066",
    appId:
      process.env.REACT_APP_APP_ID ||
      "1:962127514066:web:52b964fe84be83f204a00b",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID || "G-V73GJVVH1W",
  },
};
