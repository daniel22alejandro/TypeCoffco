import { Input } from "@nextui-org/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
type Props = {
  type: string;
  placeholder: string;
  name: any;
  register: UseFormRegister<any>;
  errors: FieldErrors;

};

const InputAtomo = ({ type, placeholder, name, errors, register }: Props) => {
  return (
    <>
      <Input type={type}
        {...register(name, {
          required: {
            value: true,
            message: `${name} es obligatorio`,
          },
        })}
        label={placeholder}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message as string}</p>}
    </>
  );
};

export default InputAtomo;
  