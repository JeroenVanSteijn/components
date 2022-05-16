var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Heading } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import Image from "next/image";
var styledContainerResponsiveCSS = function () {
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        md: "1fr 2fr"
    }));
    var padding = responsiveValuesCSS("padding", "", breakpointNameToPx({
        xs: "60px 0",
        lg: "90px 0",
        xl: "120px 0",
        xxl: "150px 0"
    }));
    return gridColumns + padding;
};
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tpadding: 60px 0;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tpadding: 60px 0;\n"])), styledContainerResponsiveCSS);
var quoteTextResponsiveCSS = responsiveValuesCSS("max-width", "px", breakpointNameToPx({
    xs: 400,
    sm: 500,
    xl: 700
}));
var imageContainerResponsiveCSS = responsiveValuesCSS("display", "", breakpointNameToPx({
    xs: "none",
    md: "block"
}));
var ImageContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), imageContainerResponsiveCSS);
var QuoteText = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\t\n\ttext-align: center;\n\tplace-self: center;\n"], ["\n\t", ";\n\t\n\ttext-align: center;\n\tplace-self: center;\n"])), quoteTextResponsiveCSS);
var CaseQuote = function (_a) {
    var text = _a.text;
    return (React.createElement(StyledContainer, null,
        React.createElement(ImageContainer, null,
            React.createElement(Image, { src: "/images/case-quote-portal.svg", alt: "profile picture", height: 500, width: 540 })),
        React.createElement(QuoteText, { type: "h2", text: "\"" + text + "\"" })));
};
export default CaseQuote;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CaseQuote.js.map