import conexionApi from "@/utils/conexionApi";

type Props = {
  numero_documento: String;
  password: string;
};
export const login = async (data: Props) => {
  const getToken = () => {
    return localStorage.getItem("token") || "";
  };
  const token = getToken();

  const api = conexionApi({ token });

  try {
    const response = await api.post("auth/login/", data);
    console.log(response.data.access);
    return response.data.access;
  } catch (error:any) {
    if (error.response && error.response.data && error.response.data.detail) {
        throw new Error(error.response.data.detail);
      } 
  }
};
