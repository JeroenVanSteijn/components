/// <reference types="react" />
import { ThemeColors } from "../../theme";
import { WithStyle } from "../../types/utils";
declare type CollapsibleTextProps = {
    title: string;
    description: string;
    color: ThemeColors;
};
declare const CollapsibleText: ({ title, description, color, className }: WithStyle<CollapsibleTextProps>) => JSX.Element;
export default CollapsibleText;
