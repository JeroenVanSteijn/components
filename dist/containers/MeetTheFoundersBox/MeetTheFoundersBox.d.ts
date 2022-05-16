import React from "react";
import { Founder } from "src/sections/HomePage/MeetTheFounders/MeetTheFounders.types";
interface MeetTheFoundersBoxProps {
    title?: string;
    paragraph: string;
    founders?: Founder[];
    link: string;
}
declare const MeetTheFoundersBox: React.FC<MeetTheFoundersBoxProps>;
export default MeetTheFoundersBox;
