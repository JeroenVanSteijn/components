var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Children } from "react";
import { Container, Heading } from "../../components";
import { responsiveValuesCSS, breakpointNameToPx } from "../../helpers";
import styled from "styled-components";
var caseTeamMembersSectionResponsiveCSS = function () {
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        xs: 30,
    }));
    var paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({
        xs: 30,
        md: 80,
    }));
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        sm: "1fr",
        md: "290px auto"
    }));
    return paddingBottom + paddingTop + gridColumns;
};
var membersContainerResponsiveCSS = function () {
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "auto",
        sm: "repeat(2, auto)"
    }));
    var justifyContent = responsiveValuesCSS("justify-content", "", breakpointNameToPx({
        xs: "start",
        md: "center"
    }));
    return gridColumns + justifyContent;
};
var CaseTeamMembersContainer = styled(Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tmargin: 0 auto;\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-content: center;\n\tgrid-gap: 1em;\n\tbackground-origin: border-box;\n"], ["\n\t", ";\n\tmargin: 0 auto;\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-content: center;\n\tgrid-gap: 1em;\n\tbackground-origin: border-box;\n"])), caseTeamMembersSectionResponsiveCSS);
var MembersContainer = styled(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tmargin: 0 auto;\n\n\tdisplay: grid;\n\tgap: 2em;\n\tjustify-items: center;\n\talign-items: end;\n\tbackground-origin: border-box;\n\n\ttext-align: center;\n"], ["\n\t", ";\n\tmargin: 0 auto;\n\n\tdisplay: grid;\n\tgap: 2em;\n\tjustify-items: center;\n\talign-items: end;\n\tbackground-origin: border-box;\n\n\ttext-align: center;\n"])), membersContainerResponsiveCSS);
/* @ts-ignore */
var CaseTeamMembers = function (_a) {
    var children = _a.children;
    var count = Children.count(children);
    return (React.createElement(CaseTeamMembersContainer, null,
        React.createElement(Heading, { text: "Meet startup team members", type: "h2" }),
        React.createElement(MembersContainer, { countItems: count }, children)));
};
export default CaseTeamMembers;
var templateObject_1, templateObject_2;
//# sourceMappingURL=CaseTeamMembers.js.map