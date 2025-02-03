import { EyeIcon } from "../../../../icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/scss";
import { AccountSliderNavigation } from "./AccountSliderNavigation";
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
    const { sliderState, setSliderState } = useAccountsController()

    return (
        <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
            <div>
                <span className="tracking-[-0.5px] text-white block">
                    Saldo total{" "}
                </span>
                <div className="flex items-center gap-2">
                    <strong className="text-2xl tracking-[-1px] text-white">
                        R$ 1000,00
                    </strong>
                    <button className="w-8 h-8 flex items-center justify-center">
                        <EyeIcon open />
                    </button>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-end">
                <div>
                    <Swiper spaceBetween={16} slidesPerView={1.5} onSlideChange={(swp) => setSliderState({
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
        </div>
    );
}
