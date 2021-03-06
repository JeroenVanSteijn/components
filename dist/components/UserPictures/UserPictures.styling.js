var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { theme } from "../../theme";
import styled from "styled-components";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 7px; \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  margin: 7px; \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
export var UserPictureContainer = styled.figure(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;  \n  padding: 0;\n  width: ", "px;\n  height: ", "px;\n\n  background-color: ", "; \n  border-radius: ", "px;\n  border: 1px solid ", ";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  z-index: 2;\n  overflow: hidden;\n"], ["\n  margin: 0;  \n  padding: 0;\n  width: ", "px;\n  height: ", "px;\n\n  background-color: ", "; \n  border-radius: ", "px;\n  border: 1px solid ", ";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  z-index: 2;\n  overflow: hidden;\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.bgColor; }, function (props) { return props.size; }, theme.colors.black);
export var ShadowContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", "; \n  border-radius: ", "px;\n  border: 1px solid ", ";\n\n  position: absolute;\n  ", "\n  z-index: 1;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", "; \n  border-radius: ", "px;\n  border: 1px solid ", ";\n\n  position: absolute;\n  ", "\n  z-index: 1;\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.shadowColor; }, function (props) { return props.size; }, theme.colors.black, function (props) { return props.shadowPosition; });
export var Image = styled.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100%;\n  object-fit: contain;\n"], ["\n  height: 100%;\n  object-fit: contain;\n"])));
export var Photo = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n"])), function (props) { return props.size; }, function (props) { return props.size; });
export var Balloon = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-left: 20px;\n"], ["\n  margin-left: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=UserPictures.styling.js.map