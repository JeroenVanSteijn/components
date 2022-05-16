import React from "react";
import { theme } from "../../theme";
import { useWindowSize } from "../../helpers/device";
import { DesktopMenu } from "./Components/DesktopMenu";
import { MobileMenu } from "./Components/MobileMenu";
var Menu = function (_a) {
    var navLinks = _a.navLinks;
    var device = useWindowSize();
    if (!device.width || (theme.breakpoints.xl && device.width > theme.breakpoints.xl)) {
        return React.createElement(DesktopMenu, { navLinks: navLinks });
    }
    return (React.createElement(MobileMenu, { navLinks: navLinks }));
};
export default Menu;
//# sourceMappingURL=Menu.js.map