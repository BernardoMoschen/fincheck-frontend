import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { httpClient } from "../../../services/httpClient";

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
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        await httpClient.post("/auth/sign-in", data);
    });

    return {
        handleSubmit,
        register,
        errors,
    };
}
