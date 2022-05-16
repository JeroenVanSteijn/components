export declare type BoxesType = "darkGreen" | "lightGreen" | "purple";
export declare type ShadowPosition = "top" | "bottom";
export interface UserPictureProps {
    size: number;
    color: BoxesType;
    person?: string;
    shadowPosition: ShadowPosition;
    balloonText?: string;
}
export interface UserPictureColorsProps {
    bgColor?: string;
    shadowColor?: string;
    shadowColorHover?: string;
}
export declare type BoxesTypeColors = {
    [k in BoxesType]: UserPictureColorsProps;
};
export interface UserPictureStylingProps extends UserPictureColorsProps {
    size: number;
    shadowPosition?: ShadowPosition | string;
}
