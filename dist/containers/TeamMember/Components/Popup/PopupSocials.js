var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import Spacer from "../../../../components/Spacer";
import { Heading, Paragraph } from "../../../../components/Typography";
import React from "react";
import SocialButton from "../../../../components/SocialButton";
import { Envelope, Github, Linkedin } from "../../../../icons";
var SocialsContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tpadding-right: 80px;\n\tgrid-template-columns: 113px 200px;\n\tgrid-template-rows: 40px 35px 35px 35px 80px;\n\tgrid-column-gap: 20px;\n\tgrid-area: socials\n"], ["\n\tdisplay: grid;\n\tpadding-right: 80px;\n\tgrid-template-columns: 113px 200px;\n\tgrid-template-rows: 40px 35px 35px 35px 80px;\n\tgrid-column-gap: 20px;\n\tgrid-area: socials\n"])));
var StyledSpacer = styled(Spacer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tgrid-column: 1 / span 2;\n"], ["\n\tgrid-column: 1 / span 2;\n"])));
var SocialsTitle = styled(Heading)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tgrid-column: 1;\n\tgrid-row: 2;\n\talign-self: start;\n\tmargin-bottom: 5px;\n\tmargin-top: 0;\n"], ["\n\tgrid-column: 1;\n\tgrid-row: 2;\n\talign-self: start;\n\tmargin-bottom: 5px;\n\tmargin-top: 0;\n"])));
var SocialsFocusArea = styled(Paragraph)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tgrid-column: 2;\n\talign-self: start;\n\tmargin-bottom: 5px;\n"], ["\n\tgrid-column: 2;\n\talign-self: start;\n\tmargin-bottom: 5px;\n"])));
var SocialsLinks = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tgrid-column: 2;\n\tdisplay: grid;\n\tgrid-template-columns: 32px 32px 32px;\n\tgrid-column-gap: 20px;\n\tmargin-top: 20px;\n"], ["\n\tgrid-column: 2;\n\tdisplay: grid;\n\tgrid-template-columns: 32px 32px 32px;\n\tgrid-column-gap: 20px;\n\tmargin-top: 20px;\n"])));
var PopupSocials = function (_a) {
    var member = _a.member;
    return (React.createElement(SocialsContainer, null,
        React.createElement(StyledSpacer, { reverse: true }),
        React.createElement(SocialsTitle, { type: "h5", text: "Focus area" }),
        member.focus.map(function (area, index) { return React.createElement(SocialsFocusArea, { key: index, text: area }); }),
        React.createElement(SocialsLinks, null,
            member.github && React.createElement(SocialButton, { Icon: Github, link: member.github, solid: true }),
            member.email && React.createElement(SocialButton, { Icon: Envelope, link: member.email, solid: true, mail: true }),
            member.linkedIn && React.createElement(SocialButton, { Icon: Linkedin, link: member.linkedIn, solid: true }))));
};
export default PopupSocials;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=PopupSocials.js.map