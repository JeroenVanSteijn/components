var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { FullWidthContainer, Heading, Paragraph, Container, Spacer, Subtitle } from "../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";
import styled from "styled-components";
var summmationBlockContainerResponsiveCSS = function () {
    var columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({ xs: "auto", lg: "1fr 1fr" }));
    var gap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({ xs: 50, xxl: 100 }));
    return columns + gap;
};
var SummationBlockContainer = styled(Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"])), summmationBlockContainerResponsiveCSS);
var StyledTitle = styled(Heading)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-top: 50px;\n\tpadding-left: 20px;\n"], ["\n\tmargin-top: 50px;\n\tpadding-left: 20px;\n"])));
var titleParagraphResponsiveCSS = function () { return responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({
    xs: 50,
    lg: 0,
    xl: 10,
    xxl: 20
})); };
var StyledTitleParagraph = styled(Paragraph)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tpadding-left: 20px;\n\tmargin-top: 10px;\n"], ["\n\t", ";\n\tpadding-left: 20px;\n\tmargin-top: 10px;\n"])), titleParagraphResponsiveCSS);
var summationContainerResponsiveCSS = function () { return responsiveValuesCSS("margin-top", "px", breakpointNameToPx({ xs: 35, lg: 20 })); };
var SummationContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), summationContainerResponsiveCSS);
var LeftColumn = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n"])));
var RightColumn = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n"])));
var styledValuesSpacerResponsiveCSS = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({
    xs: 12,
    md: 16,
    lg: 0,
    xl: 0,
    xxl: 0
}));
var StyledSpacer = styled(Spacer)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", ";\n\twidth: 100%;\n"], ["\n\t", ";\n\twidth: 100%;\n"])), styledValuesSpacerResponsiveCSS);
var SingleSummation = function (_a) {
    var index = _a.index, title = _a.title, text = _a.text, color = _a.color;
    return (React.createElement(SummationContainer, null,
        React.createElement(Subtitle, { text: index + ".", color: color, fontWeight: "bold" }),
        React.createElement(Heading, { type: "h4", text: title, color: color }),
        React.createElement(Paragraph, { text: text, color: color })));
};
var SummationBlock = function (_a) {
    var title = _a.title, titleText = _a.titleText, summationText = _a.summationText, backgroundColor = _a.backgroundColor, _b = _a.textColor, textColor = _b === void 0 ? "black" : _b, image = _a.image;
    return (React.createElement(FullWidthContainer, { background: backgroundColor },
        React.createElement(SummationBlockContainer, null,
            React.createElement(LeftColumn, null,
                React.createElement(StyledSpacer, { color: textColor === "white" ? "white" : "black", bold: true }),
                React.createElement(StyledTitle, { type: "h2", text: title, color: textColor }),
                React.createElement(StyledTitleParagraph, { text: titleText, color: textColor }),
                image),
            React.createElement(RightColumn, null, summationText.map(function (summation, index) {
                return React.createElement(SingleSummation, { key: index, index: index + 1, title: summation.title, text: summation.text, color: textColor });
            })))));
};
export default SummationBlock;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=SummationBlock.js.map