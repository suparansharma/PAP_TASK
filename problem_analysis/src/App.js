import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

function App() {


  const app = initializeApp(firebaseConfig);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });




  // Google Sign In method Start

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        console.log(displayName, photoURL, email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };
  // Google Sign In method END





  // Sign Out method Start

    //SignOut System
    const handleGoogleSignOut = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            photo: '',
            error: '',
            success: false,
          };
          setUser(signedOutUser);
        })
        .catch((error) => {
          // An error happened.
        });
    };


  // Sign Out method END






  //Create User method Start

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          
          // ...
        })
        .catch((error) => {
       const newUserInfo = {...user};
       newUserInfo.error = error.message;
       newUserInfo.success = false;
        setUser(newUserInfo);
          
          // ..
        });
    }
    e.preventDefault();
  };


  //Create User method END




  // Email and Password validation method Start
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      isFieldValid = /^[A-Za-z]\w{7,14}$/.test(e.target.value);
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

// Email and Password validation method END






const matchPassword = () => {
  var pw1 = document.getElementById('pswd1');
  var pw2 = document.getElementById('pswd2');
  if (pw1 === pw2) {
    alert('Password created successfully');
  } else {
    alert('Passwords did not match');
  }

  console.log('matchPassword');
};








  return (
    <div className="App">
      {/* Google Sign In method Start */}
      {user.isSignedIn ? (
        <button onClick={handleGoogleSignOut}>Google SignOut</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google SignIn</button>
      )}

      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email:{user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
      {/* Google Sign In method END */}

      {/* createing site */}
      <p>Email:{user.email}</p>
      <p>Password:{user.password}</p>
      <p>Name:{user.name}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onBlur={handleBlur}
          placeholder="Enter Your Name Address"
          required
        /> <br/>
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          placeholder="Enter Your Email Address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onBlur={handleBlur}
          placeholder="Password:A-Za-z"
          id="pswd1"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {/* <input type="password" name="ValidPassword" onBlur={handleBlur} placeholder='Password:A-Za-z' id='pswd2' required/><br/>
        <button type="submit" onClick={matchPassword}>Submit</button> */}
      </form>


      <p style={{color:'red'}}>{user.error}</p>
      {
        user.success && <p style={{color:'green'}}>User Created Successfully</p>
      }

    </div>
  );
}

export default App;
