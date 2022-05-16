/// <reference types="react" />
import { ThemeColors } from "../../theme";
import { WithStyle } from "../../types/utils";
declare type CommunicationsBlockProps = {
    color?: ThemeColors;
};
declare const CommunicationBlock: ({ color, className }: WithStyle<CommunicationsBlockProps>) => JSX.Element;
export default CommunicationBlock;
