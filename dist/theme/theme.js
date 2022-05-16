var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { breakpoints } from "./layout";
import layout from "./layout";
import typography from "./typography";
var colors = {
    // Brand
    colorBrand1: "#295D59",
    colorBrand2: "#DFE4E1",
    colorBrand3: "#093632",
    colorBrand4: "#B791C4",
    // Basic colors
    black: "#1B1B1B",
    white: "#FFFFFF",
    lightGray: "#F6F9F6",
    // Sub-colors
    info: "#0B71A1",
    infoLight: "#D3F3FD",
    warning: "#FFBC2C",
    warningLight: "#FCF8DA",
    error: "#F02B41",
    errorLight: "#FFDDE2",
    success: "#39870C",
    successLight: "#DCE8D1",
};
var buttons = {
    primary: {
        background: colors.colorBrand4,
        color: colors.white,
        hoverBackground: colors.black,
        hoverColor: colors.white,
    },
    secondary: {
        background: colors.colorBrand3,
        color: colors.white,
        hoverBackground: colors.black,
        hoverColor: colors.white,
    }
};
var boxes = {
    darkGreen: {
        bgColor: colors.white,
        shadowColor: colors.colorBrand1,
        shadowColorHover: colors.black,
    },
    lightGreen: {
        bgColor: colors.white,
        shadowColor: colors.colorBrand2,
        shadowColorHover: colors.black,
    },
    purple: {
        bgColor: colors.white,
        shadowColor: colors.colorBrand4,
        shadowColorHover: colors.black,
    }
};
var circles = {
    top: "top: -3px; right: -6px;",
    bottom: "bottom: -6px; right: -6px;"
};
var theme = {
    colors: __assign(__assign({}, colors), { buttons: buttons, boxes: boxes }),
    breakpoints: breakpoints,
    layout: layout,
    typography: typography,
    shadows: {
        circles: circles
    }
};
export default theme;
//# sourceMappingURL=theme.js.map