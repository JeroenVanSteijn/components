/// <reference types="react" />
import { IconComponent } from "../../icons";
declare type IconTextBlockProps = {
    icon: IconComponent;
    title: string;
    text: string;
};
declare const IconTextBlock: ({ icon, title, text }: IconTextBlockProps) => JSX.Element;
export default IconTextBlock;
