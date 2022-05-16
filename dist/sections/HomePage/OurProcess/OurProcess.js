var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { FullWidthContainer, Heading, Paragraph, Container, ArrowLink, Spacer } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../index";
import Image from "next/image";
import { DeveloperMode, Handshake, List, PencilAndRuler, Tracking } from "../../../icons";
import { IconSummaryBlock } from "../../../containers";
var ProcessTextContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin-bottom: 80px;\n"], ["\n\tmargin-bottom: 80px;\n"])));
var ProcessText = function () { return (React.createElement(ProcessTextContainer, null,
    React.createElement(Heading, { type: "h2", text: "Our process" }),
    React.createElement(Paragraph, { text: "What steps lead to a first working version of your concept?\n\t\t\tHow do you improve and optimize your MVP? The following steps will give you a clear overview of our process. " }),
    React.createElement(ArrowLink, { link: "/what-we-do", text: "See how we work" }))); };
var StyledIconSummaryBlock = styled(IconSummaryBlock)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\talign-self: start;\n\tmargin-bottom: 20px;\n"], ["\n\talign-self: start;\n\tmargin-bottom: 20px;\n"])));
var iconSummaryBlockContainerResponsiveCSS = responsiveValuesCSS("height", "px", breakpointNameToPx({
    xs: 950,
    sm: 800
}));
var IconSummaryBlockContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"], ["\n\t", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"])), iconSummaryBlockContainerResponsiveCSS);
var processSummaryContainerResponsiveCSS = function () {
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "130px 1fr",
        md: "130px 500px"
    }));
    var height = responsiveValuesCSS("height", "px", breakpointNameToPx({
        xs: 950,
        sm: 800
    }));
    return gridColumns + height;
};
var ProcessSummaryContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\talign-content: start;\n"], ["\n\t", ";\n\tdisplay: grid;\n\talign-content: start;\n"])), processSummaryContainerResponsiveCSS);
var ProcessSummary = function () { return (React.createElement(ProcessSummaryContainer, null,
    React.createElement(Image, { src: "/images/process-image.svg", alt: "lines of process", height: 754, width: 83 }),
    React.createElement(IconSummaryBlockContainer, null,
        React.createElement(StyledIconSummaryBlock, { Icon: Handshake, title: "Introduction", paragraph: "Identify a problem, come up with a solution, and get acquainted with the market." }),
        React.createElement(StyledIconSummaryBlock, { Icon: Tracking, title: "Learn from our users", list: [
                "Send surveys",
                "Perform interviews",
                "Optimize and improve"
            ] }),
        React.createElement(StyledIconSummaryBlock, { Icon: List, title: "Prioritize", paragraph: "Determine what to develop and what the user's minimal requirements are\n\t\t\t\tto reach their goal." }),
        React.createElement(StyledIconSummaryBlock, { Icon: PencilAndRuler, title: "Visualize", list: [
                "Create a user flow and experience",
                "Draft a user interface",
                "Prototype"
            ] }),
        React.createElement(StyledIconSummaryBlock, { Icon: DeveloperMode, title: "MVP Development", paragraph: "Create a first working version of your concept or add new features. 2-week sprints.\n\t\t\t\tAlpha and beta tests. Deployment and live." })))); };
var processSpacerResponsiveCSS = function () {
    var marginLeft = responsiveValuesCSS("margin-left", "%", breakpointNameToPx({
        lg: 30
    }));
    return marginLeft;
};
var ProcessSpacerContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), processSpacerResponsiveCSS);
var processContainerResponsiveCSS = responsiveValuesCSS("background-size", "", breakpointNameToPx({
    xs: "40%",
    lg: "auto auto"
}));
var ProcessContainer = styled(FullWidthContainer)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", ";\n\tbackground: url(", ") no-repeat top left;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"], ["\n\t", ";\n\tbackground: url(", ") no-repeat top left;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"])), processContainerResponsiveCSS, "/images/home-process-line.svg");
var ourProcessContainerResponsiveCSS = function () {
    var padding = responsiveValuesCSS("padding", "", breakpointNameToPx({
        xs: "40px 0 60px 0",
        lg: "120px 70px 200px 100px",
        xl: "120px 70px 200px 150px"
    }));
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "1fr 2fr",
    }));
    return gridColumns + padding;
};
var OurProcessContainer = styled(Container)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tgrid-column-gap: 40px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tgrid-column-gap: 40px;\n"])), ourProcessContainerResponsiveCSS);
var OurProcess = function () { return (React.createElement(ProcessContainer, null,
    React.createElement(ProcessSpacerContainer, null,
        React.createElement(Spacer, { bold: true })),
    React.createElement(OurProcessContainer, null,
        React.createElement(ProcessText, null),
        React.createElement(ProcessSummary, null)))); };
export default OurProcess;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=OurProcess.js.map