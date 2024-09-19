interface Props{
  url: string
}
const Logosímbolo = ({url}:Props) => {
  return (
    <div className={`w-[85px] h-[85px] bg-cover bg-center bg-[url('${url}')]`}></div>
  );
};

export default Logosímbolo;
