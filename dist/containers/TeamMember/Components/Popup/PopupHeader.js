var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Hamburger from "hamburger-react";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../../helpers/responsiveCss";
import Logo from "../../../../components/Branding";
import { isWindowDesktop } from "../../../../helpers/device";
import Link from "next/link";
var DesktopPopupMenu = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: 48px;\n\tpadding-top: 25px;\n\tz-index: 9998;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgrid-area: menu;\n\tbackground-color: ", ";\n"], ["\n\theight: 48px;\n\tpadding-top: 25px;\n\tz-index: 9998;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgrid-area: menu;\n\tbackground-color: ", ";\n"])), theme.colors.white);
var DesktopPopupHeader = function (_a) {
    var closePopup = _a.closePopup;
    return (React.createElement(DesktopPopupMenu, null,
        React.createElement(Hamburger, { toggled: true, onToggle: closePopup })));
};
var MobilePopupMenu = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: fixed;\n\tz-index: 9998;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\theight: 75px;\n\talign-items: center;\n\tgrid-area: menu;\n\ttop:0;\n\tleft:0;\n\tbackground-color: ", ";\n"], ["\n\tposition: fixed;\n\tz-index: 9998;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\theight: 75px;\n\talign-items: center;\n\tgrid-area: menu;\n\ttop:0;\n\tleft:0;\n\tbackground-color: ", ";\n"])), theme.colors.white);
var logoContainerResponsiveCSS = responsiveValuesCSS("padding-left", "px", breakpointNameToPx({
    xs: 12,
    md: 16,
    lg: 32,
}));
var LogoContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", "\n"], ["\n\t", "\n"])), logoContainerResponsiveCSS);
var MobilePopupHeader = function (_a) {
    var closePopup = _a.closePopup;
    return (React.createElement(MobilePopupMenu, null,
        React.createElement(Link, { href: "/" },
            React.createElement(LogoContainer, null,
                React.createElement(Logo, { color: "black" }))),
        React.createElement(Hamburger, { toggled: true, onToggle: closePopup })));
};
var PopupHeader = function (_a) {
    var closePopup = _a.closePopup;
    return isWindowDesktop()
        ? React.createElement(DesktopPopupHeader, { closePopup: closePopup })
        : React.createElement(MobilePopupHeader, { closePopup: closePopup });
};
export default PopupHeader;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=PopupHeader.js.map