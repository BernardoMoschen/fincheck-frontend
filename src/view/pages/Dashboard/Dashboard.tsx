import { useAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components";

export default function Dashboard() {
    const { signOut } = useAuth();

    return (
        <div className="bg-red-100 w-full h-full">
            <h1>Dashboard</h1>
            <Button onClick={signOut} className="mt-4">
                Sair
            </Button>
        </div>
    );
}
