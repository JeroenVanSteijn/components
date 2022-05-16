var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Heading } from "../../components/Typography";
var StyledTitle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: ", ";\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: ", ";\n"])), function (props) { return props.big ? "flex-start" : "center"; });
var StyledHeading = styled(Heading)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tpadding-left: ", ";\n\t", "\n"], ["\n\tpadding-left: ", ";\n\t", "\n"])), function (props) { return props.big ? "20px" : "10px"; }, function (props) { return props.big && "line-height: 0.8"; });
var IconTitle = function (_a) {
    var icon = _a.icon, text = _a.text, _b = _a.color, color = _b === void 0 ? "black" : _b, big = _a.big;
    var Icon = icon;
    return (React.createElement(StyledTitle, { big: big },
        React.createElement(Icon, { color: color, size: big ? 40 : 20 }),
        React.createElement(StyledHeading, { type: "h4", text: text, color: color, big: big })));
};
export default IconTitle;
var templateObject_1, templateObject_2;
//# sourceMappingURL=IconTitle.js.map