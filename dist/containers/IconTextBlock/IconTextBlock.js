var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Paragraph } from "../../components/Typography";
import styled from "styled-components";
import IconTitle from "../../components/IconTitle";
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \tpadding-right: 15px;\n\tpadding-bottom: 10px;\n"], ["\n  \tpadding-right: 15px;\n\tpadding-bottom: 10px;\n"])));
var IconTextBlock = function (_a) {
    var icon = _a.icon, title = _a.title, text = _a.text;
    return (React.createElement(StyledContainer, null,
        React.createElement(IconTitle, { icon: icon, text: title }),
        React.createElement(Paragraph, { text: text })));
};
export default IconTextBlock;
var templateObject_1;
//# sourceMappingURL=IconTextBlock.js.map