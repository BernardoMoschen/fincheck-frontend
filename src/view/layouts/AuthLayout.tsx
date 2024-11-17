import illustration1 from "../../assets/Illustration1.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            <div className="w-1/2 h-full"></div>
            <div className="bg-blue-500 w-1/2 h-full flex justify-center items-center p-8">
                <img
                    src={illustration1}
                    className="object-cover w-full h-full max-w-[656px] max-h[960px] select-none rounded-[32px]"
                />
                <div className="p-10 max-w-[656px] bottom-8 bg-white absolute rounded-b-[32px]">
                    <Logo className="text-teal-900 h-8" />
                    <p className="text-gray-700 font-medium text-xl mt-6">
                        Gerencie suas finanças pessoais de uma forma simples com
                        o fincheck, e o melhor, totalmente de graça!
                    </p>
                </div>
            </div>
        </div>
    );
}
