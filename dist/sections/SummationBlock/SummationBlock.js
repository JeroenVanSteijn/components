var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { FullWidthContainer, Heading, Paragraph, Spacer, Subtitle } from "../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";
import styled from "styled-components";
var fullContainerResponsiveCSS = function () {
    var display = responsiveValuesCSS("display", "", breakpointNameToPx({
        xs: "none",
        lg: "flex"
    }));
    return display;
};
var Container = styled(FullWidthContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\t&:before{\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tbottom: 200px;\n\t\tleft: 0;\n\t\tbackground: url(", ") no-repeat left center;\n\t\twidth: 500px;\n\t\theight: 500px;\n\t\tz-index: -1;\n\t\t", ";\n\t}\n"], ["\n\tposition: relative;\n\t&:before{\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tbottom: 200px;\n\t\tleft: 0;\n\t\tbackground: url(", ") no-repeat left center;\n\t\twidth: 500px;\n\t\theight: 500px;\n\t\tz-index: -1;\n\t\t", ";\n\t}\n"])), "/images/case-qoute-portal.svg", fullContainerResponsiveCSS);
var summmationBlockContainerResponsiveCSS = function () {
    var columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({ xs: "1fr", md: "1fr 1fr" }));
    var gap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({ xs: 50, xxl: 100 }));
    return columns + gap;
};
var SummationBlockContainer = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n\t&:before {\n\t\tbackground: unset;\n\t}\n"], ["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n\t&:before {\n\t\tbackground: unset;\n\t}\n"])), summmationBlockContainerResponsiveCSS);
var StyledTitle = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmargin-top: 50px;\n"], ["\n\tmargin-top: 50px;\n"])));
var titleParagraphResponsiveCSS = function () { return responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({
    xs: 20,
    lg: 0,
    xl: 10,
    xxl: 20
})); };
var StyledTitleParagraph = styled(Paragraph)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n\tmargin-top: 10px;\n"], ["\n\t", ";\n\tmargin-top: 10px;\n"])), titleParagraphResponsiveCSS);
var summationContainerResponsiveCSS = function () { return responsiveValuesCSS("margin-top", "px", breakpointNameToPx({ xs: 35, lg: 20 })); };
var SummationContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), summationContainerResponsiveCSS);
var LeftColumn = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n"])));
var RightColumn = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n"])));
var StyledSpacer = styled(Spacer)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tmargin-left: -15px;\n\twidth: 100%;\n"], ["\n\tmargin-left: -15px;\n\twidth: 100%;\n"])));
var SingleSummation = function (_a) {
    var index = _a.index, title = _a.title, text = _a.text, color = _a.color;
    return (React.createElement(SummationContainer, null,
        React.createElement(Subtitle, { text: index + ".", color: color, fontWeight: "bold" }),
        React.createElement(Heading, { type: "h4", text: title, color: color }),
        React.createElement(Paragraph, { text: text, color: color })));
};
var SummationBlock = function (_a) {
    var title = _a.title, titleText = _a.titleText, summationText = _a.summationText, backgroundColor = _a.backgroundColor, _b = _a.textColor, textColor = _b === void 0 ? "black" : _b, image = _a.image;
    return (React.createElement(Container, { background: backgroundColor },
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=SummationBlock.js.map