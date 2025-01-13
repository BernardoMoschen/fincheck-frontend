import { httpClient } from "../httpClient";

interface SignupParams {
    name: string;
    email: string;
    password: string;
}

interface SignupResponse {
    accessToken: string;
}

const signup = async (params: SignupParams) => {
    const { data } = await httpClient.post<SignupResponse>(
        "/auth/sign-up",
        params
    );
    return data;
};

export { signup };
