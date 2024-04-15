import React from "react";
import styled from "styled-components";

type PropsType = {
    linkText: string;
    linkTo: string;
    onClick?: () => void;
};

const StyledLink = styled.a`
    color: var(--black);
    font-weight: var(--font-weight-500);
    font-size: var(--font-size-14);
`;

const NavigationLink: React.FC<PropsType> = ({ linkText, linkTo, onClick }) => {
    return (
        <StyledLink href={linkTo} className="paragraph-md" onClick={onClick}>
            {linkText}
        </StyledLink>
    );
};

export { NavigationLink };
