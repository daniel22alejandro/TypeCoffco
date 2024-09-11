import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
type MyButtonProps = {
  children: ReactNode;
  color: String;
};
const Mybutton = ({ children, color }: MyButtonProps) => {
  return (
    <div>
      <Button className={`bg-${color}`}>{children}</Button>
    </div>
  );
};

export default Mybutton;
