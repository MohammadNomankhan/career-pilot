import { EyeClosed, EyeIcon } from "lucide-react";
import { useState } from "react";

const AuthFeild = ({ name, label, type }) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-white font-medium pb-1">
                {label}
            </label>
            <div className="relative">
                <input
                    type={type == "password" ? showPassword ? "text" : "password" : type}
                    required
                    id={name}
                    name={name}
                    className="ring-2 ring-slate-600 w-full px-4 py-2 rounded-md bg-black text-white outline-none focus:ring-2 focus:ring-primary"
                />
                {type == "password" ? <button
                    type="button"
                    className="absolute right-2 top-2 text-white"
                    onClick={() => setShowPassword(prevState => !prevState)}
                >
                    {showPassword ? <EyeIcon /> : <EyeClosed />}
                </button> : null}
            </div>
        </div>
    );
}

export default AuthFeild;