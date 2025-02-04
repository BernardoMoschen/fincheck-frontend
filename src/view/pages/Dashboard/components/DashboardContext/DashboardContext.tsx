import { createContext } from "react"

interface DashboardContextValue {
    areValuesVisible: boolean
    toggleValuesVisibility: VoidFunction
}

export const DashboardContext = createContext({} as DashboardContextValue)
