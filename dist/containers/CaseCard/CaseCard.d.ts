/// <reference types="react" />
import { DeviceTypes } from "../../sections/";
declare type CaseCardProps = {
    name: string;
    subtitle: string;
    image: string;
    type: DeviceTypes;
};
declare const CaseCard: ({ name, subtitle, image, type }: CaseCardProps) => JSX.Element;
export default CaseCard;
