import { Link } from "react-router-dom";
import { Button, Input } from "../../components";

export default function Register() {
    return (
        <div>
            <header className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold tracking-[-1px]">
                    Crie sua conta
                </h1>
                <p className="space-x-2">
                    <span className="text-gray-700 tracking-[-0.5px]">
                        Já possui uma conta?
                    </span>
                    <Link
                        to="/login"
                        className="text-teal-900 font-medium tracking-[-0.5px]"
                    >
                        Fazer login
                    </Link>
                </p>
            </header>
            <form className="mt-[60px] flex flex-col gap-4">
                <Input type="text" name="Nome" placeholder="Nome" />
                <Input type="email" name="Email" placeholder="Email" />
                <Input type="password" name="Password" placeholder="Senha" />
                <Button type="submit" className="mt-2">
                    Criar conta
                </Button>
            </form>
        </div>
    );
}
