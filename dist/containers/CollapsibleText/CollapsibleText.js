var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from "react";
import { Paragraph } from "../../components";
import styled from "styled-components";
import { Minus, Plus } from "../../icons";
var CollapsibleTextContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 32px;\n\tmax-width: 700px;\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 32px;\n\tmax-width: 700px;\n"])));
var TextContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tborder-bottom: ", ";\n"], ["\n\tborder-bottom: ", ";\n"])), function (props) { return props.color ? props.color + " solid 2px" : "black solid 2px"; });
var StyledParagraph = styled(Paragraph)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tmargin-bottom: 12px;\n"], ["\n\tmargin-bottom: 12px;\n"])));
var StyledTitle = styled(StyledParagraph)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmargin-right: 60px;\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"], ["\n\tmargin-right: 60px;\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"])));
var Icon = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"], ["\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"])));
var CollapsibleText = function (_a) {
    var title = _a.title, description = _a.description, color = _a.color, className = _a.className;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var collapse = function () { return setOpen(!open); };
    return (React.createElement(CollapsibleTextContainer, { className: className },
        React.createElement(TextContainer, { color: color },
            React.createElement(StyledTitle, { fontWeight: "bold", text: title, color: color, onClick: collapse }),
            open && React.createElement(StyledParagraph, { text: description, color: color })),
        React.createElement(Icon, { onClick: collapse }, open
            ? React.createElement(Minus, { color: color, size: 24 })
            : React.createElement(Plus, { color: color, size: 24 }))));
};
export default CollapsibleText;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=CollapsibleText.js.map