var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { LaptopScreen, Paragraph, PhoneScreen, Subtitle } from "../../components";
import { theme } from "../../theme";
import Link from "next/link";
var CaseCardContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tborder-radius: 10px;\n\theight: 391px;\n\twidth: 272px;\n\tfilter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.1));\n\toverflow: hidden;\n\tmargin-right: 30px;\n\tmargin-bottom: 30px;\n\tpadding: 60px 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.02);\n\t}\n"], ["\n\tbackground-color: ", ";\n\tborder-radius: 10px;\n\theight: 391px;\n\twidth: 272px;\n\tfilter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.1));\n\toverflow: hidden;\n\tmargin-right: 30px;\n\tmargin-bottom: 30px;\n\tpadding: 60px 20px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.02);\n\t}\n"])), theme.colors.white);
var StyledSubtitle = styled(Subtitle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\ttext-transform: capitalize;\n"], ["\n\ttext-transform: capitalize;\n"])));
var LaptopScreenContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmargin-right: -150px;\n"], ["\n\tmargin-right: -150px;\n"])));
var CaseCard = function (_a) {
    var name = _a.name, subtitle = _a.subtitle, image = _a.image, type = _a.type;
    var RenderDevices = function () {
        if (type === "laptop") {
            return React.createElement(LaptopScreenContainer, null,
                React.createElement(LaptopScreen, { image: "/images/" + image + ".png", alt: "image of " + name + " app", height: 250 }));
        }
        if (type === "iphone") {
            return React.createElement(PhoneScreen, { image: "/images/" + image + ".svg", alt: "image of " + name + " app", height: 240 });
        }
        return null;
    };
    return (React.createElement(Link, { href: "/case/" + name.toLowerCase() },
        React.createElement(CaseCardContainer, null,
            React.createElement(RenderDevices, null),
            React.createElement("div", null,
                React.createElement(StyledSubtitle, { fontWeight: "bold", text: name }),
                React.createElement(Paragraph, { text: subtitle, size: "small" })))));
};
export default CaseCard;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=CaseCard.js.map