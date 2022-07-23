/**
 * 
 *    =================== Authentication =======================
 * 
 * Steps to use firebase
 * 1. Create a project on console.firebase.google.com
 * 2. npm install firebase 
 * 3. Register Web app in firebase
 * 4. copy firebase init with config from firebase project settings into a file firebase.init.js (in src folder)
 * 5. import getAuth from firebase/auth and create const auth = getAuth(app) in App.js
 * 6. export default auth from firebase.init.js
 * 7. import auth where required.
 * 8. turn on google authentication (firebase >authentication> enable google sign in)
 * 9. create google provider
 * 10. use signInWithPopup and pass auth and provider
 * 11. handle .then (if successful) and catch error (if error) 
 * 
 * 
 * ------------------------ React Firebase Hooks ----------------
 *  => https://github.com/CSFrequency/react-firebase-hooks
 *  => npm install --save react-firebase-hooks
 *  => https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth
 *  =>  follow Example => https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#social-login-example
 * 
 *   
 * 
 */