import { useEffect, useState } from "react";
import { theme } from "../theme";
export var useWindowSize = function () {
    var _a = useState({
        width: undefined,
        height: undefined,
    }), windowSize = _a[0], setWindowSize = _a[1];
    useEffect(function () {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowSize;
};
export var isWindowDesktop = function () {
    var width = useWindowSize().width;
    return !width || (theme.breakpoints.xl && width > theme.breakpoints.xl);
};
export var isWindowSizeBiggerThan = function (size) {
    var width = useWindowSize().width;
    return !width || (theme.breakpoints[size] && width > theme.breakpoints[size]);
};
//# sourceMappingURL=device.js.map