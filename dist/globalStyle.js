var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";
export default createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  *{\n    -ms-overflow-style: none;\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  },\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  a[disabled] {\n    pointer-events: none;\n  }\n\n  a {\n    text-decoration: none;\n    color: unset;\n  }\n\n  ul {\n      list-style-type: none;\n      margin-block-start: 0;\n      margin-block-end: 0;\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n      padding-inline-start: 0;    \n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", "px;\n  }\n"], ["\n  ", "\n  *{\n    -ms-overflow-style: none;\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  },\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  a[disabled] {\n    pointer-events: none;\n  }\n\n  a {\n    text-decoration: none;\n    color: unset;\n  }\n\n  ul {\n      list-style-type: none;\n      margin-block-start: 0;\n      margin-block-end: 0;\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n      padding-inline-start: 0;    \n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", "px;\n  }\n"])), normalize, theme.typography.paragraph.font, theme.typography.baseSize);
var templateObject_1;
//# sourceMappingURL=globalStyle.js.map