export declare type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export declare type BreakpointKeyValue = {
    [K in BreakpointName]?: number | string;
};
declare type AllBreakPointKeyValues = {
    [K in BreakpointName]: number | string;
};
declare const layout: {
    gutter: number;
    container: {
        margin: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
        sizes: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
        spacing: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
    };
};
export declare const breakpoints: AllBreakPointKeyValues;
export default layout;
