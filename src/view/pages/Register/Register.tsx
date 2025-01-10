import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { useRegisterController } from "./useRegisterController";

export default function Register() {
    const { handleSubmit, register, errors } = useRegisterController();
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
            <form
                className="mt-[60px] flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    {...register("name")}
                    placeholder="Nome"
                    error={errors.name?.message}
                />
                <Input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    error={errors.email?.message}
                />
                <Input
                    type="password"
                    {...register("password")}
                    placeholder="Senha"
                    error={errors.password?.message}
                />
                <Button type="submit" className="mt-2">
                    Criar conta
                </Button>
            </form>
        </div>
    );
}
