import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks";
import { useDashboardContext } from "../DashboardContext/useDashboardContext";

export function useAccountsController() {
    const { windowWidth } = useWindowWidth();

    const [sliderState, setSliderState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    const { areValuesVisible, toggleValuesVisibility } = useDashboardContext();

    return {
        sliderState,
        setSliderState,
        windowWidth,
        areValuesVisible,
        toggleValuesVisibility,
        isLoading: false,
        accounts: [],
    };
}
