import { SocialIcon } from "react-social-icons";

type SocialIconProps = {
  url: string;
  bgColor?: string;
  fgColor?: string;
  iconSize: number;
};

const SocialIconAtom = ({ url, bgColor, fgColor, iconSize }: SocialIconProps) => {
  return (
    <div>
      <SocialIcon
        bgColor={bgColor}
        fgColor={fgColor}
        url={url}
        style={{ width: iconSize, height: iconSize }}
      />
    </div>
  );
};

export default SocialIconAtom;
