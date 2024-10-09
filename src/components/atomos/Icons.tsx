    type IconsProps = {
    img: string;
    className?: string;
    }

    const IconsAtom = ({ img, className = '' }: IconsProps) => {
    return (
        <img src={img} alt="icon" className={`sm:w-5 sm:h-5 ${className}`} />
    );
    };

    export default IconsAtom;
