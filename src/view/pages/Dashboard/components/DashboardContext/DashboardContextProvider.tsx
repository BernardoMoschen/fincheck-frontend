import { ReactNode, useCallback, useState } from "react"
import { DashboardContext } from "./DashboardContext"

export function DashboardProvider({ children }: { children: ReactNode }) {
    const [areValuesVisible, setAreValuesVisible] = useState(true)

    const toggleValuesVisibility = useCallback(() => {
        setAreValuesVisible(prevState => !prevState)
    }, [])

    return (
        <DashboardContext.Provider value={{
            areValuesVisible,
            toggleValuesVisibility
        }}>
            {children}
        </DashboardContext.Provider>
    )
}
