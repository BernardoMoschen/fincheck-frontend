import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";
import { useEffect } from "react";

interface AuthGuardProps {
    isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const { signedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(signedIn);
        console.log(signedIn && isPrivate);
        if (!signedIn && isPrivate) {
            navigate("/login", { replace: true });
        }

        if (signedIn && !isPrivate) {
            navigate("/dashboard", { replace: true });
        }
    }, [isPrivate, navigate, signedIn]);

    return <Outlet />;
}
