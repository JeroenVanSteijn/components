/// <reference types="react" />
import { WithStyle } from "../../types/utils";
declare type SpacerColor = "black" | "white";
interface SpacerProps {
    color?: SpacerColor;
    bold?: boolean;
    reverse?: boolean;
}
declare const Spacer: ({ color, className, bold, reverse }: WithStyle<SpacerProps>) => JSX.Element;
export default Spacer;
