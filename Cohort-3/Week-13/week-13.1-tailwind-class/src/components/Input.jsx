



const Input = ({
    onClick,
    type,
    placeholder
}) => {
    // clsx, cx
    return <span onClick={onClick} className={`p-4 text-4xl px-2 py-4 text-white cursor-pointer "bg-blue-200"`}>
        <input type={type} placeholder={placeholder} 
        className='bg-blue-200 outline-none rounded-xl '></input>
    </span>
}

export default Input;