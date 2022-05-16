var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { IconTitle, Paragraph } from "../../components";
import styled from "styled-components";
var BulletText = styled(Paragraph)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 0;\n\tpadding-left: 10px;\n"], ["\n\tmargin: 0;\n\tpadding-left: 10px;\n"])));
var Bullet = function (_a) {
    var text = _a.text;
    return (React.createElement(BulletText, { text: "\u2022 \u00A0" + text }));
};
var TextContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tpadding-left: 58px\n"], ["\n\tpadding-left: 58px\n"])));
var BulletList = function (_a) {
    var list = _a.list;
    return list ? (React.createElement(TextContainer, null, list.map(function (item, index) { return React.createElement(Bullet, { key: index, text: item }); }))) : null;
};
var StyledParagraph = styled(Paragraph)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmargin-bottom: 0;\n"], ["\n\tmargin-bottom: 0;\n"])));
var Text = function (_a) {
    var text = _a.text;
    return text ? (React.createElement(TextContainer, null,
        React.createElement(StyledParagraph, { text: text }))) : null;
};
var IconSummaryBlockContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmax-width: 500px;\n"], ["\n\tmax-width: 500px;\n"])));
var IconSummaryBlock = function (_a) {
    var Icon = _a.Icon, list = _a.list, title = _a.title, paragraph = _a.paragraph, className = _a.className;
    return (React.createElement(IconSummaryBlockContainer, { className: className },
        React.createElement(IconTitle, { icon: Icon, text: title, big: true }),
        React.createElement(Text, { text: paragraph }),
        React.createElement(BulletList, { list: list })));
};
export default IconSummaryBlock;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=IconSummaryBlock.js.map