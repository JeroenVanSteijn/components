import React from "react";
import { EmployeeName } from "../../content/contentGenerics";
export interface Member {
    name: string;
    jobTitle: string;
    id: EmployeeName;
    about: string;
    focus: string[];
    github?: string;
    email?: string;
    linkedIn?: string;
}
interface TeamMemberProps {
    member: Member;
}
declare const TeamMember: React.FC<TeamMemberProps>;
export default TeamMember;
