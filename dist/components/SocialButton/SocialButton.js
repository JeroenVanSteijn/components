var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import { theme } from "../../theme";
import styled from "styled-components";
var StyledButton = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \tbackground-color: ", ";\n  \tcursor: pointer;\n\tcolor:  ", ";\n\twidth: 24px;\n\theight: 24px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 6px;\n\tborder: none;\n\tborder-radius: 30px;\n\ttransition: 0.3s;\n\t&:hover {\n\t\tbackground-color: ", ";\n\t\tcolor: ", ";\n\t\tbox-shadow: ", ";\n\t}\n\t"], ["\n  \tbackground-color: ", ";\n  \tcursor: pointer;\n\tcolor:  ", ";\n\twidth: 24px;\n\theight: 24px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 6px;\n\tborder: none;\n\tborder-radius: 30px;\n\ttransition: 0.3s;\n\t&:hover {\n\t\tbackground-color: ", ";\n\t\tcolor: ", ";\n\t\tbox-shadow: ", ";\n\t}\n\t"])), function (props) { return props.solid ? "" + theme.colors.buttons.primary.background : ""; }, function (props) { return props.solid ? "" + theme.colors.buttons.primary.color : "" + theme.colors.colorBrand3; }, theme.colors.black, theme.colors.white, function (props) { return props.solid ? "5px 5px " + theme.colors.buttons.primary.background : ""; });
// TODO: create proper styling for non-solid social hoven and click
var SocialButton = function (_a) {
    var Icon = _a.Icon, link = _a.link, solid = _a.solid, mail = _a.mail, className = _a.className;
    var _b = useState(false), isHovered = _b[0], setIsHovered = _b[1];
    var handleHover = function () { return setIsHovered(!isHovered); };
    var onClick = function () {
        if (link) {
            if (mail) {
                window.location.href = "mailto:" + link;
            }
            else {
                window.open(link, "_blank");
            }
        }
    };
    return (React.createElement(StyledButton, { onMouseEnter: handleHover, onMouseLeave: handleHover, onClick: onClick, solid: solid, className: className },
        React.createElement(Icon, { color: !solid && !isHovered ? theme.colors.black : theme.colors.buttons.primary.color, size: 32 })));
};
export default SocialButton;
var templateObject_1;
//# sourceMappingURL=SocialButton.js.map