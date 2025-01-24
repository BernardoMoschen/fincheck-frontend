import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../services/usersService";
import { httpClient } from "../../services/httpClient";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [signedIn, setSignedIn] = useState<boolean>(() => {
        const storedAccessToken = localStorage.getItem(
            localStorageKeys.ACCESS_TOKEN
        );
        return !!storedAccessToken;
    });

    const setAccessToken = useCallback((accessToken: string) => {
        httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
    }, []);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem(
            localStorageKeys.ACCESS_TOKEN
        );

        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
    }, [setAccessToken]);

    useQuery({
        queryKey: ["users", "me"],
        queryFn: () => usersService.me(),
        retry: false,
        refetchOnWindowFocus: false,
    });

    const signIn = useCallback(
        (accessToken: string) => {
            localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
            setAccessToken(accessToken);

            setSignedIn(true);
        },
        [setAccessToken]
    );

    const signOut = useCallback(() => {
        localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
        setSignedIn(false);
    }, []);

    return (
        <AuthContext.Provider value={{ signedIn: signedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
