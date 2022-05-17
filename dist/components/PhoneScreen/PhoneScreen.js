var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var ImageContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\theight: ", ";\n\tfilter: drop-shadow(10px 10px 10px rgba(0,0,0,0.4));\n\talign-self: center;\n\tdisplay: flex;\n"], ["\n\theight: ", ";\n\tfilter: drop-shadow(10px 10px 10px rgba(0,0,0,0.4));\n\talign-self: center;\n\tdisplay: flex;\n"])), function (props) { return props.height + "px"; });
var StyledImage = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\theight: ", ";;\n\tmargin: 0 auto;\n"], ["\n\theight: ", ";;\n\tmargin: 0 auto;\n"])), function (props) { return props.height + "px"; });
var PhoneScreen = function (_a) {
    var image = _a.image, alt = _a.alt, height = _a.height;
    return (React.createElement(ImageContainer, { height: height },
        React.createElement(StyledImage, { src: image, alt: alt, height: height })));
};
export default PhoneScreen;
var templateObject_1, templateObject_2;
//# sourceMappingURL=PhoneScreen.js.map