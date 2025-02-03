import { ChevronDownIcon, } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../icons/TransactionsIcon";
import { FilterIcon } from "../../../../icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";

export function Transactions() {
    return (
        <div className="bg-gray-100 rounded-2xl w-full h-full md:p-10 px-4 py-8">
            <header >
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
                <div className="mt-6">
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
            <div className="">
                Conteúdo
            </div>
        </div >
    );
}
