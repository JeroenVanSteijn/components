var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "../../../index";
import styled from "styled-components";
import { FullWidthContainer, Heading, Container } from "../../../components";
import { CollapsibleText } from "../../../containers";
var howDoWeWannaContainerResponsiveCSS = function () {
    var background = responsiveValuesCSS("background", "", breakpointNameToPx({
        xs: "url(" + "/images/home-line2-mobile.svg" + ") no-repeat left bottom, " + theme.colors.colorBrand4 + ";",
        lg: "url(" + "/images/home-line2.svg" + ") no-repeat left bottom, " + theme.colors.colorBrand4 + ";"
    }));
    var minHeight = responsiveValuesCSS("min-height", "px", breakpointNameToPx({
        xs: 600,
        lg: 700
    }));
    return background + minHeight;
};
var HowDoWeWannaContainer = styled(FullWidthContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), howDoWeWannaContainerResponsiveCSS);
var howDoWeWannaContentContainerResponsiveCSS = function () {
    var padding = responsiveValuesCSS("padding", "", breakpointNameToPx({
        xs: "40px 0 60px 0",
        lg: "200px 70px 200px 100px",
        xl: "200px 70px 200px 150px"
    }));
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "1fr 1fr",
    }));
    return padding + gridColumns;
};
var HowDoWeWannaContentContainer = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n"], ["\n\t", ";\n\tdisplay: grid;\n"])), howDoWeWannaContentContainerResponsiveCSS);
var StyledHeading = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmargin-bottom: 40px;\n"], ["\n\tmargin-bottom: 40px;\n"])));
var CollapsibleTextContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tjustify-self: center;\n"], ["\n\tjustify-self: center;\n"])));
var StyledCollapsibleText = styled(CollapsibleText)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tmargin-bottom: 30px;\n"], ["\n\tmargin-bottom: 30px;\n"])));
var HowDoWeWanna = function () { return (React.createElement(HowDoWeWannaContainer, null,
    React.createElement(HowDoWeWannaContentContainer, null,
        React.createElement(StyledHeading, { type: "h1", text: "How do we wanna work together?", color: "white" }),
        React.createElement(CollapsibleTextContainer, null,
            React.createElement(StyledCollapsibleText, { title: "As a team, no client-agency relationship", description: "Creating one product team, together. No client-agency relationship.\n\t\t\t\t\t\tThis means a lot of transparency and working side by side to create a working version of your concept.", color: "white" }),
            React.createElement(StyledCollapsibleText, { title: "Learning and improving on the way", description: "Learning from mistakes and improving as we go.\n\t\t\t\t\t\tSometimes we face a challenge we have not seen before. We believe failure and learning from it are essential.", color: "white" }),
            React.createElement(StyledCollapsibleText, { title: "Working with passionate founders", description: "Working with passionate founders who want to \u2018scratch their own itch\u2019.\n\t\t\t\t\t\tThis boosts our enthusiasm and drives us to help you fulfill your mission.", color: "white" }))))); };
export default HowDoWeWanna;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=WorkTogether.js.map