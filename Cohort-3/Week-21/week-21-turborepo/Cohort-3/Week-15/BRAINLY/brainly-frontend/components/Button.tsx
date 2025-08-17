

import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}


const variantClasses = {
    "primary": "bg-purple-500 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex justify-center items-center gap-2 cursor-pointer";



export function Button({variant, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + " " + 
    defaultStyles + `${fullWidth ? " w-full" : ""} ${loading ? "opacity-45" : ""}`} disabled={loading}>
            {startIcon}
            {text}
        </button>
}