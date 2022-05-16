var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Heading, InitialContainer, LaptopScreen, Paragraph, Subtitle } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { DeviceTypes } from "../SingleCasePage.types";
import Image from "next/image";
var TextColumn = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, text = _a.text;
    return (React.createElement(InitialContainer, null,
        React.createElement(Subtitle, { text: subtitle }),
        React.createElement(Heading, { type: "h1", text: title }),
        React.createElement(Paragraph, { text: text })));
};
var imageColumnContainerResponsiveCSS = function () {
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        xs: 70,
        lg: 140,
        xl: 210,
    }));
    var paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({
        xs: 20,
        lg: 40,
        xl: 80,
    }));
    return paddingTop + paddingBottom;
};
var ImageColumnContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tbackground: url(", ") no-repeat right top , ", ";\n\tbackground-size: 80% auto;\n\tdisplay: grid;\n\tgrid-templates-columns: auto;\n\tgrid templates-rows: 1fr auto;\n\talign-items: end;\n"], ["\n\t", ";\n\tbackground: url(", ") no-repeat right top , ", ";\n\tbackground-size: 80% auto;\n\tdisplay: grid;\n\tgrid-templates-columns: auto;\n\tgrid templates-rows: 1fr auto;\n\talign-items: end;\n"])), imageColumnContainerResponsiveCSS, "/images/case-header-line.svg", function (props) { return props.bgColor; });
var logoContainerResponsiveCSS = function () {
    var marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({
        xs: 20,
        lg: 40,
        xxl: 60
    }));
    var marginRight = responsiveValuesCSS("margin-right", "px", breakpointNameToPx({
        xs: 20,
        lg: 40,
        xxl: 60
    }));
    return marginLeft + marginRight;
};
var LogoContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), logoContainerResponsiveCSS);
var ImageColumn = function (_a) {
    var image = _a.image, logo = _a.logo, height = _a.height, width = _a.width, bgColor = _a.bgColor;
    var RenderImage = function () {
        if (image.type === DeviceTypes.laptop)
            return React.createElement(LaptopScreen, { image: "/images/" + image.url, alt: "image of application", height: 210 });
        return React.createElement(Image, { src: "/images/" + image.url, alt: "image of application", width: 246, height: 372 });
    };
    return (React.createElement(ImageColumnContainer, { bgColor: bgColor },
        React.createElement(RenderImage, null),
        React.createElement(LogoContainer, null,
            React.createElement(Image, { src: "/images/" + logo, alt: "logo", height: height, width: width, layout: "intrinsic" }))));
};
var caseIntroContainerResponsiveCSS = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
    xs: "1fr",
    lg: "1fr 1fr"
}));
var CaseIntroContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: 60px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: 60px;\n"])), caseIntroContainerResponsiveCSS);
var CaseIntro = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, text = _a.text, image = _a.image, logo = _a.logo, color = _a.color;
    return (React.createElement(CaseIntroContainer, null,
        React.createElement(TextColumn, { title: title, subtitle: subtitle, text: text }),
        React.createElement(ImageColumn, { image: image, logo: logo.url, width: logo.width, height: logo.height, bgColor: color })));
};
export default CaseIntro;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CaseIntro.js.map