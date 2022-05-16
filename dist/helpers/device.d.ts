import { BreakpointName } from "../theme";
interface WindowSize {
    width?: number;
    height?: number;
}
export declare const useWindowSize: () => WindowSize;
export declare const isWindowDesktop: () => boolean | "" | 0;
export declare const isWindowSizeBiggerThan: (size: BreakpointName) => boolean | "" | 0;
export {};
