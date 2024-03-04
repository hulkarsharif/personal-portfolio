import React from "react";
import sprite from "./sprite.svg";
import { IconProps } from "./type";

const Icon: React.FC<IconProps> = ({ iconName, className, onClick }) => {
    const handleOnClick = () => {
        onClick && onClick();
    };
    return (
        <svg
            height="3.2rem"
            width="3.2rem"
            className={className || ""}
            onClick={handleOnClick}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };
