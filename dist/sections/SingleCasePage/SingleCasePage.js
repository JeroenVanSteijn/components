var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import styled from "styled-components";
import { Heading, Paragraph, Container, UserPicture } from "../../components";
import { CaseAbout, CaseIntro, CaseQuote, ScreensAndText, SummationBlock, } from "../index";
import { breakpointNameToPx, layout, responsiveValuesCSS, theme } from "../../index";
import { CaseTeamMembers } from "../../containers";
var screensAndTextOneContainerResponsiveCSS = function () {
    var paddingTopAndBottom = breakpointNameToPx({
        xs: 60,
        lg: 90,
        xl: 150,
        xxl: 200
    });
    var paddingTop = responsiveValuesCSS("padding-top", "px", paddingTopAndBottom);
    var paddingBottom = responsiveValuesCSS("padding-bottom", "px", paddingTopAndBottom);
    var paddingLeft = responsiveValuesCSS("padding-left", "px", breakpointNameToPx(__assign(__assign({}, layout.container.margin), { xl: 120, xxl: 200 })));
    var backgroundSize = responsiveValuesCSS("background-size", "", breakpointNameToPx({
        xs: "60% auto",
        md: "50% auto",
        lg: "40% auto"
    }));
    return paddingLeft + paddingBottom + paddingTop + backgroundSize;
};
var ScreensAndTextOneContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t", ";\n\tbackground: url(", ") no-repeat left top, url(", ") no-repeat right bottom, ", ";\n\tdisplay: grid;\n\tjustify-items: flex-start;\n"], ["\n\t", ";\n\tbackground: url(", ") no-repeat left top, url(", ") no-repeat right bottom, ", ";\n\tdisplay: grid;\n\tjustify-items: flex-start;\n"])), screensAndTextOneContainerResponsiveCSS, "/images/case-airchip-line1.svg", "/images/case-airchip-line2.svg", theme.colors.colorBrand2);
var ScreensAndTextOne = function (_a) {
    var title = _a.title, text = _a.text, screenOne = _a.screenOne, screenTwo = _a.screenTwo;
    return (React.createElement(ScreensAndTextOneContainer, null,
        React.createElement(ScreensAndText, { title: title, text: text, screenOne: screenOne, screenTwo: screenTwo })));
};
var screensAndTextTwoBackgrounResponsiveCSS = function () {
    var background = responsiveValuesCSS("background", "", breakpointNameToPx({
        lg: "url(" + "/images/case-airchip-line3.svg" + ") no-repeat bottom left"
    }));
    var backgroundSize = responsiveValuesCSS("background-size", "", breakpointNameToPx({
        lg: "30% auto",
        xxl: "auto"
    }));
    return background + backgroundSize;
};
var ScreensAndTextTwoBackground = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t", ";\n"], ["\n\t", ";\n"])), screensAndTextTwoBackgrounResponsiveCSS);
var screensAndTextTwoContainerResponsiveCSS = function () {
    var paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({
        xs: 60,
        md: 90,
        xl: 150,
        xxl: 200
    }));
    var paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({
        xs: 60,
        md: 90,
        xl: 150,
        xxl: 200
    }));
    var paddingRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx(__assign(__assign({}, layout.container.margin), { xl: 120, xxl: 200 })));
    return paddingRight + paddingBottom + paddingTop;
};
var ScreensAndTextTwoContainer = styled(Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tjustify-items: center;\n\tbackground-origin: border-box;\n"], ["\n\t", ";\n\tdisplay: grid;\n\tjustify-items: center;\n\tbackground-origin: border-box;\n"])), screensAndTextTwoContainerResponsiveCSS);
var ScreensAndTextTwo = function (_a) {
    var title = _a.title, text = _a.text, screenOne = _a.screenOne, screenTwo = _a.screenTwo;
    return (React.createElement(ScreensAndTextTwoBackground, null,
        React.createElement(ScreensAndTextTwoContainer, null,
            React.createElement(ScreensAndText, { title: title, text: text, screenOne: screenOne, screenTwo: screenTwo }))));
};
var AboutTextContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tgrid-area: text;\n"], ["\n\tgrid-area: text;\n"])));
var AboutText = function (_a) {
    var introduction = _a.introduction, clientNeeds = _a.clientNeeds;
    return (React.createElement(AboutTextContainer, null,
        React.createElement(Heading, { type: "h2", text: "How did it start?" }),
        introduction.map(function (paragraph, index) { return React.createElement(Paragraph, { key: index, text: paragraph }); }),
        React.createElement(Heading, { type: "h4", text: "Client needs" }),
        clientNeeds.map(function (paragraph, index) { return React.createElement(Paragraph, { key: index, text: paragraph }); })));
};
var SingleCasePage = function (_a) {
    var intro = _a.intro, about = _a.about, quote = _a.quote, challenges = _a.challenges, features = _a.features, members = _a.members;
    return (React.createElement("div", null,
        React.createElement(CaseIntro, { title: intro.title, subtitle: intro.subtitle, text: intro.text, image: intro.image, logo: intro.logo, color: intro.color }),
        React.createElement(CaseAbout, { expertises: about.bullets.expertises, deliverables: about.bullets.deliverables },
            React.createElement(AboutText, { introduction: about.text.introduction, clientNeeds: about.text.clientNeeds })),
        React.createElement(CaseQuote, { text: quote.text }),
        React.createElement(SummationBlock, { title: challenges.title, titleText: challenges.titleText, summationText: challenges.summationText }),
        features.map(function (feature, index) {
            var title = feature.title, text = feature.text, screenOne = feature.screenOne, screenTwo = feature.screenTwo;
            if (index % 2 == 0 || index == 0) {
                return (React.createElement(ScreensAndTextOne, { title: title, text: text, screenOne: screenOne, screenTwo: screenTwo }));
            }
            else {
                return (React.createElement(ScreensAndTextTwo, { title: title, text: text, screenOne: screenOne, screenTwo: screenTwo }));
            }
        }),
        React.createElement(CaseTeamMembers, null, members.map(function (member) {
            return React.createElement(UserPicture, { key: member.person, size: member.size, color: member.color, shadowPosition: member.shadowPosition, person: member.person, balloonText: member.balloonText });
        }))));
};
export default SingleCasePage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=SingleCasePage.js.map