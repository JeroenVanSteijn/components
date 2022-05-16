import { ReactNode } from "react";
import { WithStyle } from "../../types/utils";
declare type PageIntroProps = {
    subtitle?: string;
    title: string;
    paragraph: string;
    columnSizes?: string;
    image?: ReactNode;
    link?: ReactNode;
};
declare const PageIntro: ({ subtitle, title, paragraph, image, columnSizes, link, className }: WithStyle<PageIntroProps>) => JSX.Element;
export default PageIntro;
