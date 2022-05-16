var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../../helpers/responsiveCss";
import { Heading, Paragraph } from "../../../../components/Typography";
import { Container } from "../../../../components/Container";
import { breakpoints, theme } from "../../../../theme";
import React from "react";
import PopupSocials from "./PopupSocials";
import PopupHeader from "./PopupHeader";
var PopupBackground = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground: #DEE3E0B2;\n\tmargin: 0 auto;\n\tz-index: 100;\n\toverflow: scroll;\n\toverscroll-behavior: none;\n"], ["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground: #DEE3E0B2;\n\tmargin: 0 auto;\n\tz-index: 100;\n\toverflow: scroll;\n\toverscroll-behavior: none;\n"])));
var popupContentResponsiveCSS = function () {
    var width = responsiveValuesCSS("width", "", breakpointNameToPx({ sm: "100%", md: "80%", lg: "700px" }));
    var top = responsiveValuesCSS("top", "%", breakpointNameToPx({ xs: 0, xl: 5 }));
    var right = responsiveValuesCSS("right", "%", breakpointNameToPx({ xs: 0, xl: 0 }));
    return top + right + width;
};
var popupLayoutResponsiveCSS = function () {
    var gridTemplateArea = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx({
        xs: "\"menu menu\"" +
            "\"image image\"" +
            "\"title title\"" +
            "\"about about\"" +
            "\"socials socials\"",
        md: "\"menu menu\"" +
            "\"title image\"" +
            "\"socials about\""
    }));
    var gridRowGap = responsiveValuesCSS("grid-row-gap", "px", breakpointNameToPx({ xs: 20, md: 25 }));
    var gridTemplateColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr 1fr",
        lg: "1fr 2fr",
    }));
    var gridTemplateRows = responsiveValuesCSS("grid-template-rows", "", breakpointNameToPx({
        xs: "auto",
        md: "50px auto",
        xl: "48px auto"
    }));
    return gridTemplateArea + gridRowGap + gridTemplateColumns + gridTemplateRows;
};
var PopupLayout = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\toverflow: scroll;\n"], ["\n\t", ";\n\toverflow: scroll;\n"])), popupLayoutResponsiveCSS);
var PopupContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tposition: absolute;\n\tbackground-color: ", ";\n\tz-index: 101;\n\tdisplay: grid;\n\toverflow: scroll;\n\t\n\t@media screen and (min-width: ", "px) {\n\t\tanimation: slide 1s forwards;\n\t}\n\n\t@keyframes slide {\n\t\t0% { right: -500px; }\n\t}\n"], ["\n\t", ";\n\tposition: absolute;\n\tbackground-color: ", ";\n\tz-index: 101;\n\tdisplay: grid;\n\toverflow: scroll;\n\t\n\t@media screen and (min-width: ", "px) {\n\t\tanimation: slide 1s forwards;\n\t}\n\n\t@keyframes slide {\n\t\t0% { right: -500px; }\n\t}\n"])), popupContentResponsiveCSS, theme.colors.white, breakpoints.lg);
var styledImageResponsiveCSS = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 75, md: 0 }));
var imageOnionSide = [
    { url: "top-left", background: "left top" },
    { url: "top-right", background: "right top" },
    { url: "bottom-right", background: "right bottom" }
];
var imageOnionColor = [
    "green",
    "pink"
];
var getRandomImageOnion = function (name) {
    var color = imageOnionColor[Math.floor(Math.random() * imageOnionColor.length)];
    var side = imageOnionSide[Math.floor(Math.random() * imageOnionSide.length)];
    //const side = {url:"top-left", background: "left top", image: "left top"};
    return "url(" + ("/images/image-vector-" + side.url + "-" + color + ".svg") + ") no-repeat " + side.background + ", url(" + ("/images/member-" + name + ".png") + ") no-repeat " + side.background;
};
var StyledImage = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n\theight: 452px;\n\twidth: 312px;\n\tgrid-area: image;\n\tposition: relative;\n\tleft: 0;\n\tbottom: 0;\n\tbackground: ", ";\n\tbackground-origin: content-box;\n"], ["\n\t", ";\n\theight: 452px;\n\twidth: 312px;\n\tgrid-area: image;\n\tposition: relative;\n\tleft: 0;\n\tbottom: 0;\n\tbackground: ", ";\n\tbackground-origin: content-box;\n"])), styledImageResponsiveCSS, function (props) { return "" + getRandomImageOnion(props.name); });
var TitleAndName = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tgrid-area: title;\n"], ["\n\tgrid-area: title;\n"])));
var StyledName = styled(Heading)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfont-family: ", ";\n"], ["\n\tfont-family: ", ";\n"])), theme.typography.paragraph.font);
var JobTitle = styled(Paragraph)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tcolor: ", ";\n\tmargin-bottom: 0;\n"], ["\n\tcolor: ", ";\n\tmargin-bottom: 0;\n"])), theme.colors.colorBrand4);
var AboutContainer = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tpadding-left: 0;\n\tgrid-area: about;\n"], ["\n\tpadding-left: 0;\n\tgrid-area: about;\n"])));
var Popup = function (_a) {
    var member = _a.member, closePopup = _a.closePopup, popup = _a.popup;
    var name = member.name, about = member.about, id = member.id, jobTitle = member.jobTitle;
    return (React.createElement(React.Fragment, null, popup ? (React.createElement(PopupBackground, null,
        " ",
        React.createElement(PopupContent, null,
            React.createElement(PopupLayout, null,
                React.createElement(PopupHeader, { closePopup: closePopup }),
                React.createElement(StyledImage, { name: id }),
                React.createElement(TitleAndName, null,
                    React.createElement(StyledName, { text: name, type: "h4" }),
                    React.createElement(JobTitle, { text: jobTitle })),
                React.createElement(AboutContainer, null,
                    React.createElement(Paragraph, { text: about })),
                React.createElement(PopupSocials, { member: member }))))) : null));
};
export default Popup;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Popup.js.map