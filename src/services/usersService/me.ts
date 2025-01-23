import { httpClient } from "../httpClient";

interface MeResponse {
    name: string;
    email: string;
}

export const me = async () => {
    const { data } = await httpClient.post<MeResponse>("/users/me");
    return data;
};
