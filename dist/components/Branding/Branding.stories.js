var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import Logo, { Trademark } from "../../components/Branding";
import styled from "styled-components";
import { Arrows, LongArrow, Linkedin, Github, Cars, Envelope, Eye, Handshake, PeopleArrows, Train, Youtube } from "../../icons";
export default {
    title: "Logo",
    component: Logo,
    subcomponents: {
        Trademark: Trademark,
        Arrows: Arrows,
        LongArrow: LongArrow,
        Linkedin: Linkedin,
        Github: Github,
        Cars: Cars,
        Envelope: Envelope,
        Eye: Eye,
        Handshake: Handshake,
        PeopleArrows: PeopleArrows,
        Train: Train,
        Youtube: Youtube
    }
};
var PreviewGrid = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: auto;\n"], ["\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: auto;\n"])));
export var LogoPreview = function () { return (React.createElement(PreviewGrid, null,
    React.createElement(Logo, { color: "black" }),
    React.createElement(Logo, { color: "white" }))); };
export var TrademarkPreview = function () { return (React.createElement(PreviewGrid, null,
    React.createElement(Trademark, { color: "black" }),
    React.createElement(Trademark, { color: "white" }))); };
export var IconsPreview = function () { return (React.createElement(PreviewGrid, null,
    React.createElement(Arrows, { color: "black", size: 24 }),
    React.createElement(LongArrow, { color: "black", size: 24 }),
    React.createElement(Linkedin, { color: "black", size: 24 }),
    React.createElement(Github, { color: "black", size: 24 }),
    React.createElement(Cars, { color: "black", size: 24 }),
    React.createElement(Envelope, { color: "black", size: 24 }),
    React.createElement(Eye, { color: "black", size: 24 }),
    React.createElement(Handshake, { color: "black", size: 24 }),
    React.createElement(PeopleArrows, { color: "black", size: 24 }),
    React.createElement(Train, { color: "black", size: 24 }),
    React.createElement(Youtube, { color: "black", size: 24 }))); };
var templateObject_1;
//# sourceMappingURL=Branding.stories.js.map