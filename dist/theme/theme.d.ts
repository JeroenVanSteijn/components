import { ButtonTypeColors } from "../types/Button.types";
import { BoxesTypeColors } from "src/components/UserPictures/UserPicture.types";
declare const theme: {
    colors: {
        buttons: ButtonTypeColors;
        boxes: BoxesTypeColors;
        colorBrand1: string;
        colorBrand2: string;
        colorBrand3: string;
        colorBrand4: string;
        black: string;
        white: string;
        lightGray: string;
        info: string;
        infoLight: string;
        warning: string;
        warningLight: string;
        error: string;
        errorLight: string;
        success: string;
        successLight: string;
    };
    breakpoints: {
        xs: string | number;
        sm: string | number;
        md: string | number;
        lg: string | number;
        xl: string | number;
        xxl: string | number;
    };
    layout: {
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
    typography: {
        baseSize: number;
        heading: {
            font: string;
            sizes: {
                h1: {
                    xs: number;
                    sm: number;
                    md: number;
                    lg: number;
                    xl: number;
                    xxl: number;
                };
                h2: {
                    xs: number;
                    sm: number;
                    md: number;
                    lg: number;
                    xl: number;
                    xxl: number;
                };
                h3: string;
                h4: string;
                h5: string;
                subtitle: string;
            };
            margins: string;
            lineHeights: {
                h3: string;
                h4: string;
                h5: string;
            };
        };
        paragraph: {
            font: string;
            lineHeight: string;
            sizes: {
                small: string;
                normal: string;
                large: string;
            };
            weights: {
                normal: number;
                bold: number;
            };
        };
        monospace: {
            font: string;
            sizes: {
                small: number;
                normal: number;
                large: number;
            };
        };
        button: {
            font: string;
            weight: number;
            sizes: {
                text: number;
                icon: number;
            };
        };
        menu: {
            mobile: number;
        };
    };
    shadows: {
        circles: {
            top: string;
            bottom: string;
        };
    };
};
export default theme;
