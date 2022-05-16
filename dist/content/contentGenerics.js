import React from "react";
import { getEmployee } from "./content";
import { TeamMember } from "../containers";
export var Employees = [
    "jeroen",
    "nick",
    "chris",
    "tiko",
    "suzanne",
    "nietzsche"
];
export var EmployeeCard = function (_a) {
    var name = _a.name;
    var employee = getEmployee(name);
    if (!employee) {
        return null;
    }
    return React.createElement(TeamMember, { member: employee });
};
//# sourceMappingURL=contentGenerics.js.map