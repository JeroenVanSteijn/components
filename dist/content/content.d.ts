import { MeetTheFoundersProps } from "src/sections/HomePage/MeetTheFounders/MeetTheFounders.types";
import { Member } from "../containers";
import { EmployeeName } from "./contentGenerics";
export declare const employees: Member[];
export declare const getEmployee: (name: EmployeeName) => Member | undefined;
export declare const getEmployees: (names: EmployeeName[]) => Member[];
export declare const footerContent: {
    slogan: string;
    email: string;
    number: string;
    office1: {
        name: string;
        address: string;
        number: string;
        zipCode: string;
        city: string;
    };
};
export declare const links: {
    linkedin: string;
    instagram: string;
    youtube: string;
    termsAndConditions: string;
    privacyPolicy: string;
    cookiePolicy: string;
    meetingPlanner: string;
    mapsQuery: string;
    publicTransportRoute: string;
    autoRoute: string;
};
export declare type Case = {
    name: string;
    subtitle: string;
    image: string;
};
export declare const cases: Case[];
export declare const getRandomCase: () => string;
export declare const MeetTheFoundersData: MeetTheFoundersProps[];
declare type FrequentlyAskedQuestion = {
    question: string;
    answer: string;
};
export declare const FrequentlyAskedQuestionsContent: FrequentlyAskedQuestion[];
export {};
