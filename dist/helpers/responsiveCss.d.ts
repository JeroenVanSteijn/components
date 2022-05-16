import { BreakpointKeyValue } from "../theme";
export declare const responsiveValuesCSS: (cssProp: string | undefined, cssPropUnits: string | undefined, values: {
    [x: number]: string | number;
}[], mediaQueryType?: string) => string;
export declare const breakpointNameToPx: (input: BreakpointKeyValue) => {
    [x: number]: string | number;
}[];
export type { BreakpointKeyValue };
