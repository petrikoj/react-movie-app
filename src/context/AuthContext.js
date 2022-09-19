import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Config";
import { ConfirmUserLogin, ConfirmUserLogout } from "../components/Helpers";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const redirect = useNavigate();

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error:", error);
        alert(error.message);
      });
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        redirect(-1);
        ConfirmUserLogin();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error:", error);
        alert(error.message);
      });
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        ConfirmUserLogout();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert(error.message);
      });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, registerNewUser, logIn, logout, loading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
