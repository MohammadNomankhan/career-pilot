import clsx from "clsx";

const Button = ({ isDisabled = false, btnAction, btnText, btnType, btnIcon, handleClick, handleSubmit, className }) => {
    return (
        <button disabled={isDisabled} type={btnAction} className={clsx("w-full rounded-full py-2 disabled:brightness-50 hover:brightness-150", btnType == "filled" ? "bg-primary text-[#fffffe]" : btnType == "outlined" ? "bg-transparent border border-primary text-primary" : "bg-gray-800 hover:bg-gray-600 text-white border border-slate-600", className)}>
            {btnIcon}
            {btnText}
        </button>
    );
}

export default Button;


