var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";
var TextBoxContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 20px;\n    position: relative;\n    background-color: #FFF;\n    border: 1px solid ", ";\n    border-radius: 10px;\n    box-shadow: 4px 4px rgba(37, 58, 143, 0.25);\n    cursor: pointer;\n\n    &:hover {\n        box-shadow: 6px 6px rgba(37, 58, 143, 0.25);\n    }\n"], ["\n    padding: 20px;\n    position: relative;\n    background-color: #FFF;\n    border: 1px solid ", ";\n    border-radius: 10px;\n    box-shadow: 4px 4px rgba(37, 58, 143, 0.25);\n    cursor: pointer;\n\n    &:hover {\n        box-shadow: 6px 6px rgba(37, 58, 143, 0.25);\n    }\n"])), theme.colors.black);
var TextBox = function (_a) {
    var children = _a.children;
    return React.createElement(TextBoxContainer, null, children);
};
export default TextBox;
var templateObject_1;
//# sourceMappingURL=TextBox.js.map