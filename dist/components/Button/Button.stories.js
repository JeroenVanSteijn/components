var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Cars, Linkedin } from "../../icons";
import styled from "styled-components";
import Button from "../../components/Button";
export default {
    title: "Button",
    component: Button,
};
var Preview = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n"], ["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n"])));
export var Primary = function () { return (React.createElement(Preview, null,
    React.createElement(Button, { type: "primary", text: "Button text" }),
    React.createElement(Button, { type: "secondary", text: "Button text" }),
    React.createElement(Button, { type: "primary", text: "Button text", icon: Cars }),
    React.createElement(Button, { type: "primary", icon: Linkedin }))); };
var templateObject_1;
//# sourceMappingURL=Button.stories.js.map