import { httpClient } from "../httpClient";

interface SigninParams {
    email: string;
    password: string;
}

const signin = async (params: SigninParams) => {
    const { data } = await httpClient.post<{ accessToken: string }>(
        "/auth/sign-in",
        params
    );
    return data;
};

export { signin };
