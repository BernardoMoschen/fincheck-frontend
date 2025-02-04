import { ChevronDownIcon, } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../icons/TransactionsIcon";
import { FilterIcon } from "../../../../icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { cn, formatCurrency } from "../../../../../app/utils";
import { CategoryIcon } from "../../../../icons/categories/CategoryIcon";
import { useTransactionsController } from "./useTransactionsController";
import { Spinner } from "../../../../components";
import emptyStateImage from '../../../../../assets/empty-state.svg'

export function Transactions() {
    const { transactions, areValuesVisible, isLoading } = useTransactionsController()

    return (
        <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
            {isLoading && (
                <div className="h-full flex items-center justify-center">
                    <Spinner className="text-white fill-teal-950/50 w-10 h-10" />
                </div>
            )}
            {!isLoading && (
                <>
                    <header>
                        <div className="flex items-center justify-between">
                            <button className="flex items-center gap-2">
                                <TransactionsIcon />
                                <span className="text-sm text-gray-900 tracking-[-0.5px] font-medium">
                                    Transações
                                </span>
                                <ChevronDownIcon className="text-gray-900" />
                            </button>
                            <button>
                                <FilterIcon />
                            </button>
                        </div>
                        <div className="mt-6 relative">
                            <SliderNavigation />
                            <Swiper slidesPerView={3} centeredSlides>
                                {MONTHS.map((month, index) => (
                                    <SwiperSlide key={month}>
                                        {({ isActive }) => (
                                            <SliderOption index={index} isActive={isActive} month={month} />
                                        )}
                                    </SwiperSlide>))}
                            </Swiper>
                        </div>
                    </header>
                    {!transactions.length && (
                        <div className="flex flex-col items-center justify-center h-full ">
                            <img src={emptyStateImage} alt="Empty State" />
                            <p className="text-gray-700">Não encontramos nenhuma transação</p>
                        </div>
                    )}
                    {!!transactions.length && (
                        <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
                            <div className="rounded-2xl bg-white p-4 flex items-center justify-between gap-4">
                                <div className="flex-1 flex items-center gap-3">
                                    <CategoryIcon type="expense" />
                                    <div>
                                        <strong className="font-bold tracking-[-0.5px]">Almoço</strong>
                                        <span className="text-sm text-gray-600 block">04/04/04</span>
                                    </div>
                                </div>
                                <span className={cn("text-red-800 tracking-[-0.5px] font-medium", !areValuesVisible && 'blur-sm')}>
                                    {formatCurrency(1230)}
                                </span>
                            </div>
                            <div className="rounded-2xl bg-white p-4 flex items-center justify-between gap-4">
                                <div className="flex-1 flex items-center gap-3">
                                    <CategoryIcon type="income" />
                                    <div>
                                        <strong className="font-bold tracking-[-0.5px]">Almoço</strong>
                                        <span className="text-sm text-gray-600 block">04/04/04</span>
                                    </div>
                                </div>
                                <span className={cn("text-green-800 tracking-[-0.5px] font-medium", !areValuesVisible && 'blur-sm')}>
                                    {formatCurrency(1230)}
                                </span>
                            </div>
                        </div>
                    )}
                </>)}
        </div >
    );
}
