import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./firebase";

export const validateForm = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters long and contain at least one letter and one number";
    }

    return "Validation successful";
}


export const createFirebaseUser = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        updateProfile(user, {displayName: displayName});
        const {uid, displayName, email} = firebaseAuth.currentUser;
        return {uid, displayName, email};
    } catch (error) {
        throw new Error(error.message);
    }
}


export const updateFirebaseuser = async (displayName, photoURL) => {
    try {
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export const loginFirebaseUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getFirebaseErrorMessage = (errorCode) => {
    console.log(errorCode);
    const errorMessages = {
        "Firebase: Error (auth/email-already-in-use).": "This email is already registered. Please log in.",
        "Firebase: Error (auth/invalid-email).": "The email address is invalid. Please enter a valid email.",
        "Firebase: Error (auth/weak-password).": "Your password is too weak. Please use at least 6 characters.",
        "Firebase: Error (auth/user-not-found).": "No account found for this email. Please sign up.",
        "Firebase: Error (auth/wrong-password).": "The password you entered is incorrect.",
        "Firebase: Error (auth/network-request-failed).": "Network error. Please try again.",
        "Firebase: Error (auth/too-many-requests).": "Too many login attempts. Please try again later.",
        "Firebase: Error (auth/operation-not-allowed).": "Email/password accounts are not enabled. Contact support.",
    };

    return errorMessages[errorCode] || "An unexpected error occurred. Please try again.";
};

