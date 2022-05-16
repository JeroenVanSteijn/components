var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import SocialButton from "../../../components/SocialButton";
import { Instagram, Linkedin, Youtube } from "../../../icons";
import { links } from "../../../content/content";
import React from "react";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tgrid-area: socials;\n"], ["\n\tdisplay: flex;\n\tgrid-area: socials;\n"])));
var StyledSocialButton = styled(SocialButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-right: 15px;\n"], ["\n\tmargin-right: 15px;\n"])));
var Socials = function () { return (React.createElement(Container, null,
    React.createElement(StyledSocialButton, { Icon: Linkedin, link: links.linkedin }),
    React.createElement(StyledSocialButton, { Icon: Youtube, link: links.youtube }),
    React.createElement(StyledSocialButton, { Icon: Instagram, link: links.instagram }))); };
export default Socials;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Socials.js.map