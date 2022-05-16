/// <reference types="react" />
import { IconComponent } from "../../icons";
import { WithStyle } from "../../types/utils";
declare type IconSummaryBlockProps = {
    Icon: IconComponent;
    title: string;
    paragraph?: string;
    list?: string[];
};
declare const IconSummaryBlock: ({ Icon, list, title, paragraph, className }: WithStyle<IconSummaryBlockProps>) => JSX.Element;
export default IconSummaryBlock;
