var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Container, Paragraph, Subtitle } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
var containerWithBackgroundResponsiveCSS = responsiveValuesCSS("background", "", breakpointNameToPx({
    sm: "url(" + "/images/case-about-portal.svg" + ") no-repeat right top;",
    lg: "url(" + "/images/case-about-portal.svg" + ") no-repeat right center;"
}));
var ContainerWithBackground = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), containerWithBackgroundResponsiveCSS);
var caseAboutContainerResponsiveCSS = function () {
    var gridAreas = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx({
        xs: "\"expertise\"" +
            "\"text\"",
        lg: "\"text expertise\""
    }));
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "1fr 1fr"
    }));
    return gridAreas + gridColumns;
};
var CaseAboutContainer = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tpadding-top: 90px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tpadding-top: 90px;\n"])), caseAboutContainerResponsiveCSS);
var StyledParagraph = styled(Paragraph)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 5px;\n"], ["\n  margin-bottom: 5px;\n"])));
var StyledSubtitle = styled(Subtitle)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 5px;\n  margin-top: 25px;\n"], ["\n  margin-bottom: 5px;\n  margin-top: 25px;\n"])));
var RightColumn = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tjustify-self: center;\n\tgrid-area: expertise;\n\tmargin-bottom: 90px;\n"], ["\n\tjustify-self: center;\n\tgrid-area: expertise;\n\tmargin-bottom: 90px;\n"])));
var CaseAbout = function (_a) {
    var expertises = _a.expertises, deliverables = _a.deliverables, children = _a.children;
    return (React.createElement(ContainerWithBackground, null,
        React.createElement(CaseAboutContainer, null,
            children,
            React.createElement(RightColumn, null,
                React.createElement(StyledSubtitle, { fontWeight: "bold", text: "EXPERTISE" }),
                expertises.map(function (expertise, index) { return React.createElement(StyledParagraph, { key: index, text: expertise }); }),
                React.createElement(StyledSubtitle, { fontWeight: "bold", text: "DELIVERABLES" }),
                deliverables.map(function (deliverable, index) { return React.createElement(StyledParagraph, { key: index, text: deliverable }); })))));
};
export default CaseAbout;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=CaseAbout.js.map