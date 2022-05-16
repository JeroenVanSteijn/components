var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Container, Heading, Paragraph, Subtitle } from "../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";
var deliverablesContainerResponsiveCSS = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
    xs: "1fr",
    md: "1fr 1fr 1fr"
}));
var DeliverablesContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tjustify-content: start;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tjustify-content: start;\n"])), deliverablesContainerResponsiveCSS);
var DeliverablesTitle = styled(Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-bottom: 0;\n"], ["\n\tmargin-bottom: 0;\n"])));
var styledImageResponsiveCSS = function (reverse) {
    var justify = responsiveValuesCSS("justify-self", "", breakpointNameToPx({
        xs: "center",
        lg: "" + (reverse ? "start" : "end")
    }));
    var width = responsiveValuesCSS("max-width", "px", breakpointNameToPx({
        xs: 350,
        sm: 600
    }));
    return justify + width;
};
var StyledImage = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tgrid-area: image;\n\theight: 300px;\n"], ["\n\t", ";\n\tgrid-area: image;\n\theight: 300px;\n"])), function (props) { return styledImageResponsiveCSS(props.reverse); });
var TextContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tgrid-area: text;\n"], ["\n\tgrid-area: text;\n"])));
var serviceContainerResponsiveCSS = function (reverse, imageBackground) {
    var areas = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx({
        xs: "\"text\"" +
            "\"image\"",
        lg: "" + (reverse ? "\"image text\"" : "\"text image\"")
    }));
    var columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "1fr 1fr"
    }));
    var background = "";
    if (imageBackground) {
        background = responsiveValuesCSS("background", "", breakpointNameToPx({
            lg: "url(" + imageBackground + ") no-repeat center " + (reverse ? "left" : "right")
        }));
    }
    return areas + columns + background;
};
var ServiceContainer = styled(Container)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: 3em;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: 3em;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"])), function (props) { return serviceContainerResponsiveCSS(props.reverse, props.imageBackground); });
var Service = function (_a) {
    var title = _a.title, type = _a.type, description = _a.description, deliverables = _a.deliverables, image = _a.image, reverse = _a.reverse, imageBackground = _a.imageBackground;
    return (React.createElement(ServiceContainer, { reverse: reverse, imageBackground: imageBackground },
        React.createElement(TextContainer, null,
            React.createElement(Subtitle, { text: type }),
            React.createElement(Heading, { type: "h2", text: title }),
            React.createElement(Paragraph, { text: description }),
            React.createElement(DeliverablesTitle, { text: "Deliverables", fontWeight: "bold" }),
            React.createElement(DeliverablesContainer, null, deliverables.map(function (deliverable, index) { return React.createElement(Paragraph, { key: index, text: deliverable }); }))),
        React.createElement(StyledImage, { reverse: reverse, src: image, alt: type })));
};
export default Service;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Service.js.map