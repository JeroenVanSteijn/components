var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { layout } from "../../theme";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";
var paddingLeft = responsiveValuesCSS("padding-left", "px", breakpointNameToPx(layout.container.margin));
var paddingRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx(layout.container.margin));
var responsivePaddingsCSS = paddingLeft + paddingRight;
export var FullWidthContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    background-color: ", "\n"], ["\n    ", ";\n    background-color: ", "\n"])), responsivePaddingsCSS, function (props) { return props.background ? props.background : "unset"; });
export var Container = styled(FullWidthContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 1350px;\n    margin: auto;\n"], ["\n    max-width: 1350px;\n    margin: auto;\n"])));
export var MenuContainer = styled(FullWidthContainer)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", ";\n    position: fixed;\n    top: 0;\n    z-index: 9998;\n    backdrop-filter: blur(5px);\n    box-sizing: border-box;\n    width: 100%;\n"], ["\n    ", ";\n    position: fixed;\n    top: 0;\n    z-index: 9998;\n    backdrop-filter: blur(5px);\n    box-sizing: border-box;\n    width: 100%;\n"])), responsivePaddingsCSS);
export var InitialContainer = styled(FullWidthContainer)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding-top: 100px;\n"], ["\n    padding-top: 100px;\n"])));
export default Container;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Container.js.map