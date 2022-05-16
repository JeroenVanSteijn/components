/// <reference types="react" />
declare type CaseCardProps = {
    name: string;
    subtitle: string;
    image: string;
};
declare const CaseCard: ({ name, subtitle, image }: CaseCardProps) => JSX.Element;
export default CaseCard;
