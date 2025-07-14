
import { ReactElement } from "react";



interface ButtonInterface {
    title: string | ReactElement;
    size: "sm" | "md" | "lg";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
}

const sizeStyles = {
    "sm": "px-2 py-1 text-sm rounded-sm",
    "md": "px-4 py-2 text-md rounded-md",
    "lg": "px-8 py-4 text-xl rounded-lg",
}

const variantStyles = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-300 text-blue-600"
}
export function Button(props: ButtonInterface) {

    return <button className={sizeStyles[props.size] +  " " +  variantStyles[props.variant]}>
        <div className="flex">
        {props.startIcon}
        <div className="pl-4 pr-4">
        {props.title}
        </div>
        {props.endIcon}

        </div>
    </button>
}