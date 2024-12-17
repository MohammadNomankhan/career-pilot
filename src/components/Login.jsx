import AuthFeild from "./AuthField";
import Button from "./Button";
import AuthForm from "./AuthForm";
import { Link } from "react-router";
import { useState } from "react";
import * as authService from "../utils/validate"


const AUTH_STATUS = {
    IDLE: "idle",
    SUCCESS: "success",
    FAILURE: "failure",
};

const Login = () => {

    const [errorMsg, setErrorMsg] = useState(null);
    const [authStatus, setAuthStatus] = useState(AUTH_STATUS.IDLE);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formCredential = {
            email: formData.get("username"),
            password: formData.get("password"),
        }

        try {
            setIsAuthenticating(true);
            setErrorMsg(null);
            setAuthStatus(AUTH_STATUS.IDLE);

            const isValidated = authService.validateForm(formCredential.email, formCredential.password);
            if (isValidated != "Validation successful") {
                throw new Error(isValidated);
            }

            const temp = await authService.loginFirebaseUser(formCredential.email, formCredential.password);
            

            setAuthStatus(AUTH_STATUS.SUCCESS);
            event.target.reset();

        } catch (error) {
            setAuthStatus(AUTH_STATUS.FAILURE);
            const friendlyMessage = authService.getFirebaseErrorMessage(error.message);
            setErrorMsg(friendlyMessage);
        } finally {
            setIsAuthenticating(false);
        }

    }

    return (
        <AuthForm>
            <form className="flex flex-col gap-6" onSubmit={handleLogin}>
                <AuthFeild type="email" name="username" label="Email" />
                <AuthFeild type="password" name="password" label="Password" />
                <div className="text-right">
                    <Link to="/forgot-password" className="text-primary hover:underline text-sm">
                        Forgot your password?
                    </Link>
                </div>
                {errorMsg && <p className="text-red-600 p-2 bg-red-300/10 rounded flex flex-col">An error occurred <span className="text-[#a7a9be]">{errorMsg}</span></p>}
                <Button isDisabled={isAuthenticating} btnAction="submit" btnText={isAuthenticating ? "Submitting..." : "Submit"} btnType="filled" />
            </form>
        </AuthForm>
    );
}

export default Login;