var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";
import { DiagonalArrow } from "../../icons";
import Link from "next/link";
var ArrowLinkContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-bottom: 5px;\n\tborder-bottom: ", ";\n\twidth: max-content;\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"], ["\n  \tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-bottom: 5px;\n\tborder-bottom: ", ";\n\twidth: max-content;\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"])), function (props) { return props.color + " 2px solid;"; });
var StyledParagraph = styled(Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tmargin-bottom: 0;\n\tpadding-right: 5px;\n"], ["\n\tmargin-bottom: 0;\n\tpadding-right: 5px;\n"])));
var ArrowContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\ttransform: rotate(", "deg);\n"], ["\n\ttransform: rotate(", "deg);\n"])), function (props) { return props.rotation ? 45 : 0; });
var ArrowLink = function (_a) {
    var onClick = _a.onClick, text = _a.text, className = _a.className, link = _a.link, _b = _a.color, color = _b === void 0 ? "black" : _b;
    var _c = useState(false), isHover = _c[0], setIsHover = _c[1];
    var Arrow = function () { return React.createElement(ArrowContainer, { rotation: isHover },
        React.createElement(DiagonalArrow, { color: color, size: 24 })); };
    return (link ? (React.createElement(Link, { href: link },
        React.createElement(ArrowLinkContainer, { className: className, onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); }, color: color },
            React.createElement(StyledParagraph, { fontWeight: "bold", text: text, color: color }),
            React.createElement(Arrow, null)))) : (React.createElement(ArrowLinkContainer, { onClick: onClick, className: className, onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); }, color: color },
        React.createElement(StyledParagraph, { fontWeight: "bold", text: text, color: color }),
        React.createElement(Arrow, null))));
};
export default ArrowLink;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ArrowLink.js.map