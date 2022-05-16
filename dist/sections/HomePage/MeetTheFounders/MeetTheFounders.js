var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import MeetTheFoundersBox from "../../../containers/MeetTheFoundersBox/MeetTheFoundersBox";
import { Container, Heading, Spacer } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { MeetTheFoundersData } from "../../../content";
var MeetTheFoundersContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 20px 0;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 100%);\n\tgap: 1em;\n\tjustify-content: center;\n\t@media (min-width: 424px){\n\t\tgrid-template-columns: repeat(auto-fill, 424px);\n\t}\n"], ["\n\tmargin: 20px 0;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, 100%);\n\tgap: 1em;\n\tjustify-content: center;\n\t@media (min-width: 424px){\n\t\tgrid-template-columns: repeat(auto-fill, 424px);\n\t}\n"])));
var StyledContainer = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n"])));
var StyledTitle = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\ttext-align: center;\n\tmargin-bottom: 40px;\n"], ["\n\ttext-align: center;\n\tmargin-bottom: 40px;\n"])));
var styledSpacerResponsiveCSS = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({
    xxl: 200
}));
var StyledSpacerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n\tmargin-bottom: 80px;\n"], ["\n\t", ";\n\tmargin-bottom: 80px;\n"])), styledSpacerResponsiveCSS);
var MeetTheFounders = function () { return (React.createElement(StyledContainer, null,
    React.createElement(StyledSpacerContainer, null,
        React.createElement(Spacer, { bold: true })),
    React.createElement(StyledTitle, { type: "h1", text: "Meet the start-up founders!" }),
    React.createElement(MeetTheFoundersContainer, null, MeetTheFoundersData.map(function (card) {
        return React.createElement(MeetTheFoundersBox, { key: card.company, title: card.company, paragraph: card.discription, founders: card.founders, link: card.link });
    })))); };
export default MeetTheFounders;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MeetTheFounders.js.map