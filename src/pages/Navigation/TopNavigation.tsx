import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavigationLink } from "./Links";

import logoMe from "../../design-system/assets/image/Klogo.png";
import { PageContainer } from "../components";
import KLogo from "../../design-system/assets/image/L1995.png";

const links = [
    { text: "HOME", link: "#hero" },
    { text: "SERVICE", link: "#service" },
    { text: "ABOUT", link: "#about" },
    { text: "PROJECTS", link: "#projects" },
    { text: "CONTACT", link: "contacts" }
];

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;
    background-color: var(--black-200);

    @media (max-width: 81.25em) {
        //1300
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    @media (max-width: 56.25em) {
        //900
        padding-left: 3.5rem;
        padding-right: 3.5rem;
    }

    @media (max-width: 26.75em) {
        //428
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
`;

const Base = styled(PageContainer)`
    padding-top: 2rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationLinks = styled.div<{ open: boolean }>`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: var(--space-40);
    font-size: var(--font-size-12);

    @media (max-width: 56.25em) {
        transition: all 0.3s ease-in-out;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};

        //900

        display: flex;
        flex-direction: column;
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 50%;
        padding-top: 12rem;
        justify-content: flex-start;
        z-index: 9;
    }
    @media (max-width: 26.75em) {
        //428
        margin-left: 5rem;
    }
`;

const LogoWrapper = styled.div`
    /* width: 3rem;
    height: 3rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center; */
    /* margin-right: var(--space-40); */
`;

// const LogoText = styled.span`
//     color: #fff; // White color for the initials
//     font-size: 1.5rem;
//     font-weight: bolder;
// `;

const StyledBurger = styled.div<{ open: boolean }>`
    display: none;

    @media (max-width: 56.25em) {
        //900
        margin-right: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        z-index: 20;
    }

    div {
        width: 3.5rem;
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
        <SectionsBase>
            <Base>
                <LogoWrapper>
                    <img src={KLogo} alt="ellipse" />
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
        </SectionsBase>
    );
};

export { TopNavigation };
