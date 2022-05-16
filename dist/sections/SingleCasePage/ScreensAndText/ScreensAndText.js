var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Heading, LaptopScreen, Paragraph, PhoneScreen } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS, useWindowSize } from "../../../helpers";
import { theme } from "../../../theme";
var GridContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \tdisplay: grid;\n  \tgrid-template-columns: 1fr;\n\tmax-width: 800px;\n"], ["\n  \tdisplay: grid;\n  \tgrid-template-columns: 1fr;\n\tmax-width: 800px;\n"])));
var ImageContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  \tjustify-self: center;\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 40px;\n"], ["\n  \tjustify-self: center;\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 40px;\n"])));
var textContainerResponsiveStyling = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
    md: "2fr 3fr"
}));
var TextContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n  \tdisplay: grid;\n\tmargin-top: 60px;\n"], ["\n\t", ";\n  \tdisplay: grid;\n\tmargin-top: 60px;\n"])), textContainerResponsiveStyling);
var StyledHeading = styled(Heading)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmargin-right: 30px\n"], ["\n\tmargin-right: 30px\n"])));
var ScreensAndText = function (_a) {
    var title = _a.title, text = _a.text, screenOne = _a.screenOne, screenTwo = _a.screenTwo, className = _a.className;
    var device = useWindowSize();
    var ScreenImages = function () {
        if (!screenTwo) {
            if (!device.width || (theme.breakpoints.md && device.width > theme.breakpoints.md)) {
                return (React.createElement(ImageContainer, null,
                    React.createElement(LaptopScreen, { image: screenOne, alt: "app", height: 400 })));
            }
            if (!device.width || (theme.breakpoints.sm && device.width > theme.breakpoints.sm)) {
                return (React.createElement(ImageContainer, null,
                    React.createElement(LaptopScreen, { image: screenOne, alt: "app", height: 300 })));
            }
            return (React.createElement(ImageContainer, null,
                React.createElement(LaptopScreen, { image: screenOne, alt: "app", height: 200 })));
        }
        if (screenTwo) {
            if (!device.width || (theme.breakpoints.md && device.width > theme.breakpoints.md)) {
                return (React.createElement(ImageContainer, null,
                    React.createElement(PhoneScreen, { image: screenOne, alt: "app", height: 480 }),
                    React.createElement(PhoneScreen, { image: screenTwo, alt: "app", height: 480 })));
            }
            if (!device.width || (theme.breakpoints.sm && device.width > theme.breakpoints.sm)) {
                return (React.createElement(ImageContainer, null,
                    React.createElement(PhoneScreen, { image: screenOne, alt: "app", height: 400 }),
                    React.createElement(PhoneScreen, { image: screenTwo, alt: "app", height: 400 })));
            }
            return (React.createElement(ImageContainer, null,
                React.createElement(PhoneScreen, { image: screenOne, alt: "app", height: 290 }),
                React.createElement(PhoneScreen, { image: screenTwo, alt: "app", height: 290 })));
        }
        return null;
    };
    return (React.createElement(GridContainer, { className: className },
        React.createElement(ScreenImages, null),
        React.createElement(TextContainer, null,
            React.createElement(StyledHeading, { type: "h3", text: title }),
            React.createElement(Paragraph, { text: text }))));
};
export default ScreensAndText;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ScreensAndText.js.map