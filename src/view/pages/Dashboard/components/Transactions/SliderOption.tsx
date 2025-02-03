import { useSwiper } from "swiper/react"
import { cn } from "../../../../../app/utils"

interface SliderOptionProps {
    isActive: boolean,
    month: string
    index: number
}

export function SliderOption({ isActive, index, month }: SliderOptionProps) {
    const swiper = useSwiper()

    return (
        <button
            onClick={() => swiper.slideTo(index)}
            className={cn("w-full rounded-full h-12",
                isActive ? 'bg-white' : 'bg-transparent')
            }>
            <span className="text-sm text-gray-900 tracking-[-0.5px] font-medium">
                {month}
            </span>
        </button>
    )
}
