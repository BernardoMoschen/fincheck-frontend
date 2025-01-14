import { httpClient } from "../httpClient";

interface SigninParams {
    email: string;
    password: string;
}

interface SigninResponse {
    accessToken: string;
}

const signin = async (params: SigninParams) => {
    const { data } = await httpClient.post<SigninResponse>(
        "/auth/sign-in",
        params
    );
    return data;
};

export { signin };
export type { SigninParams };
