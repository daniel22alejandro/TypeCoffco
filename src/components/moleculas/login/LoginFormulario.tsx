import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {};

const LoginFormulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)

  }
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </section>
  );
};

export default LoginFormulario;
