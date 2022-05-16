/// <reference types="react" />
import { ThemeColors } from "../../theme";
import { WithStyle } from "../../types/utils";
export declare type FontWeight = "normal" | "bold";
export declare type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5";
export declare type Size = "small" | "normal" | "large";
declare type TypographyProps = {
    text: string;
    color?: ThemeColors;
    onClick?: () => void;
};
interface ParagraphProps extends TypographyProps {
    size?: Size;
    fontWeight?: FontWeight;
}
interface SubtitleProps extends TypographyProps {
    fontWeight?: FontWeight;
}
interface HeadingProps extends TypographyProps {
    type: HeadingType;
}
export declare const Paragraph: ({ text, color, className, onClick, fontWeight, size }: WithStyle<ParagraphProps>) => JSX.Element;
export declare const Heading: ({ type, text, color, className }: WithStyle<HeadingProps>) => JSX.Element;
export declare const Subtitle: ({ text, color, fontWeight, className }: WithStyle<SubtitleProps>) => JSX.Element;
export {};
