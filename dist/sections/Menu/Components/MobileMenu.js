var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import { MenuContainer } from "../../../components/Container";
import { theme } from "../../../theme";
import ContactBox from "./ContactBox";
import Logo from "../../../components/Branding";
import Link from "next/link";
var MobileMenuBarTopContainer = styled(MenuContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: 1fr 80px;\n    padding-top: 25px;\n    padding-right: 25px;\n    height: 72px;\n\tz-index: 90;\n"], ["\n    display: grid;\n    grid-template-columns: 1fr 80px;\n    padding-top: 25px;\n    padding-right: 25px;\n    height: 72px;\n\tz-index: 90;\n"])));
var MobileMenuContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 200px;\n\theight: calc(100vh - 72px);\n\twidth: 100vw;\n\tposition: fixed;\n\ttop: 72px;\n\tleft: 0;\n\tbackground: white;\n\tz-index: 9998;\n"], ["\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 200px;\n\theight: calc(100vh - 72px);\n\twidth: 100vw;\n\tposition: fixed;\n\ttop: 72px;\n\tleft: 0;\n\tbackground: white;\n\tz-index: 9998;\n"])));
var MenuList = styled.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: ", "px;\n    & > li {\n        text-align: center;\n        font-size: ", "em;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: ", "px;\n    & > li {\n        text-align: center;\n        font-size: ", "em;\n    }\n"])), theme.layout.gutter, theme.typography.menu.mobile);
var ContactContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n"], ["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n"])));
export var MobileMenu = function (_a) {
    var navLinks = _a.navLinks;
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var Opened = function () {
        return (React.createElement(MobileMenuContainer, null,
            React.createElement(MenuList, null, navLinks.map(function (item) { return (React.createElement("li", { key: item.name, onClick: function () { setOpen(false); } },
                React.createElement(item.Link, null))); })),
            React.createElement(ContactContainer, null,
                React.createElement(ContactBox, { icon: "email", text: "Send us an email", url: "mailto: info@bytecode.nl" }),
                React.createElement(ContactBox, { icon: "email", text: "Plan a meeting", url: "https://calendly.com/nickbroekarts-bytecode" }))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileMenuBarTopContainer, { background: isOpen ? theme.colors.white : "transparant" },
            React.createElement(Link, { href: "/" },
                React.createElement("div", null,
                    React.createElement(Logo, { color: "black" }))),
            React.createElement(Hamburger, { toggled: isOpen, toggle: setOpen })),
        isOpen && React.createElement(Opened, null)));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MobileMenu.js.map