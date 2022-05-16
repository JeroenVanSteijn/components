import { FunctionComponent } from "react";
import { IconType } from "../../icons";
import { WithStyle } from "../../types/utils";
interface SocialButtonProps {
    Icon: FunctionComponent<IconType>;
    link?: string;
    solid?: boolean;
    mail?: boolean;
}
declare const SocialButton: ({ Icon, link, solid, mail, className }: WithStyle<SocialButtonProps>) => JSX.Element;
export default SocialButton;
