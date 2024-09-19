import InputAtomo from "@/components/atomos/Input"
import Mybutton from "@/components/atomos/Mybutton";

import { useForm, SubmitHandler } from "react-hook-form";
type Inputshook = {
  cedula: string;
  password: string;
};

const LoginFormulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputshook>();
  const onSubmit: SubmitHandler<Inputshook> = (data) => {
    console.log(data)

  }
  return (
    <section className="flex items-center justify-center  bg-gray-100 py-6">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputAtomo
            errors={errors}
            name="cedula"
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
            <Mybutton color="primary">
              Iniciar sesión
            </Mybutton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginFormulario;
