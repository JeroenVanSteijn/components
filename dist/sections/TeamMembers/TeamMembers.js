var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { TeamMember } from "../../containers";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";
import styled from "styled-components";
import { Heading, Paragraph, Subtitle, Container, Spacer } from "../../components";
var teamMembersContainerResponsiveCSS = function () {
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "1fr 1fr"
    }));
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        xs: 0,
        lg: 80,
        xl: 140,
    }));
    var paddingRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx({
        xs: 12,
        md: 24,
        lg: 0
    }));
    var columnGap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({
        md: 50,
        xl: 80
    }));
    return gridColumns + paddingTop + paddingRight + columnGap;
};
var TeamMembersContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tposition: relative;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tposition: relative;\n"])), teamMembersContainerResponsiveCSS);
var teamMembersSpacerResponsiveCSS = function () {
    var display = responsiveValuesCSS("display", "", breakpointNameToPx({ lg: "none" }));
    return display;
};
var TeamMembersSpacer = styled(Spacer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tmargin-top: 80px;\n"], ["\n\t", ";\n\tmargin-top: 80px;\n"])), teamMembersSpacerResponsiveCSS);
var teamMembersLeftColumnResponsiveCSS = responsiveValuesCSS("padding", "", breakpointNameToPx({
    xs: "0",
    lg: "0 30px",
    xl: "0 50px",
    xxl: "0 60px"
}));
var TeamMembersLeftColumn = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tposition: relative;\n"], ["\n\t", ";\n\tposition: relative;\n"])), teamMembersLeftColumnResponsiveCSS);
var teamMembersRightColumnResponsiveCSS = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
    xs: "1fr",
    md: "1fr 1fr",
}));
var TeamMembersRightColumn = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tjustify-items: center;\n\tgrid-column-gap: 20px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tjustify-items: center;\n\tgrid-column-gap: 20px;\n"])), teamMembersRightColumnResponsiveCSS);
var StyledMembersSubtitle = styled(Subtitle)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tmargin-top: 50px;\n"], ["\n\tmargin-top: 50px;\n"])));
var StyledMembersParagraph = styled(Paragraph)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n"], ["\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n"])));
var Sticky = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tposition: sticky;\n\ttop: 120px;\n"], ["\n\tposition: sticky;\n\ttop: 120px;\n"])));
var TeamMembers = function (_a) {
    var members = _a.members;
    return (React.createElement(Container, null,
        React.createElement(TeamMembersSpacer, { reverse: true }),
        React.createElement(TeamMembersContainer, null,
            React.createElement(TeamMembersLeftColumn, null,
                React.createElement(Sticky, null,
                    React.createElement(StyledMembersSubtitle, { text: "The people that make it happen" }),
                    React.createElement(Heading, { type: "h2", text: "Meet the team members" }),
                    React.createElement(StyledMembersParagraph, { text: "If you want to realize your dream, you need to have a good team. That is why our team consists of experienced developers,\n\t\t\t\t\t\t\tdesigners, strategists, and marketers who love to join your startup project.\n\t\t\t\t\t\t\tWho are the people responsible for building the product of your dreams that fits your customers?" }))),
            React.createElement(TeamMembersRightColumn, null, members.map(function (member, index) { return React.createElement(TeamMember, { key: index, member: member }); })))));
};
export default TeamMembers;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=TeamMembers.js.map