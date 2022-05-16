import React, { useState } from "react";
import { theme } from "../../theme";
import { ButtonStyled } from "./Button.styling";
var Button = function (_a) {
    var text = _a.text, type = _a.type, icon = _a.icon, onClick = _a.onClick, className = _a.className;
    var _b = useState(false), isHovered = _b[0], setIshovered = _b[1];
    var handleHover = function () { return setIshovered(!isHovered); };
    var _c = theme.colors.buttons[type], background = _c.background, color = _c.color, hoverBackground = _c.hoverBackground, hoverColor = _c.hoverColor;
    var RenderInnerContent = function () {
        if (text && icon) {
            var Icon = icon;
            return (React.createElement(React.Fragment, null,
                React.createElement("span", null, text),
                React.createElement(Icon, { color: color, size: 24 })));
        }
        if (icon) {
            var Icon = icon;
            return React.createElement(Icon, { color: color, size: 24 });
        }
        return React.createElement("span", null, text);
    };
    return (React.createElement(ButtonStyled, { onMouseEnter: handleHover, onMouseLeave: handleHover, background: background, color: color, hoverBackground: hoverBackground, hoverColor: hoverColor, icon: icon, text: text, onClick: onClick, className: className },
        React.createElement(RenderInnerContent, null)));
};
export default Button;
//# sourceMappingURL=Button.js.map