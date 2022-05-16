/// <reference types="react" />
import { Member } from "../../containers";
declare type TeamMembersProps = {
    members: Member[];
};
declare const TeamMembers: ({ members }: TeamMembersProps) => JSX.Element;
export default TeamMembers;
