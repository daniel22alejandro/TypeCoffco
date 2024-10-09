import Logosímbolo from "@/components/atomos/LogoSimbolo";
import FooterMoleculas from "@/components/moleculas/footer/FooterMoleculas";
import LoginFormulario from "@/components/moleculas/login/LoginFormulario";

const LoginPlantilla = () => {
  return (
    <div className="min-w-full flex flex-col min-h-screen bg-gray-100">
      <header className=" text-white p-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Logosímbolo url="/logo-sena-verde.jpg" />
          <h1 className="text-2xl font-sans text-black  ">Bienvenido a Coffco</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-md p-8  rounded-lg shadow-xl border border-gray-200">
          <div className="">
            <Logosímbolo url="/logo-tic.png" />
          </div>
          <LoginFormulario />
        </div>
      </main>


      <FooterMoleculas />


    </div>
  );
};

export default LoginPlantilla;
