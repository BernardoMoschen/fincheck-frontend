import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { SigninParams } from "../../../services/authService/signin";
import toast from "react-hot-toast";

const schema = z.object({
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

export function useLoginController() {
    const {
        handleSubmit: hookFormSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (data: SigninParams) => {
            return await authService.signin(data);
        },
    });

    const handleSubmit = hookFormSubmit(async (data) => {
        try {
            await mutateAsync(data);
        } catch {
            toast.error("Credentials inválidas");
        }
    });

    return {
        handleSubmit,
        register,
        errors,
        isPending,
    };
}
