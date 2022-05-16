var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import UserPicture from "./UserPictures";
export default {
    title: "Button",
    component: Button,
};
var Preview = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n"], ["\n\tdisplay: grid;\n\tgrid-gap: 1em;\n"])));
export var Primary = function () { return (React.createElement(Preview, null,
    React.createElement(UserPicture, { color: "darkGreen", person: "", size: 0, shadowPosition: "top" }),
    React.createElement(UserPicture, { color: "lightGreen", person: "", size: 0, shadowPosition: "top" }),
    React.createElement(UserPicture, { color: "purple", person: "", size: 0, shadowPosition: "top" }))); };
var templateObject_1;
//# sourceMappingURL=UserPictures.stories.js.map