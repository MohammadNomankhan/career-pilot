import { Github } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router";
import Header from "./Header";

const AuthForm = ({ isSignUp = false, children }) => {
    return (
        <div className="min-h-screen bg-[#0f0e17] flex justify-center">
            <div className="w-full max-w-lg">
                <Header />
                <div className="flex flex-col gap-10 px-4 md:px-8 pb-8">
                    <div className="text-center">
                        <h2 className="text-[#fffffe] font-bold text-3xl mb-3">{isSignUp ? "Create a new account" : "Sign in to your account"}</h2>
                        {isSignUp ? <p className="text-[#a7a9be]">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary hover:underline">
                                Sign in
                            </Link>
                        </p> : <p className="text-[#a7a9be]">
                            Don't have an account?{" "}
                            <Link to="/sign-up" className="text-primary hover:underline">
                                Sign up for free
                            </Link>
                        </p>}
                    </div>
                    <Button btnText="Continue with GitHub" btnType="ghost" btnIcon={<Github size={20} />} className="flex items-center justify-center gap-3 rounded-lg" />
                    <div className="relative w-full h-[1px] bg-slate-700">
                        <p className="absolute -translate-y-1/2 bg-[#0f0e17] left-1/2 -translate-x-1/2 text-slate-400 text-sm px-4">
                            Or continue with
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>

    );
};

export default AuthForm;
