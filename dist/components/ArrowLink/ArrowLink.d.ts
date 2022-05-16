/// <reference types="react" />
import { WithStyle } from "../../types/utils";
declare type ArrowLinkProps = {
    onClick?: () => void;
    text: string;
    link?: string;
    color?: "black" | "white";
};
declare const ArrowLink: ({ onClick, text, className, link, color }: WithStyle<ArrowLinkProps>) => JSX.Element;
export default ArrowLink;
