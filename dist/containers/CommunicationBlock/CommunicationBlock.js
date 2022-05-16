var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import IconTitle from "../../components/IconTitle";
import { Envelope } from "../../icons";
import { Paragraph } from "../../components/Typography";
import { footerContent } from "../../content";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tgrid-area: communication;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\tmargin-bottom: 20px;\n"], ["\n\tgrid-area: communication;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\tmargin-bottom: 20px;\n"])));
var StyledParagraph = styled(Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-top: 5px;\n\tmargin-bottom: 0;\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n"], ["\n\tmargin-top: 5px;\n\tmargin-bottom: 0;\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n"])));
var CommunicationBlock = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "black" : _b, className = _a.className;
    var goToMail = function () {
        window.location.href = "mailto:" + footerContent.email;
    };
    var goToPhone = function () {
        window.location.href = "tel:" + footerContent.number;
    };
    return (React.createElement(Container, { className: className },
        React.createElement(IconTitle, { icon: Envelope, text: "Direct communication", color: color }),
        React.createElement(StyledParagraph, { text: footerContent.email, onClick: goToMail, color: color }),
        React.createElement(StyledParagraph, { text: footerContent.number, onClick: goToPhone, color: color })));
};
export default CommunicationBlock;
var templateObject_1, templateObject_2;
//# sourceMappingURL=CommunicationBlock.js.map