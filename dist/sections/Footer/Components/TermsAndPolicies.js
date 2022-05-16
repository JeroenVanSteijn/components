var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../components/Typography";
import { links } from "../../../content/content";
import Link from "next/link";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers/responsiveCss";
var containerResponsiveCSS = responsiveValuesCSS("flex-direction", "", breakpointNameToPx({
    xs: "column",
    lg: "row"
}));
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tgrid-area: terms;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n"], ["\n\t", ";\n\tgrid-area: terms;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n"])), containerResponsiveCSS);
var StyledParagraph = styled(Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n"], ["\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n"])));
var TermsAndPolicies = function () {
    var goToTerms = function () {
        window.open(links.termsAndConditions, "_blank");
    };
    return (React.createElement(Container, null,
        React.createElement(StyledParagraph, { text: "Terms and conditions", onClick: goToTerms }),
        React.createElement(Link, { href: links.privacyPolicy },
            React.createElement(StyledParagraph, { text: "Privacy Policy" })),
        React.createElement(Link, { href: links.cookiePolicy },
            React.createElement(StyledParagraph, { text: "Cookie Policy" })),
        React.createElement(Paragraph, { text: "\u00A9 2022" })));
};
export default TermsAndPolicies;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TermsAndPolicies.js.map