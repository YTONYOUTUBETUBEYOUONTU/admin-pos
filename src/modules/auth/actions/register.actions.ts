import { tesloApi } from "@/api/tesloApi";
import type { User } from "../interfaces/user.interface";
import type { AuthResponse } from "../interfaces/auth.response";
import { isAxiosError } from "axios";

interface RegisterError {
  ok: false;
  error: string;
}

interface RegisterSuccess {
  ok: true;
  user: User;
  token: string;
}

export const registerAction = async (
  fullName: string,
  email: string,
  password: string
): Promise<RegisterError | RegisterSuccess> => {
  try {
    console.log("Intentando registrar con:", { fullName, email, password });

    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error: any) {
    console.log("Error en registerAction:", error.response?.data);
    return {
      ok: false,
      error: error.response?.data?.message || "Error al registrar el usuario",
    };
  }
};
