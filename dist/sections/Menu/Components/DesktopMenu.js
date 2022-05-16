var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import Spacer from "../../../components/Spacer";
import Logo from "../../../components/Branding";
import { theme } from "../../../theme";
import { MenuContainer } from "../../../components/Container";
var DesktopMenuContainer = styled(MenuContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: 200px 1fr;\n\talign-items: center;\n    padding-top: 44px;\n\tz-index: 90;\n\twidth: 100%;\n\tbackground-color: rgba(255, 255, 255, .32);\n\n"], ["\n    display: grid;\n    grid-template-columns: 200px 1fr;\n\talign-items: center;\n    padding-top: 44px;\n\tz-index: 90;\n\twidth: 100%;\n\tbackground-color: rgba(255, 255, 255, .32);\n\n"])));
var NavLinksContainer = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    gap: ", "px;\n    justify-content: end;\n"], ["\n    display: flex;\n    gap: ", "px;\n    justify-content: end;\n"])), theme.layout.gutter);
export var DesktopMenu = function (_a) {
    var navLinks = _a.navLinks;
    return (React.createElement(DesktopMenuContainer, null,
        React.createElement("div", null,
            React.createElement(Logo, { color: "black" })),
        React.createElement(NavLinksContainer, null, navLinks.map(function (item) { return (React.createElement(item.Link, { key: item.name })); })),
        React.createElement(Spacer, null)));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=DesktopMenu.js.map