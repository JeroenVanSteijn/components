var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph, Heading } from "../../components/Typography";
import { theme } from "../../theme";
import Image from "next/image";
import Popup from "./Components/Popup";
var StyledName = styled(Heading)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-family: ", ";\n"], ["\n\tfont-family: ", ";\n"])), theme.typography.paragraph.font);
var TeamMemberImage = styled(Image)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.02);\n\t}\n"], ["\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.02);\n\t}\n"])));
var TeamMember = function (_a) {
    var member = _a.member;
    var id = member.id, name = member.name, jobTitle = member.jobTitle;
    var _b = useState(false), popup = _b[0], setPopup = _b[1];
    var openPopup = function () {
        setPopup(true);
    };
    var closePopup = function () {
        setPopup(false);
    };
    return (React.createElement("div", null,
        React.createElement(Popup, { member: member, closePopup: closePopup, popup: popup }),
        React.createElement(TeamMemberImage, { src: "/images/member-" + id + ".png", alt: "profile picture", width: 312, height: 455, onClick: openPopup }),
        React.createElement(StyledName, { text: name, type: "h4" }),
        React.createElement(Paragraph, { text: jobTitle })));
};
export default TeamMember;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TeamMember.js.map