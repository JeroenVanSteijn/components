var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";
var StyledParagraph = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n\tline-height: ", ";\n\tletter-spacing: 1.15px;\n\tcolor: ", ";\n\tmargin-bottom: 24px;\n\tfont-weight: ", ";\n"], ["\n    font-family: ", ";\n    font-size: ", ";\n\tline-height: ", ";\n\tletter-spacing: 1.15px;\n\tcolor: ", ";\n\tmargin-bottom: 24px;\n\tfont-weight: ", ";\n"])), theme.typography.paragraph.font, function (props) { return props.size ? theme.typography.paragraph.sizes[props.size] : theme.typography.paragraph.sizes.normal; }, theme.typography.paragraph.lineHeight, function (props) { return props.color ? theme.colors[props.color] : theme.colors.black; }, function (props) { return props.fontWeight ? theme.typography.paragraph.weights[props.fontWeight] : theme.typography.paragraph.weights.normal; });
export var Paragraph = function (_a) {
    var text = _a.text, color = _a.color, className = _a.className, onClick = _a.onClick, fontWeight = _a.fontWeight, size = _a.size;
    return (React.createElement(StyledParagraph, { className: className, color: color, onClick: onClick, size: size, fontWeight: fontWeight }, text));
};
export var Heading = function (_a) {
    var type = _a.type, text = _a.text, color = _a.color, className = _a.className;
    var Element = lookup[type];
    //@ts-ignore
    return React.createElement(Element, { className: className, color: color }, text);
};
var h1FontSizes = responsiveValuesCSS("font-size", "em", breakpointNameToPx(theme.typography.heading.sizes.h1));
var h2FontSizes = responsiveValuesCSS("font-size", "em", breakpointNameToPx(theme.typography.heading.sizes.h2));
var H1 = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tfont-family: ", ";\n\tmargin: ", ";\n\tcolor: ", ";\n"], ["\n\t", ";\n\tfont-family: ", ";\n\tmargin: ", ";\n\tcolor: ", ";\n"])), h1FontSizes, theme.typography.heading.font, theme.typography.heading.margins, function (props) { return props.color ? theme.colors[props.color] : theme.colors.black; });
var H2 = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tfont-family: ", ";\n\tmargin: ", ";\n\tcolor: ", "\n"], ["\n\t", ";\n\tfont-family: ", ";\n\tmargin: ", ";\n\tcolor: ", "\n"])), h2FontSizes, theme.typography.heading.font, theme.typography.heading.margins, function (props) { return props.color ? theme.colors[props.color] : theme.colors.black; });
var H3 = styled.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin: ", ";\n\tline-height: ", ";\n"], ["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin: ", ";\n\tline-height: ", ";\n"])), theme.typography.heading.font, theme.typography.heading.sizes.h3, theme.typography.heading.margins, theme.typography.heading.lineHeights.h3);
var H4 = styled.h4(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin: ", ";\n\tline-height: ", ";\n\tcolor: ", "\n"], ["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin: ", ";\n\tline-height: ", ";\n\tcolor: ", "\n"])), theme.typography.heading.font, theme.typography.heading.sizes.h4, theme.typography.heading.margins, theme.typography.heading.lineHeights.h4, function (props) { return props.color ? theme.colors[props.color] : theme.colors.black; });
var H5 = styled.h5(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin: ", ";\n\tline-height: ", ";\n"], ["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin: ", ";\n\tline-height: ", ";\n"])), theme.typography.heading.font, theme.typography.heading.sizes.h5, theme.typography.heading.margins, theme.typography.heading.lineHeights.h5);
var lookup = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
};
var StyledSubtitle = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin-bottom: 0;\n\tcolor: ", ";\n\tfont-weight: ", ";\n"], ["\n\tfont-family: ", ";\n\tfont-size: ", ";\n\tmargin-bottom: 0;\n\tcolor: ", ";\n\tfont-weight: ", ";\n"])), theme.typography.paragraph, theme.typography.heading.sizes.subtitle, function (props) { return props.color ? theme.colors[props.color] : theme.colors.black; }, function (props) { return props.fontWeight ? theme.typography.paragraph.weights[props.fontWeight] : theme.typography.paragraph.weights.normal; });
export var Subtitle = function (_a) {
    var text = _a.text, color = _a.color, fontWeight = _a.fontWeight, className = _a.className;
    return (React.createElement(StyledSubtitle, { className: className, color: color, fontWeight: fontWeight }, text));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Typography.js.map