var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { ArrowLink, Heading, Paragraph, TextBox, UserPicture } from "../../components";
import styled from "styled-components";
import Link from "next/link";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmargin: 20px 0;\n"], ["\n\tmargin: 20px 0;\n"])));
var FoundersPictures = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: -40px;\n\tright: 20px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(", ", auto);\n\tgrid-gap: 8px;\n\talign-items: center;\n"], ["\n\tposition: absolute;\n\ttop: -40px;\n\tright: 20px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(", ", auto);\n\tgrid-gap: 8px;\n\talign-items: center;\n"])), function (props) { return props.countFounders; });
var Footer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n\twidth: 100%;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n\twidth: 100%;\n"])));
var MeetTheFoundersBox = function (_a) {
    var title = _a.title, paragraph = _a.paragraph, founders = _a.founders, link = _a.link;
    var MaybeRenderUserPictures = function () {
        if (founders)
            return React.createElement(FoundersPictures, { countFounders: founders.length }, founders.map(function (founder) { return React.createElement(UserPicture, { key: founder.name, size: 80, person: founder.name, color: founder.color, shadowPosition: founder.shadowPosition }); }));
        return null;
    };
    return (React.createElement(Link, { href: link },
        React.createElement(Container, null,
            React.createElement(TextBox, null,
                React.createElement(MaybeRenderUserPictures, null),
                title && React.createElement(Heading, { type: "h3", text: title }),
                React.createElement(Paragraph, { text: paragraph }),
                link &&
                    React.createElement(Footer, null,
                        React.createElement(ArrowLink, { link: link, text: "Read more" }))))));
};
export default MeetTheFoundersBox;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=MeetTheFoundersBox.js.map