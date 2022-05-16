var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../components/Typography";
import Button from "../../../components/Button";
import { LongArrow } from "../../../icons";
import Link from "next/link";
import { footerContent } from "../../../content";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers/responsiveCss";
var containerResponsiveCSS = responsiveValuesCSS("max-width", "px", breakpointNameToPx({
    lg: 370,
}));
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tgrid-area: contact;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-bottom: 20px;\n"], ["\n\t", ";\n\tgrid-area: contact;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-bottom: 20px;\n"])), containerResponsiveCSS);
var Title = styled(Heading)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-bottom: 15px;\n"], ["\n\tmargin-bottom: 15px;\n"])));
var Contact = function () {
    return (React.createElement(Container, null,
        React.createElement(Title, { type: "h3", text: footerContent.slogan }),
        React.createElement(Link, { href: "/contact" },
            React.createElement(Button, { type: "secondary", text: "Let us know!", icon: LongArrow }))));
};
export default Contact;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Contact.js.map