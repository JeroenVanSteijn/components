var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { footerContent, links } from "../../content/content";
import { Heading, Paragraph } from "../../components/Typography";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tgrid-area: address;\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n"], ["\n\tgrid-area: address;\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n"])));
var StyledParagraph = styled(Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-top: 5px;\n\tmargin-bottom: 0;\n"], ["\n\tmargin-top: 5px;\n\tmargin-bottom: 0;\n"])));
var AddressBlock = function (_a) {
    var className = _a.className, large = _a.large;
    var _b = footerContent.office1, name = _b.name, address = _b.address, number = _b.number, city = _b.city, zipCode = _b.zipCode;
    var goToMap = function () {
        window.open(links.mapsQuery);
    };
    return (React.createElement(Container, { onClick: goToMap, className: className },
        React.createElement(Heading, { type: large ? "h3" : "h4", text: "Office " + name }),
        React.createElement(StyledParagraph, { text: address + " " + number + ", ", size: large ? "large" : "normal" }),
        React.createElement(StyledParagraph, { text: zipCode + " " + city, size: large ? "large" : "normal" })));
};
export default AddressBlock;
var templateObject_1, templateObject_2;
//# sourceMappingURL=AddressBlock.js.map