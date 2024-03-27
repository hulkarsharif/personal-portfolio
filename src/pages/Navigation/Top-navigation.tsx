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
`;

const Base = styled(PageContainer)`
    padding-top: 2rem;
    padding-bottom: 1rem;
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
        padding-top: 8.5rem;
    }
    @media (max-width: 30em) {
        //480
    }
`;

const LogoWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    /* background-color: var(--dodger-blue-900); */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 80em) {
        //1280
        margin-left: 2rem;
    }

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

    @media (max-width: 37.5em) {
        //600
        margin-left: 4rem;
    }

    @media (max-width: 30em) {
        //480
        margin-left: 2rem;
    }
    /*@media (max-width: 26.75em) {
        //412

        margin-left: 7rem;
      
    }
    @media (max-width: 25.75em) {
        //412

        margin-left: 7rem;
       
    }

    @media (max-width: 25em) {
        //400
        display: flex;
        margin-left: 5rem;
        
    }*/
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
        margin-right: -30rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        z-index: 20;

        @media (max-width: 25.75em) {
            //412

            margin-left: 5rem;
            /* padding-left: 3rem; */
        }
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
