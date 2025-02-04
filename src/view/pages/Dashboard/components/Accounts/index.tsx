import "swiper/scss";
import { EyeIcon } from "../../../../icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide, } from "swiper/react";
import { AccountSliderNavigation } from "./AccountSliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn, formatCurrency } from "../../../../../app/utils";
import { Spinner } from "../../../../components";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
    const { accounts, sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility, isLoading } = useAccountsController()

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
                        {!accounts.length && (
                            <>
                                <div
                                    className=" mb-4"
                                    slot="container-start"
                                >
                                    <strong className="text-white tracking-[-1px] text-lg font-bold">
                                        Minhas contas
                                    </strong>
                                </div>
                                <button className="md-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white">
                                    <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                                        <PlusIcon className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium tracking-[-0.5px] block w-28 text-center">Cadastre uma nova conta</span>
                                </button>
                            </>
                        )}
                        {!!accounts.length && (
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
                                    </div>
                                    <AccountSliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
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
                        )}
                    </div>
                </>)
            }
        </div >
    );
}
