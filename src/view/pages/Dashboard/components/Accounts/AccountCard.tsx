import { cn, formatCurrency } from "../../../../../app/utils";
import { BankAccountTypeIcon } from "../../../../icons/BankAccountTypeIcon";
import { useDashboardContext } from "../DashboardContext/useDashboardContext";

interface AccountCardProps {
    color: string;
    name: string;
    balance: number;
    type: "CASH" | "CHECKING" | "INVESTMENT";
}

export function AccountCard({ balance, color, name, type }: AccountCardProps) {
    const { areValuesVisible } = useDashboardContext()
    return (
        <div
            className="bg-white p-4 rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
            style={{ borderColor: color }}
        >
            <div>
                <BankAccountTypeIcon type={type} />
                <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
                    {name}
                </span>
            </div>
            <div>
                <span className={cn("text-gray-800 font-medium tracking-[-0.5px] block", !areValuesVisible ? 'blur-sm' : 'blur-none')}
                >
                    {formatCurrency(balance)}
                </span>
                <small className="text-gray-600 text-sm">Saldo atual</small>
            </div>
        </div>
    );
}
