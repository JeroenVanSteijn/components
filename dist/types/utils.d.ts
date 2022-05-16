import { ReactNode } from "react";
export declare type WithChildren<P = Record<string, unknown>> = P & {
    children?: ReactNode;
};
export declare type WithStyle<P = Record<string, unknown>> = P & {
    className?: string;
};
