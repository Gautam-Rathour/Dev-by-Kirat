



import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder },
  ref
) {
  return (
    <div>
      <input ref={ref} placeholder={placeholder} type="text"
        className="px-4 py-2 border border-gray-300 rounded m-2"
      />
    </div>
  );
});
