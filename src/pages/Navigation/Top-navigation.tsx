import styled from "styled-components";
import { NavigationLink } from "./Links";
import logoMe from "../../design-system/assets/image/22222.png";
import { PageContainer } from "../components";
import { useState } from "react";

const links = [
    { text: "HOME", link: "#hero" },
    { text: "SERVICE", link: "#service" },
    { text: "ABOUT", link: "#about" },
    { text: "PROJECTS", link: "#projects" }

    // { text: "CONTACTS", link: "mailto:sharipovah01@gmail.com" }
];

const Base = styled(PageContainer)`
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationLinks = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: var(--space-20);
`;
const LogoWrapper = styled.div`
    height: 4.5rem;
    align-items: center;

    @media (max-width: 42.8rem) {
        display: block;
    }
`;

const BurgerIcon = styled.div`
    display: none; // Hide by default on larger screens
    cursor: pointer;

    @media (max-width: 42.8rem) {
        display: block; // Show on smaller screens
    }
`;

const TopNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Base>
            <LogoWrapper>
                <img src={logoMe} alt="Logo" />
            </LogoWrapper>

            <NavigationLinks>
                <BurgerIcon onClick={() => setShowMenu(!showMenu)}>
                    ☰
                </BurgerIcon>
                {showMenu && (
                    <>
                        {links.map((link, idx) => (
                            <NavigationLink
                                key={idx}
                                linkText={link.text}
                                linkTo={link.link}
                            />
                        ))}
                    </>
                )}
            </NavigationLinks>
        </Base>
    );
};

export { TopNavigation };
