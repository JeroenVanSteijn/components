import { breakpoints } from "../theme";
export var responsiveValuesCSS = function (cssProp, // the CSS property to apply to the breakpoints
cssPropUnits, // the units of the CSS property (can set equal to "" and apply units to values directly)
values, // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
mediaQueryType // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) {
    if (cssProp === void 0) { cssProp = "margin"; }
    if (cssPropUnits === void 0) { cssPropUnits = "px"; }
    if (mediaQueryType === void 0) { mediaQueryType = "min-width"; }
    var breakpointProps = values.reduce(function (mediaQueries, value) {
        var _a = [
            Object.keys(value)[0],
            Object.values(value)[0].toString(),
        ], screenBreakpoint = _a[0], cssPropBreakpoint = _a[1];
        if (screenBreakpoint === "400") {
            return (mediaQueries + (cssProp + ": " + cssPropBreakpoint + cssPropUnits + ";"));
        }
        return (mediaQueries + ("\n\t\t  @media screen and (" + mediaQueryType + ": " + screenBreakpoint + "px) {\n\t\t\t" + cssProp + ": " + cssPropBreakpoint + cssPropUnits + ";\n\t\t  }\n      "));
    }, "");
    return breakpointProps;
};
export var breakpointNameToPx = function (input) {
    return Object.entries(input).map(function (_a) {
        var _b;
        var inputKey = _a[0], inputValue = _a[1];
        var newKey = breakpoints[inputKey];
        return _b = {}, _b[newKey] = inputValue, _b;
    });
};
//# sourceMappingURL=responsiveCss.js.map