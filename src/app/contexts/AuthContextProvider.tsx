import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../services/usersService";
import toast from "react-hot-toast";
import { LaunchScreen } from "../../view/components";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [signedIn, setSignedIn] = useState<boolean>(() => {
        const storedAccessToken = localStorage.getItem(
            localStorageKeys.ACCESS_TOKEN
        );
        return !!storedAccessToken;
    });

    const { data, isError, isFetching, isSuccess } = useQuery({
        queryKey: ["users", "me"],
        queryFn: () => usersService.me(),
        enabled: signedIn,
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
    });

    const signIn = useCallback((accessToken: string) => {
        localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

        setSignedIn(true);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
        setSignedIn(false);
    }, []);

    useEffect(() => {
        if (isError) {
            signOut();
            toast.error("Sua sessão expirou");
        }
    }, [isError, signOut]);

    return (
        <AuthContext.Provider
            value={{
                signedIn: isSuccess && signedIn,
                signIn,
                signOut,
            }}
        >
            <LaunchScreen isLoading={isFetching} />
            <h1>{data?.email}</h1>
            {!isFetching && children}
        </AuthContext.Provider>
    );
}
