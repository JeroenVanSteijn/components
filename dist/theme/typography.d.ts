declare const typography: {
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
export default typography;
