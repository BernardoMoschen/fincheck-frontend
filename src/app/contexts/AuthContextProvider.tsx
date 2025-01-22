import { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext";
import { localStorageKeys } from "../config/localStorageKeys";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [signedIn, setSignedIn] = useState<boolean>(() => {
        const storedAccessToken = localStorage.getItem(
            localStorageKeys.ACCESS_TOKEN
        );
        return !!storedAccessToken;
    });

    const signIn = useCallback((accessToken: string) => {
        localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
        setSignedIn(true);
    }, []);

    return (
        <AuthContext.Provider value={{ signedIn: signedIn, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
