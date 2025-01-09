import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
    name: string;
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name, id, placeholder, ...props }: InputProps, ref) => {
        const inputId = id;
        return (
            <div className="relative">
                <input
                    name={name}
                    id={inputId ?? name}
                    {...props}
                    ref={ref}
                    placeholder=" "
                    className="w-full bg-white rounded-lg pt-4 placeholder-shown:pt-0 border border-gray-500 px-3 h-[52px] text-gray-800  peer focus:border-gray-900 transition-all outline-none"
                />
                <label
                    htmlFor={inputId ?? name}
                    className="absolute text-xs left-[13px] top-2 select-none pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
                >
                    {placeholder}
                </label>
            </div>
        );
    }
);
