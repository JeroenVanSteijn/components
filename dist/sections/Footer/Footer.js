var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Contact from "./Components/Contact";
import CommunicationBlock from "../../containers/CommunicationBlock";
import AddressBlock from "../../containers/AddressBlock";
import TermsAndPolicies from "./Components/TermsAndPolicies";
import Socials from "./Components/Socials";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";
var footerContainerResponsiveCSS = function () {
    var gridTemplateAreas = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx({
        xs: "\"contact\"" +
            "\"communication\"" +
            "\"address\"" +
            "\"socials\"" +
            "\"terms\"",
        md: "\"contact contact\"" +
            "\"communication address\"" +
            "\". socials\"" +
            "\"terms terms\"",
        lg: "\"contact communication address\"" +
            "\"contact . socials\"" +
            "\". terms terms\""
    }));
    var gridTemplateRows = responsiveValuesCSS("grid-template-rows", "", breakpointNameToPx({
        xs: "160px 120px 100px 40px 1fr",
        md: "160px 100px 40px 1fr",
        lg: "100px 60px 100px"
    }));
    var gridColumnGaps = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({
        lg: 10,
        xl: 60
    }));
    var marginBottom = responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({
        xs: 60,
        lg: 20
    }));
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        xs: 80,
        lg: 150
    }));
    return gridTemplateAreas + gridTemplateRows + gridColumnGaps + marginBottom + paddingTop;
};
var FooterContainer = styled(Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-rows: 160px 100px 100px 40px 1fr;\n\tgrid-row-gap: 20px;\n\tmargin-bottom: 60px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tgrid-template-rows: 160px 100px 100px 40px 1fr;\n\tgrid-row-gap: 20px;\n\tmargin-bottom: 60px;\n"])), footerContainerResponsiveCSS);
var Footer = function () { return (React.createElement(FooterContainer, null,
    React.createElement(Contact, null),
    React.createElement(CommunicationBlock, null),
    React.createElement(AddressBlock, null),
    React.createElement(Socials, null),
    React.createElement(TermsAndPolicies, null))); };
export default Footer;
var templateObject_1;
//# sourceMappingURL=Footer.js.map