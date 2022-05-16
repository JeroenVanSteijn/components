/// <reference types="react" />
import { ButtonProps } from "../../types/Button.types";
import { WithStyle } from "../../types/utils";
declare const Button: ({ text, type, icon, onClick, className }: WithStyle<ButtonProps>) => JSX.Element;
export default Button;
