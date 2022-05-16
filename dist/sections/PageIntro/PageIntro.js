var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";
import { Container, Heading, Paragraph, Subtitle } from "../../components";
var introContainerWithImageResponsiveCSS = function (columnSizes) {
    if (columnSizes === void 0) { columnSizes = "1fr 1fr"; }
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: columnSizes
    }));
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        md: 50,
        xl: 100
    }));
    return gridColumns + paddingTop;
};
var introContainerNoImageResponsiveCSS = function (columnSizes) {
    if (columnSizes === void 0) { columnSizes = "1fr 1fr"; }
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: columnSizes
    }));
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        lg: 50,
        xl: 160
    }));
    var paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({
        lg: 50,
        xl: 70,
    }));
    var gridColumnGap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({
        lg: 60,
        xxl: 100,
    }));
    return gridColumns + paddingBottom + paddingTop + gridColumnGap;
};
var IntroContainer = styled(Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: ", ";\n"], ["\n\t", ";\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: ", ";\n"])), function (props) { return props.image
    ? introContainerWithImageResponsiveCSS(props.columnSizes)
    : introContainerNoImageResponsiveCSS(props.columnSizes); }, function (props) { return props.image ? "" : "60px"; });
var StyledIntroSubTitle = styled(Subtitle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\n"], ["\n\t\n"])));
var styledIntroHeadingResponsiveCSS = responsiveValuesCSS("padding-right", "%", breakpointNameToPx({
    sm: 30,
    md: 0
}));
var StyledIntroHeading = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), styledIntroHeadingResponsiveCSS);
var introParagraphResponsiveCSS = function () { return responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({ xs: 0, lg: 100 })); };
var StyledIntroParagraph = styled(Paragraph)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), introParagraphResponsiveCSS);
var LeftColumn = function (_a) {
    var subtitle = _a.subtitle, title = _a.title, paragraph = _a.paragraph;
    return (React.createElement("div", null,
        subtitle && React.createElement(StyledIntroSubTitle, { text: subtitle }),
        React.createElement(StyledIntroHeading, { type: "h1", text: title }),
        paragraph && React.createElement(StyledIntroParagraph, { text: paragraph })));
};
var rightColumnContainerResponsiveCSS = responsiveValuesCSS("margin-top", "px", breakpointNameToPx({
    xs: 0,
    lg: 150,
    xl: 100
}));
var RightColumnContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", ";\n\tdisplay: flex;\n\tflex-direction: column;\n"], ["\n\t", ";\n\tdisplay: flex;\n\tflex-direction: column;\n"])), rightColumnContainerResponsiveCSS);
var RightColumn = function (_a) {
    var image = _a.image, link = _a.link, paragraph = _a.paragraph;
    if (image) {
        return (React.createElement(React.Fragment, null, image));
    }
    if (!image && paragraph) {
        return (React.createElement(RightColumnContainer, null,
            React.createElement(Paragraph, { text: paragraph }),
            link));
    }
    return null;
};
var PageIntro = function (_a) {
    var subtitle = _a.subtitle, title = _a.title, paragraph = _a.paragraph, image = _a.image, columnSizes = _a.columnSizes, link = _a.link, className = _a.className;
    return (React.createElement(IntroContainer, { image: image != undefined, columnSizes: columnSizes, className: className },
        React.createElement(LeftColumn, { subtitle: subtitle, title: title, paragraph: image ? paragraph : undefined }),
        React.createElement(RightColumn, { image: image, paragraph: paragraph, link: link })));
};
export default PageIntro;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=PageIntro.js.map