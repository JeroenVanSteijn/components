import React, { useState } from "react";
import { theme } from "../../theme";
import { UserPictureContainer, Image, ShadowContainer, Container, Balloon, Photo } from "./UserPictures.styling";
import TextBalloon from "../TextBalloon";
var UserPicture = function (_a) {
    var size = _a.size, color = _a.color, person = _a.person, shadowPosition = _a.shadowPosition, balloonText = _a.balloonText;
    var _b = useState(false), isHovered = _b[0], setIshovered = _b[1];
    var handleHover = function () { return setIshovered(!isHovered); };
    var _c = theme.colors.boxes[color], bgColor = _c.bgColor, shadowColor = _c.shadowColor, shadowColorHover = _c.shadowColorHover;
    var shadowAngle = theme.shadows.circles[shadowPosition];
    var RenderInnerContent = function () {
        if (person) {
            return React.createElement(Image, { src: "/images/" + person + ".jpeg", alt: "Startup founder " + person });
        }
        return React.createElement(Image, { src: "/images/user-empty.png", alt: "Startup founder " + person });
    };
    var RenderTextBalloon = function () {
        if (balloonText)
            return React.createElement(Balloon, null,
                React.createElement(TextBalloon, { text: balloonText, width: 200 }));
        return null;
    };
    return (React.createElement(Container, null,
        React.createElement(RenderTextBalloon, null),
        React.createElement(Photo, { size: size },
            React.createElement(UserPictureContainer, { onMouseEnter: handleHover, onMouseLeave: handleHover, bgColor: bgColor, shadowColor: shadowColor, shadowColorHover: shadowColorHover, size: size },
                React.createElement(RenderInnerContent, null)),
            React.createElement(ShadowContainer, { bgColor: bgColor, shadowColor: shadowColor, shadowColorHover: shadowColorHover, size: size, shadowPosition: shadowAngle }))));
};
export default UserPicture;
//# sourceMappingURL=UserPictures.js.map