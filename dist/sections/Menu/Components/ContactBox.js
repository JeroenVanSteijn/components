var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { theme } from "../../../theme";
import styled from "styled-components";
var StyledContactBoxContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"], ["\n    border: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])), theme.colors.lightGray);
var StyledContactBoxInner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: 50px 1fr;\n"], ["\n    display: grid;\n    grid-template-columns: 50px 1fr;\n"])));
var ContactBox = function (_a) {
    var text = _a.text;
    //TODO: add icon
    return (React.createElement(StyledContactBoxContainer, null,
        React.createElement(StyledContactBoxInner, null, text)));
};
export default ContactBox;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ContactBox.js.map