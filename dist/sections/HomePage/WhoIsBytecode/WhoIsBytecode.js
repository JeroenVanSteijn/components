var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { breakpointNameToPx, Employees, isWindowSizeBiggerThan, responsiveValuesCSS } from "../../../index";
import { Heading, Paragraph, Container, Spacer, ArrowLink } from "../../../components";
import Image from "next/image";
var WhoIsBytecodeContainer = styled(Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tpadding-top: 40px;\n\tpadding-bottom: 40px;\n"], ["\n\tpadding-top: 40px;\n\tpadding-bottom: 40px;\n"])));
var styledSpacerResponsiveCSS = responsiveValuesCSS("width", "%", breakpointNameToPx({
    xs: 100,
    lg: 60,
}));
var StyledSpacer = styled(Spacer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n\tmargin-bottom: 30px;\n"], ["\n\t", ";\n\tmargin-bottom: 30px;\n"])), styledSpacerResponsiveCSS);
var coFounderTextContainerResponsiveCSS = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
    xs: "1fr",
    lg: "1fr 1fr"
}));
var CoFounderTextContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tgrid-column-gap: 40px;\n\tpadding-left: 20px\n"], ["\n\t", ";\n\tdisplay: grid;\n\tgrid-column-gap: 40px;\n\tpadding-left: 20px\n"])), coFounderTextContainerResponsiveCSS);
var CoFounderHeading = styled(Heading)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmargin-bottom: 30px;\n"], ["\n\tmargin-bottom: 30px;\n"])));
var bytecodeAsCoFounderContainerResponsiveCSS = responsiveValuesCSS("padding-left", "px", breakpointNameToPx({
    xl: 0
}));
var BytecodeAsCoFounderContainer = styled(Container)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), bytecodeAsCoFounderContainerResponsiveCSS);
var BytecodeAsCoFounder = function () { return (React.createElement(BytecodeAsCoFounderContainer, null,
    React.createElement(StyledSpacer, null),
    React.createElement(CoFounderTextContainer, null,
        React.createElement(CoFounderHeading, { type: "h2", text: "Bytecode as tech co-founder & CTO" }),
        React.createElement(Paragraph, { text: "Many startup founders, like you, are trying to find the right technical partner to develop their MVP.\n\t\t\t\tHowever, finding one is a treasure hunt. Agencies are expensive, tech founders are rare and difficult to retain,\n\t\t\t\tand outsourcing is time-consuming. Besides, many \u201Cpartners\u201D are only in it for the money. But: here you are! You have found us.\n\t\t\t\tBytecode is a technical partner and CTO for startups that invest in your startup (idea).\n\t\t\t\tWe love to assist you through every stage of your journey with development, strategy, and design." })))); };
var whoWeAreContainerResponsiveCSS = function () {
    var gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "1fr 1fr"
    }));
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        xs: 40,
        lg: 100
    }));
    return gridColumns + paddingTop;
};
var WhoWeAreContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tgrid-column-gap: 40px;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tgrid-column-gap: 40px;\n"])), whoWeAreContainerResponsiveCSS);
var WhoWeAreTextContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\talign-self: center;\n\tdisplay: grid;\n\tmargin-bottom: 40px;\n"], ["\n\talign-self: center;\n\tdisplay: grid;\n\tmargin-bottom: 40px;\n"])));
var MeetTheTeamButton = styled(ArrowLink)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tjustify-self: end;\n"], ["\n\tjustify-self: end;\n"])));
var PicturesContainer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tjustify-content: center;\n\tpadding-bottom: 40px;\n"], ["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tjustify-content: center;\n\tpadding-bottom: 40px;\n"])));
var WhoWeAre = function () { return (React.createElement(WhoWeAreContainer, null,
    React.createElement(WhoWeAreTextContainer, null,
        React.createElement(Heading, { type: "h2", text: "Software experts with a passion for startups" }),
        React.createElement(Paragraph, { text: "We understand that you want to have dedicated team members on who you can rely.\n\t\t\t\tWe imagine that you don\u2019t have the resources to hire a whole team and a CTO.\n\t\t\t\tThat is why we would love to be your technical co-founder and CTO. We often invest in the startups we work with,\n\t\t\t\tto strengthen our collaboration and ease your financial stress!\n\t\t\t\tIt makes MVP development more affordable and ensures you have a tech team that\u2019s in it for the long run." }),
        React.createElement(Paragraph, { text: "Together, let's find out the ideal user experience\n\t\t\t\tand goals for your future customers and create your startup and digital product!" }),
        React.createElement(MeetTheTeamButton, { text: "Meet the team", link: "/who-we-are" })),
    React.createElement(PicturesContainer, null, Employees.map(function (employee, index) { return (isWindowSizeBiggerThan("xxl")
        ? React.createElement(Image, { key: index, src: "/images/member-" + employee + ".png", alt: "profile picture", width: 180, height: 270 })
        : React.createElement(Image, { key: index, src: "/images/member-" + employee + ".png", alt: "profile picture", width: 150, height: 225 })); })))); };
var WhoIsBytecode = function () { return (React.createElement(WhoIsBytecodeContainer, null,
    React.createElement(BytecodeAsCoFounder, null),
    React.createElement(WhoWeAre, null))); };
export default WhoIsBytecode;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=WhoIsBytecode.js.map