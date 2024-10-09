import InputAtomo from "@/components/atomos/Input";
import Mybutton from "@/components/atomos/Mybutton";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/store/api/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type Inputshook = {
  numero_documento: string;
  password: string;
};
0
const LoginFormulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputshook>();
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const useMutationLogin = useMutation({
    mutationFn: login,
    onSuccess: (data: string) => {
      localStorage.setItem("token", data);
      setErrorMessage("");
      navigate("home");
    },
    onError: (error) => {
      console.log("Error:");
      setErrorMessage(error.message);
    },
  });
  const onSubmit: SubmitHandler<Inputshook> = (data) => {
    useMutationLogin.mutate(data);
  };
  return (
    <section className="flex items-center justify-center  bg-gray-100 py-6">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Iniciar sesión
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {ErrorMessage ? <p className="text-red-400">{ErrorMessage}</p> : ""}
          <InputAtomo
            errors={errors}
            name="numero_documento"
            placeholder="Número de cédula"
            register={register}
            type="number"
          />
          <InputAtomo
            errors={errors}
            name="password"
            placeholder="Ingrese su contraseña"
            register={register}
            type="password"
          />
          <div className="w-full flex justify-center">
            <Mybutton color="primary">Iniciar sesión</Mybutton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginFormulario;
