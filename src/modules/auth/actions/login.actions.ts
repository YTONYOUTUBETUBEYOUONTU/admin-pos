import { tesloApi } from "@/api/tesloApi";
import type { User } from "../interfaces/user.interface";
import type { AuthResponse } from "../interfaces/auth.response";
import { isAxiosError } from "axios";

interface LoginError {
 ok: false;
 error: string;
};

interface LoginSuccess {
 ok: true;
 user: User;
 token: string;
};

export const loginAction = async (
  email: string,
  password: string,
): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/login", {
       email,
       password,
  });

  return {
    ok: true,
    user: data.user,
    token: data.token,
  };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: "Invalid email or password",
    };
  }
}
