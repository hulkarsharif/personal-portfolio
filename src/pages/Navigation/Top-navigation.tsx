import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavigationLink } from "./Links";
import logoMe from "../../design-system/assets/image/22222.png";
import { PageContainer } from "../components";

const links = [
    { text: "HOME", link: "#hero" },
    { text: "SERVICE", link: "#service" },
    { text: "ABOUT", link: "#about" },
    { text: "PROJECTS", link: "#projects" }
];

const Base = styled(PageContainer)`
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 84em) {
        //1344
        display: flex;
        padding-right: 50rem;
    }

    @media (max-width: 75em) {
        //1200
        padding-right: 40rem;
    }
`;

const NavigationLinks = styled.div<{ open: boolean }>`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: var(--space-20);

    @media (max-width: 56.25em) {
        transition: all 0.3s ease-in-out;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        //900
        flex-flow: column nowrap;
        background-color: var(--gray-200);
        position: fixed;
        top: 0;
        right: 0;
        height: 5.5rem;
        width: 20rem;
        padding-top: 3.5rem;
    }
`;

const LogoWrapper = styled.div`
    height: 4.5rem;
    align-items: center;

    @media (max-width: 75em) {
        //1200
        display: flex;
        padding-left: 6rem;
    }

    @media (max-width: 56.25em) {
        //900
        display: flex;
        padding-left: 0rem;
    }

    @media (max-width: 25em) {
        //400
        display: flex;
        padding-left: 3rem;
    }
`;

const StyledBurger = styled.div<{ open: boolean }>`
    display: none; /* Initially hide on larger screens */

    @media (max-width: 56.25em) {
        //900
        margin-right: -25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        z-index: 20;
    }

    div {
        width: 3rem;
        height: 0.3rem;
        background-color: #333333bc;
        border-radius: 15px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const TopNavigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <Base>
            <LogoWrapper>
                <img src={logoMe} alt="Logo" />
            </LogoWrapper>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <NavigationLinks open={open}>
                {links.map((link, idx) => (
                    <NavigationLink
                        key={idx}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </NavigationLinks>
        </Base>
    );
};

export { TopNavigation };
