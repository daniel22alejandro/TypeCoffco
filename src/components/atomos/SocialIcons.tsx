import { SocialIcon } from "react-social-icons";

interface Props {
    url: string;
    bgColor: string;
    fgColor: string;
    iconSize: string;
}
const SocialIcons = ({ url, bgColor, fgColor, iconSize }: Props) => {
    return (
        <div>
            <SocialIcon bgColor={bgColor} fgColor={fgColor} url={url} style={{ width: iconSize, height: iconSize }} />
        </div>
    );
}

export default SocialIcons