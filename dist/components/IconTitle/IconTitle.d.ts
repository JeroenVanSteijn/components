/// <reference types="react" />
import { IconComponent } from "../../icons";
import { ThemeColors } from "../../theme";
declare type IconTitleProps = {
    icon: IconComponent;
    text: string;
    color?: ThemeColors;
    big?: boolean;
};
declare const IconTitle: ({ icon, text, color, big }: IconTitleProps) => JSX.Element;
export default IconTitle;
