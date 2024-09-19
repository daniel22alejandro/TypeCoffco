import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
type MyButtonProps = {
  children: ReactNode;
  color: String;

};
const Mybutton = ({ children, color }: MyButtonProps) => {
  return (
    <div>
      <Button type={"submit"} className={`bg-${color} text-white`}>{children}</Button>
    </div>
  );
};

export default Mybutton;
