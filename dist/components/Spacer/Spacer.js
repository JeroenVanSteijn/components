var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var SpacerStyling = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    ", "\n    grid-column: 1/-1;\n    ::before {\n        content: '';\n        display: block;\n        height: 10px;\n        width: 1px;\n        position: absolute;\n        border-left: ", ";\n    }\n    transform: ", ";\n"], ["\n    width: 100%;\n    height: ", ";\n    background-color: ", ";\n    " /* Makes sure it spaces a full css-grid row*/, "\n    grid-column: 1/-1;\n    ::before {\n        content: '';\n        display: block;\n        height: 10px;\n        width: 1px;\n        position: absolute;\n        border-left: ", ";\n    }\n    transform: ", ";\n"])), function (props) { return props.bold ? "2px" : "1px"; }, function (props) { return props.color; }, /* Makes sure it spaces a full css-grid row*/ "", function (props) { return props.bold ? "2px solid " + props.color + ";" : "1px solid " + props.color + ";"; }, function (props) { return props.reverse ? "scale(-1, 1)" : ""; });
var Spacer = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "black" : _b, className = _a.className, bold = _a.bold, reverse = _a.reverse;
    return React.createElement(SpacerStyling, { className: className, color: color, bold: bold, reverse: reverse });
};
export default Spacer;
var templateObject_1;
//# sourceMappingURL=Spacer.js.map