var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "../../../index";
import styled from "styled-components";
import { InitialContainer } from "../../../components";
import { PageIntro } from "../../../sections";
import Image from "next/image";
var introContainerResponsiveCSS = responsiveValuesCSS("background", "", breakpointNameToPx({
    lg: "url(" + "/images/home-intro-line.svg" + ") no-repeat right bottom content-box, " + theme.colors.colorBrand2
}));
var IntroContainer = styled(InitialContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tbackground-color: ", ";\n\tpadding-right: 0;\n\tpadding-bottom: 40px;\n\tpadding-top: 140px;\n"], ["\n\t", ";\n\tbackground-color: ", ";\n\tpadding-right: 0;\n\tpadding-bottom: 40px;\n\tpadding-top: 140px;\n"])), introContainerResponsiveCSS, theme.colors.colorBrand2);
var Intro = function () { return (React.createElement(IntroContainer, null,
    React.createElement(PageIntro, { title: "Your startup partner for building software products", paragraph: "Building a successful startup is hard, but finding the right people to develop your software product is perhaps even more difficult.\n\t\t\t\tThat is why we offer a partnership with us. We are your technical co-founder & interim-CTO.", image: React.createElement(Image, { src: "/images/home-intro.svg", alt: "members of bytecode", height: 564, width: 601 }) }))); };
export default Intro;
var templateObject_1;
//# sourceMappingURL=Intro.js.map