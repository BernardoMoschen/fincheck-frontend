import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../../../services/authService/signup";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z
        .string()
        .nonempty("Email é obrigatório")
        .email("Informe um email válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatório")
        .min(8, "Senha deve ter no mínimo 8 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
    const {
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (data: SignupParams) => {
            return await authService.signup(data);
        },
    });

    const { signIn } = useAuth();
    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            const { accessToken } = await mutateAsync(data);
            signIn(accessToken);
        } catch {
            toast.error("Ocorreu um erro ao tentar criar sua conta");
        }
    });

    return {
        handleSubmit,
        register,
        errors,
        isPending,
    };
}
