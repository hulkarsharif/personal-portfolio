export type IconName =
    | "red-icon"
    | "green-icon"
    | "blue-icon"
    | "small-gr-icon"
    | "small-sc-icon"
    | "small-pr-icon"
    | "primary-icon"
    | "three-dots";

export type IconProps = {
    iconName?: IconName;
    className?: string;
    height?: string;
    width?: string;
    onClick?: () => void;
};
