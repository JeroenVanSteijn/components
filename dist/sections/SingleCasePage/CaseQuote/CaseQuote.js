var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Heading } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
var styledContainerResponsiveCSS = function () {
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        md: "1fr 1fr"
    }));
    var padding = responsiveValuesCSS("padding", "", breakpointNameToPx({
        xs: "60px 0",
        lg: "90px 0",
        xl: "120px 0",
        xxl: "150px 0"
    }));
    return gridColumns + padding;
};
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tmargin-left: auto;\n\tpadding: 60px 0;\n"], ["\n\t", ";\n\tmargin-left: auto;\n\tpadding: 60px 0;\n"])), styledContainerResponsiveCSS);
var MainContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: grid;\n\tposition: relative;\n"], ["\n\tdisplay: grid;\n\tposition: relative;\n"])));
var QuoteText = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\ttext-align: center;\n\tplace-self: center;\n"], ["\n\ttext-align: center;\n\tplace-self: center;\n"])));
var CaseQuote = function (_a) {
    var text = _a.text;
    return (React.createElement(MainContainer, null,
        React.createElement(StyledContainer, null,
            React.createElement(QuoteText, { type: "h2", text: "\"" + text + "\"" }))));
};
export default CaseQuote;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CaseQuote.js.map