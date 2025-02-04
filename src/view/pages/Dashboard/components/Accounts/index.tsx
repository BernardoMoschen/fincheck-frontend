import "swiper/scss";
import { EyeIcon } from "../../../../icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide, } from "swiper/react";
import { AccountSliderNavigation } from "./AccountSliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn, formatCurrency } from "../../../../../app/utils";
import { Spinner } from "../../../../components";

export function Accounts() {
    const { sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility, isLoading } = useAccountsController()

    return (
        <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
            {isLoading && (
                <div className="h-full flex items-center justify-center">
                    <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
                </div>
            )}
            {!isLoading && (
                <>
                    <div>
                        <span className="tracking-[-0.5px] text-white block">
                            Saldo total{" "}
                        </span>
                        <div className="flex items-center gap-2">
                            <strong className={cn("text-2xl tracking-[-1px] text-white", !areValuesVisible ? 'blur-md' : 'blur-none')}>
                                {formatCurrency(1000)}
                            </strong>
                            <button className="w-8 h-8 flex items-center justify-center"
                                onClick={toggleValuesVisibility}>
                                <EyeIcon open={areValuesVisible} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-end mt-10 md:mt-0">
                        <div>
                            <Swiper spaceBetween={16} slidesPerView={windowWidth < 500 ? 1.1 : 2.1} onSlideChange={(swp) => setSliderState({
                                isBeginning: swp.isBeginning,
                                isEnd: swp.isEnd
                            })} >
                                <div
                                    className="flex items-center justify-between mb-4"
                                    slot="container-start"
                                >
                                    <strong className="text-white tracking-[-1px] text-lg font-bold">
                                        Minhas contas
                                    </strong>
                                    <AccountSliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
                                </div>
                                <SwiperSlide>
                                    <AccountCard
                                        color="#7950F2"
                                        name="Nubank"
                                        balance={1000}
                                        type="CASH"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AccountCard
                                        color="#0f0"
                                        name="XP"
                                        balance={555}
                                        type="INVESTMENT"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <AccountCard
                                        color="#f85"
                                        name="Itaú"
                                        balance={555}
                                        type="INVESTMENT"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </>)}
        </div>
    );
}
