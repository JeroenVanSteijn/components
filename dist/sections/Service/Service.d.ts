/// <reference types="react" />
declare type ServiceProps = {
    title: string;
    type: string;
    description: string;
    deliverables: string[];
    image: string;
    reverse?: boolean;
    imageBackground?: string;
};
declare const Service: ({ title, type, description, deliverables, image, reverse, imageBackground }: ServiceProps) => JSX.Element;
export default Service;
