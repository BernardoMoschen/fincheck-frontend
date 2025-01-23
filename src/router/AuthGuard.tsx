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
        if (!signedIn && isPrivate) {
            navigate("/login", { replace: true });
            console.log("firstTime");
        }

        if (signedIn && isPrivate) {
            console.log("lastTime:");
            navigate("/", { replace: true });
        }
    }, [isPrivate, navigate, signedIn]);

    return <Outlet />;
}
