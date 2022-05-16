var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { Heading, Paragraph, Subtitle } from "../../components";
import { theme } from "../../theme";
import styled from "styled-components";
import { CollapsibleText } from "../../containers";
import { FrequentlyAskedQuestionsContent } from "../../content";
import { breakpointNameToPx, isWindowSizeBiggerThan, responsiveValuesCSS } from "../../helpers";
import Image from "next/image";
var FAQTextContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: grid;\n\tgrid-template-columns: 24px 1fr;\n\tgrid-column-gap: 30px;\n\tgrid-row-gap: 30px;\n\tpadding: 160px 20px;\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 24px 1fr;\n\tgrid-column-gap: 30px;\n\tgrid-row-gap: 30px;\n\tpadding: 160px 20px;\n"])));
var BulletText = styled(Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tgrid-column: 1;\n"], ["\n\tgrid-column: 1;\n"])));
var StyledCollapsibleText = styled(CollapsibleText)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tgrid-column: 2;\n"], ["\n\tgrid-column: 2;\n"])));
var FrequentlyAskedQuestionsTitle = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tgrid-column: 2;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 30px;\n\t&:after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\twidth: 30%;\n\t\tborder-bottom: 2px solid black;\n\t}\n"], ["\n\tgrid-column: 2;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 30px;\n\t&:after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\twidth: 30%;\n\t\tborder-bottom: 2px solid black;\n\t}\n"])));
var FrequentlyAskedQuestion = function (_a) {
    var title = _a.title, description = _a.description, index = _a.index;
    return (React.createElement(React.Fragment, null,
        React.createElement(BulletText, { text: "0" + index }),
        React.createElement(StyledCollapsibleText, { title: title, description: description, color: "black" })));
};
export var FrequentlyAskedQuestionsText = function () { return (React.createElement(FAQTextContainer, null,
    React.createElement(FrequentlyAskedQuestionsTitle, null,
        React.createElement(Subtitle, { text: "Can we help you?" }),
        React.createElement(Heading, { type: "h2", text: "Frequently asked questions" })),
    FrequentlyAskedQuestionsContent.map(function (frequentlyAskedQuestion, index) { return React.createElement(FrequentlyAskedQuestion, { key: index, title: frequentlyAskedQuestion.question, description: frequentlyAskedQuestion.answer, index: index + 1 }); }))); };
var frequentlyAskedQuestionsContainerResponsiveCSS = function () {
    var columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({
        xs: "1fr",
        lg: "360px 1fr"
    }));
    var justifyContent = responsiveValuesCSS("justify-content", "", breakpointNameToPx({
        xs: "center",
        lg: "start"
    }));
    return columns + justifyContent;
};
var FrequentlyAskedQuestionsContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t", ";\n\tdisplay: grid;\n\tbackground-color: ", ";\n"], ["\n\t", ";\n\tdisplay: grid;\n\tbackground-color: ", ";\n"])), frequentlyAskedQuestionsContainerResponsiveCSS, theme.colors.colorBrand2);
var FrequentlyAskedQuestions = function () { return (React.createElement(FrequentlyAskedQuestionsContainer, null,
    isWindowSizeBiggerThan("lg")
        && React.createElement(Image, { src: "/images/faq-background.svg", height: 556, width: 360 }),
    React.createElement(FrequentlyAskedQuestionsText, null))); };
export default FrequentlyAskedQuestions;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=FrequentlyAskedQuestions.js.map