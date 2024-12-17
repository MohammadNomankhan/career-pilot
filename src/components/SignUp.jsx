import AuthFeild from "./AuthField";
import Button from "./Button";
import AuthForm from "./AuthForm";
import { useState } from "react";
import * as authService from "../utils/validate"
import { useDispatch } from "react-redux";
import { setUser } from "../utils/authSlice";

const AUTH_STATUS = {
    IDLE: "idle",
    SUCCESS: "success",
    FAILURE: "failure",
};


const SignUp = () => {

    const [errorMsg, setErrorMsg] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const dispatch = useDispatch();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formCredential = {
            displayName: formData.get("name"),
            email: formData.get("username"),
            password: formData.get("password")
        }
        try {
            setIsAuthenticating(true);
            setErrorMsg(null);

            const isValidated = authService.validateForm(formCredential.email, formCredential.password);
            if (isValidated != "Validation successful") {
                throw new Error(isValidated);
            }

            const userDetails = await authService.createFirebaseUser(formCredential.email, formCredential.password, formCredential.displayName);

            dispatch(setUser(userDetails));

            event.target.reset();
        } catch (error) {
            const friendlyMessage = authService.getFirebaseErrorMessage(error.message);
            setErrorMsg(friendlyMessage);
        } finally {
            setIsAuthenticating(false);
        }
    }

    return (
        <AuthForm isSignUp={true}>
            <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
                <AuthFeild type="text" name="name" label="Username" />
                <AuthFeild type="email" name="username" label="Email" />
                <AuthFeild type="password" name="password" label="Password" />
                {errorMsg && <p className="text-red-600 p-2 bg-red-300/10 rounded flex flex-col">An error occurred <span className="text-[#a7a9be]">{errorMsg}</span></p>}
                <Button isDisabled={isAuthenticating} btnAction="submit" btnText={isAuthenticating ? "Submitting..." : "Submit"} btnType="filled" />
            </form>
        </AuthForm>
    );
}

export default SignUp;