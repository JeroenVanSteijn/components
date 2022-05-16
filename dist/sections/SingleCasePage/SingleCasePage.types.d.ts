import { ThemeColors } from "../../theme";
import { ReactNode } from "react";
import { UserPictureProps } from "../../components/UserPictures/UserPicture.types";
export declare enum DeviceTypes {
    laptop = "laptop",
    iphone = "iphone"
}
export declare type CaseIntroProps = {
    title: string;
    subtitle: string;
    text: string;
    image: DeviceProps;
    color: string;
    logo: Logoprops;
};
export declare type DeviceProps = {
    url: string;
    type: DeviceTypes;
};
export declare type Logoprops = {
    url: string;
    width: number;
    height: number;
};
export declare type CaseAboutProps = {
    expertises: string[];
    deliverables: string[];
};
export declare type AboutTextProps = {
    introduction: string[];
    clientNeeds: string[];
};
export declare type AboutProps = {
    bullets: CaseAboutProps;
    text: AboutTextProps;
};
export declare type CaseQuoteProps = {
    text: string;
};
export declare type SummationText = {
    title: string;
    text: string;
};
export declare type SummationBlockProps = {
    title: string;
    titleText: string;
    summationText: SummationText[];
    backgroundColor?: string;
    textColor?: ThemeColors;
    image?: ReactNode;
};
export declare type ScreensAndTextProps = {
    title: string;
    text: string;
    screenOne: string;
    screenTwo?: string;
};
export declare type SingleCasePageContent = {
    intro: CaseIntroProps;
    about: AboutProps;
    quote: CaseQuoteProps;
    challenges: SummationBlockProps;
    features: ScreensAndTextProps[];
    members: UserPictureProps[];
};
