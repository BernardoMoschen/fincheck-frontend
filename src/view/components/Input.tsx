import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
    name: string;
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name, id, placeholder, error, ...props }: InputProps, ref) => {
        const inputId = id;

        return (
            <div className="relative">
                <input
                    name={name}
                    id={inputId ?? name}
                    {...props}
                    ref={ref}
                    placeholder=" "
                    className={cn(
                        "w-full bg-white rounded-lg pt-4 placeholder-shown:pt-0 border border-gray-500 px-3 h-[52px] text-gray-800  peer focus:border-gray-900 transition-all outline-none",
                        error && "border-red-900 focus:border-red-900"
                    )}
                />
                <label
                    htmlFor={inputId ?? name}
                    className="absolute text-xs left-[13px] top-2 select-none pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
                >
                    {placeholder}
                </label>
                {error && (
                    <div className="flex gap-2 items-center mt-2 text-red-900">
                        <CrossCircledIcon />
                        <span className=" text-xs">{error}</span>
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

